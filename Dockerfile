FROM node:18

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Zorg ervoor dat Astro op poort 80 draait, zoals EasyPanel verwacht
ENV PORT=80

EXPOSE 80

CMD ["npm", "start"]