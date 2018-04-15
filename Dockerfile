FROM nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 8000

COPY app /dist

COPY nginx.conf /etc/nginx/nginx.conf