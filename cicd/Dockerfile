FROM node:24.0.1-bullseye


ENTRYPOINT [ "node", "index.js" ]

# Mutable stuff
RUN apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_17.x | bash - \
  && apt-get install -y nodejs \
  && curl -L https://www.npmjs.com/install.sh | sh

WORKDIR /usr/src/app
COPY dist/* .
COPY ./node_modules ./node_modules
