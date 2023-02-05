Dockerfile
FROM node
WORKDIR /projects
RUN npm install -g @angular/cli@11.2.2
EXPOSE 4200
