FROM nginx
COPY nginx.conf /etc/nginx/
COPY dist/angular-social /usr/share/nginx/html
