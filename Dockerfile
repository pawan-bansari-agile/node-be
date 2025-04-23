# FROM node:18.13.0
#FROM reg-harbor.agiletechnologies.in/agile_node18.13.0_alpine/agile_node18.13.0_alpine:latest
# FROM 622298325867.dkr.ecr.ap-south-1.amazonaws.com/base-node:latest
FROM node:18
RUN apk --no-cache add curl

####################################
#  Create Directory               #
####################################
RUN mkdir -p /usr/src/app/

###################################
#  Give Permission To Directory   #
##################################
RUN chmod 777 -R /usr/src/app/

###################################
#  Make Working Directory         #
###################################
WORKDIR /usr/src/app

###################################
#Copy Package File To Working Dir.#
###################################
COPY package*.json /usr/src/app/

###################################
#     NPM Package Install         #
###################################
RUN npm install

####################################
#Copy Source Code Into Working Dir.#
####################################
COPY . /usr/src/app
RUN rm -rf .git

####################################
#    Expose 7244 Port              #
####################################
EXPOSE 3000

####################################
#    Start Backend Server          #
####################################
CMD ["npm", "run", "start:dev"]
