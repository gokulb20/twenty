# Crewm8

**AI-native CRM and Email Client**

> Based on [Twenty CRM](https://github.com/twentyhq/twenty) - An open-source CRM platform

## About Crewm8

Crewm8 combines a powerful CRM with an AI-native email client (0.email) to create a unified platform for managing your customer relationships and communications.

### Key Features

- **Unified CRM & Email** - Seamlessly manage contacts, deals, and email conversations in one place
- **AI-Powered** - Built-in AI capabilities for email composition, summarization, and insights
- **Customizable** - Flexible data models, custom objects, and fields
- **Modern UX** - Clean, intuitive interface inspired by modern productivity tools
- **Open Source** - Built on open-source foundations with community support

## Installation

### Prerequisites

- Node.js ^24.5.0
- Yarn >=4.0.2
- PostgreSQL 16
- Redis

### Quick Start

```bash
# Install dependencies
yarn install

# Start development environment (frontend + backend + worker)
yarn start
```

The application will be available at:
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

### Development Commands

```bash
# Start individual packages
npx nx start crewm8-front      # Frontend dev server
npx nx start crewm8-server     # Backend server
npx nx run crewm8-server:worker # Background worker

# Run tests
npx nx test crewm8-front
npx nx test crewm8-server

# Build for production
npx nx build crewm8-front
npx nx build crewm8-server
```

## Project Structure

```
packages/
├── crewm8-front/          # React frontend application
├── crewm8-server/         # NestJS backend API
├── crewm8-ui/             # Shared UI components library
├── crewm8-shared/         # Common types and utilities
├── crewm8-emails/         # Email templates
└── ...
```

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- Recoil (state management)
- Emotion (styling)
- Apollo Client (GraphQL)
- Vite

**Backend:**
- NestJS
- TypeORM
- PostgreSQL
- Redis
- GraphQL (with GraphQL Yoga)
- BullMQ (job queue)

## License

This project is licensed under AGPL-3.0.

Based on Twenty CRM, originally created by the Twenty team.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Support

For questions and support, please create an issue in this repository.
