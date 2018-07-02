FROM node:carbon

COPY entrypoint.sh /usr/src/app/entrypoint.sh
COPY global_config_template.temp /usr/src/app/global_config_template.temp

# Create app directory
RUN mkdir -p /usr/src/app/public/
COPY ./public/ /usr/src/app/public/

# install express server
COPY package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install express
RUN npm install connect-history-api-fallback

# set entry point of script to change backend domain
RUN chmod +x *.sh
ENTRYPOINT ["./entrypoint.sh"]

COPY server.js /usr/src/app/
EXPOSE 8080
CMD [ "npm", "run", "server" ]
