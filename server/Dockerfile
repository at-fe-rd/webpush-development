FROM node:9

# Create a directory where our app will be placed
RUN mkdir -p /nodejs-backend

# Change directory so that our commands run inside this new directory
WORKDIR /nodejs-backend

# Copy dependency definitions
COPY package.json /nodejs-backend

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /nodejs-backend

# Expose the port the app runs in
EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && npm start
