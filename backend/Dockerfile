# -------- Build stage --------
FROM maven:3.9-eclipse-temurin-17-alpine AS build

WORKDIR /build

# Cache dependencies
COPY userapp/pom.xml .
RUN mvn dependency:go-offline

# Copy source and build
COPY userapp/src ./src
RUN mvn clean package -DskipTests


# -------- Runtime stage --------
FROM eclipse-temurin:17-jre-alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=build /build/target/userapp-0.0.1-SNAPSHOT.jar app.jar
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

EXPOSE 8080

ENTRYPOINT [ "java", "-XX:MaxRAMPercentage=75", "-jar", "/app/app.jar"]