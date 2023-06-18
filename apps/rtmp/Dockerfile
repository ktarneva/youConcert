FROM tiangolo/nginx-rtmp

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=rtmp --docker

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /rtmp/