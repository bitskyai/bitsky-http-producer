FROM mhart/alpine-node:12

LABEL maintainer="BitSky docker maintainers <help.bitskyai@gmail.com>"

# create app directory
WORKDIR /usr/bitsky


COPY package*.json ./
COPY index.js ./
COPY server.js ./
COPY utils.js ./
COPY yarn.lock ./

# Only install production dependencies
RUN yarn --production=true

EXPOSE 8090
CMD ["node", "index.js"]

# Metadata
LABEL bitsky.image.vendor="BitSky" \
    bitsky.image.url="https://bitsky.ai" \
    bitsky.image.title="BitSky Service Producer" \
    bitsky.image.description="Response for executing tasks that don't require chrome, based on Axios" \
    bitsky.image.documentation="https://docs.bitsky.ai"