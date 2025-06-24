# ---- Build stage ----
FROM maven:3.9.5-eclipse-temurin-17 AS builder
WORKDIR /build
COPY pom.xml .
RUN mvn -B dependency:go-offline
COPY src ./src
RUN mvn -B package -DskipTests

# ---- Runtime stage ----
FROM eclipse-temurin:17-jre
WORKDIR /app
EXPOSE 8084

# Copy wait-for-it.sh
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY --from=builder /build/target/*.jar app.jar

# Use wait-for-it to wait for the MySQL DB to be ready before starting the app
ENTRYPOINT ["/wait-for-it.sh", "service-two-db:3306", "--timeout=60", "--", "java", "-Xmx256m", "-Xss32m", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]