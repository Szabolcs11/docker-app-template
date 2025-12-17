# Development Workflow

## Project: docker-app-template

### Branch Deployment

- **Main branch (master)**

  - Commits to the main branch deploy changes to the **production environment**.
  - Production containers:
    - `docker-api-template`
    - `docker-app-template`

- **Development branch (dev)**
  - Commits to the `dev` branch deploy changes to the **development environment**.
  - Development containers:
    - `dev-docker-api-template`
    - `dev-docker-app-template`

### Ports

- **API containers:** internal port `3102`
- **App containers:** internal port `80`

> Note: These ports are internal and used by Nginx Proxy Manager. Host ports are not required.

### CI/CD Workflow

- `workflow/deploy.yml` determines which containers to start and which Docker Compose file to use based on the branch of the commit.
  - `master` → `docker-compose.yml` (production)
  - `dev` → `docker-compose.dev.yml` (development)
