# SmartLead Categories Reference App

A simple web application displaying all SmartLead categories with their IDs for easy reference.

## Features

- Complete list of 15 SmartLead categories
- Category IDs for API integration
- Type classification (Standard vs Custom)
- Usage guidelines
- Click-to-copy IDs
- Responsive design

## Categories Overview

### Standard Categories (IDs 1-9)
- Interested (1)
- Meeting Request (2)
- Not Interested (3)
- Do Not Contact (4)
- Information Request (5)
- Out Of Office (6)
- Wrong Person (7)
- Uncategorizable by AI (8)
- Sender Originated Bounce (9)

### Custom Categories
- Need to call (1451)
- Meeting Booked (1467)
- Long Term Follow Up (3241)
- VC Manual Application (8142)
- Mandate Information (16691)
- Deck sent (18199)

## Deployment

### Deploy to Railway

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - SmartLead Categories App"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Deploy on Railway:
- Go to [Railway](https://railway.app)
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose this repository
- Railway will automatically deploy

### Local Development

```bash
npm install
npm start
```

Visit `http://localhost:3000` to view the app.

## API Endpoint

The app also provides a JSON API endpoint:
- `GET /api/categories` - Returns all categories in JSON format

## SmartLead API Key

API Key: `faef3d05-be9a-4056-abe3-0d1903efee59_dhcck52`

## Last Updated

September 6, 2025