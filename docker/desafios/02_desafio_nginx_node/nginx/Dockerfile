FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY . /etc/nginx/conf.d


RUN apk update && \
    apk add wget netcat-openbsd && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for


