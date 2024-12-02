FROM node

WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install
COPY . .

ENV SESSION_ID=
ENV PORT=8080

CMD ["npm", "start"]
