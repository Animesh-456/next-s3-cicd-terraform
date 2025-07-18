# Nextjs S3 CI/CD with Terraform

## 📌 Overview
Deploy a Next app to AWS S3 using GitHub Actions and provision infra using Terraform.


## About the project

WordPond is a simple and elegant React app that fetches a new random English word and displays its meaning and example. Ideal for vocabulary building and word lovers.

## ✨ Features
- Random word generation
- Fetches definition and usage from Free Dictionary API
- Clean and responsive UI
- Option to save favorites (WIP)

## ⚙️ Tech Stack
- Nextjs
- Axios
- [https://dummyjson.com/quotes/random](https://dummyjson.com/quotes/random)
- Tailwind CSS (optional)
- AWS S3
- GitHub Actions
- Terraform

## 🔧 Features
- CI/CD with GitHub Actions
- S3 static site hosting
- Terraform infra as code

## 🏗️ Architecture Diagram


## 🚀 Deployment Steps
1. Clone repo
2. `npm run build`
3. GitHub Actions auto-deploy to S3
4. Terraform provisions S3 + hosting

## 🧹 Cleanup
```bash
terraform destroy
