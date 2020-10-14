# BitSky HTTP Producer

## Configuration

### Environment Variables

1. `BITSKY_BASE_URL`{String}: **Required**. Your BitSky Application's base url. Example: `https://bitsky.herokuapp.com`
2. `GLOBAL_ID`{String}: **Required**. Global ID of the headless producer you want to connect. Example: `YWdlbnQ6OjE1OTMwNjYzODY5MDU6OmU3MjAwZmU5LWViZTktNDc3Zi1hMDY1LTEzYjFiOTQ3YTAyMQ==`
3. `PRODUCER_SERIAL_ID`{String}: **Optional**. An UUID to idenity this producer, better you keep same value for this producer. If you didn't provide then it will automatically generate one for you. Example: `b7f6a100-9a35-4df3-bef9-2c1f6d8c866e`
4. `LOG_LEVEL`{String}: **Optional**. Winston logging level. Default is `info`, find detail from [Winston Logging Levels](https://github.com/winstonjs/winston#logging-levels)
5. `PRODUCER_HOME`{String}: **Optional**. How folder of your producer. You need to set absolute path. Log or other files will be stored relative to `PRODUCER_HOME`.
6. `PORT`: **Optional**. Port number for this server. Default value is `8090`, when you run it in docker mode, you can map host port to `8090`

## Local

If you want to run it local, make sure you already installed [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

1. Install node_modules. `npm install`
2. Start server
   ```
   export BITSKY_BASE_URL=http://10.0.0.247:9099 && \
   export GLOBAL_ID=9e788b30-23e9-423a-bf30-1f65a7213182 && \
   npm start
   ```
   It start a server on local, you can access it [http://localhost:8090](http://localhost:8090)

> You also can change other Environment Variables

## Docker

### Use default configurations

```
docker run -p 8200:8090 \
           -e BITSKY_BASE_URL=http://10.0.0.247:9099 \
           -e GLOBAL_ID=9e788b30-23e9-423a-bf30-1f65a7213182 \
           bitskyai/http-producer
```

### Persist Log
If you want to persist log, screenshot or chrome session

```
docker run -p 8090:8090 \
           -v /Users/neo/Downloads/http/:/usr/http \
           -e PRODUCER_HOME=/usr/http \
           -e PRODUCER_SERIAL_ID=889708a2-94c6-40da-9c6f-59e9a53b436c \
           -e BITSKY_BASE_URL=http://10.0.0.247:9099 \
           -e GLOBAL_ID=9e788b30-23e9-423a-bf30-1f65a7213182 \
           bitskyai/http-producer
```

You can access HTTP producer by [http://localhost:8090](http://localhost:8090)

> You also can change other Environment Variables

## Heroku

You can simply deploy this app to Heroku by click this button:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
