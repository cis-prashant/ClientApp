FROM node:18.13.0 As builder

### STAGE 1: Build ###
WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

ARG ENVIRONMENT
ENV ENVIRONMENT $ENVIRONMENT

RUN echo "Environment: ${ENVIRONMENT}"
RUN npm run build-${ENVIRONMENT}

### STAGE 2: Run ###
FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/client-app/ /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
