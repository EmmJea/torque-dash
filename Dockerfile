FROM node:12-bullseye
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser app
RUN apt-get update || : && apt-get install python -y

COPY . .
RUN rm -rf node_modules

RUN npm install
RUN npm i -g nodemon

RUN chown -R app /opt/app
USER app
EXPOSE 3000
CMD [ "npm", "run", "start" ]
