FROM node:20-alpine

# 1. Gebruik lichte Node-versie (sneller en kleiner)
WORKDIR /app

# 2. Kopieer alleen package info voor installatiefase (cache-friendly)
COPY package*.json ./

RUN npm install

# 3. Daarna pas de rest kopiëren
COPY . .

RUN npm run build

# 4. Poort 3000 gebruiken (Cloudron's standaard Docker reverse proxy werkt goed hiermee)
ENV PORT=3000

EXPOSE 3000

# 5. Preview gebruiken voor SSR (zoals Astro het adviseert)
CMD ["npm", "run", "preview"]