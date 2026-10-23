# DigitalBank

## Author

| Roll No. | Name | GitHub username |
|---|---|---|
| 24ESKCS108 | Devansh Joshi | Devansh232406 |

## About
DigitalBank is a web-based financial management application designed to help users track and organize their personal finances.

Core Features

- Expense & Income Tracking: Log and monitor incoming and outgoing transactions in real time.

- Account Overview: View current balances, personal profile details, and linked cards.

- Money Transfers: Manage fund transfers between accounts or users via dedicated transfer interfaces.

- User Management: Secure user authentication with signup, login, and profile setting management.


## Tech stack

- Frontend: HTML, CSS
- Backend: JavaScript
- Database: NULL

## Running with Docker Compose

Build and start the application:

```bash
docker compose up -d --build
```

Check container status and logs:

```bash
docker compose ps
docker compose logs --tail=50
```


- **Live URL:** https://digitalbank-e6ap.onrender.com
- **Docker image:** https://hub.docker.com/r/devansh232406/devops-24eskcs108
  
Stop the services:

```bash
docker compose down
```

## Kubernetes Deployment

Apply the Deployment and Service manifests:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

Check the deployment and pods:

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

Access the application through port forwarding:

```bash
kubectl port-forward service/digitalbank 8080:80
```

Open http://localhost:8080 while port forwarding is running.

## Monitoring

Prometheus scrapes the configured Prometheus and NGINX exporter targets every 15 seconds.

- Prometheus dashboard: http://localhost:9090
- NGINX exporter metrics: http://localhost:9113/metrics
- Prometheus target health: http://localhost:9090/targets

Confirm that the configured targets show as `UP`.

## CI/CD

- **GitHub Actions:** Runs the repository's configured CI workflow.
- **Jenkins:** Runs the configured Jenkins pipeline.

Check the respective build logs for the latest execution status.
