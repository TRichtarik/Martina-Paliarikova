#!/bin/bash

# Production Deployment Script for Martina Paliariková Portfolio
# Usage: ./deploy.sh

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  Martina Paliariková Portfolio${NC}"
echo -e "${GREEN}  Production Deployment${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker is not installed${NC}"
    echo "Please install Docker: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo -e "${RED}Error: Docker Compose is not installed${NC}"
    echo "Please install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

# Determine docker compose command
if docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
else
    DOCKER_COMPOSE="docker-compose"
fi

echo -e "${YELLOW}Step 1: Pulling latest changes from Git...${NC}"
git pull origin main

echo ""
echo -e "${YELLOW}Step 2: Stopping existing containers...${NC}"
$DOCKER_COMPOSE down

echo ""
echo -e "${YELLOW}Step 3: Building Docker image...${NC}"
$DOCKER_COMPOSE build --no-cache

echo ""
echo -e "${YELLOW}Step 4: Starting containers...${NC}"
$DOCKER_COMPOSE up -d

echo ""
echo -e "${YELLOW}Step 5: Waiting for application to start...${NC}"
sleep 10

# Check if container is running
if [ "$($DOCKER_COMPOSE ps -q web)" ]; then
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  Deployment Successful! ✓${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "Application is running at: ${GREEN}http://localhost:3000${NC}"
    echo ""
    echo "Useful commands:"
    echo "  - View logs:        $DOCKER_COMPOSE logs -f web"
    echo "  - Stop:             $DOCKER_COMPOSE down"
    echo "  - Restart:          $DOCKER_COMPOSE restart"
    echo "  - View status:      $DOCKER_COMPOSE ps"
    echo ""
else
    echo ""
    echo -e "${RED}========================================${NC}"
    echo -e "${RED}  Deployment Failed! ✗${NC}"
    echo -e "${RED}========================================${NC}"
    echo ""
    echo "Check logs with: $DOCKER_COMPOSE logs web"
    exit 1
fi

