# ========== Build Angular app ==========
FROM node:20 AS builder
WORKDIR /app
COPY web-application/package*.json ./web-application/
RUN cd web-application && npm install
COPY web-application ./web-application
RUN cd web-application && npm run build --prod

# ========== NGINX to serve static files ==========
FROM nginx:alpine
# Remove default config
RUN rm /etc/nginx/conf.d/default.conf
# Copy custom nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Copy built Angular app to NGINX html directory
COPY --from=builder /app/web-application/dist/* /usr/share/nginx/html/
# (If your Angular output is in a subfolder, adjust the COPY source)
