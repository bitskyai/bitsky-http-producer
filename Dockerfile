FROM mhart/alpine-node:12

LABEL maintainer="Munew docker maintainers <help.munewio@gmail.com>"

# create app directory
WORKDIR /usr/munew


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
LABEL munew.image.vendor="Munew" \
    munew.image.url="https://munew.io" \
    munew.image.title="Munew Service Agent" \
    munew.image.description="Response for executing tasks that don't require chrome, based on Axios" \
    munew.image.documentation="https://docs.munew.io"