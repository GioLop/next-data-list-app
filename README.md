# Next Data List App

A Next.js application that displays a paginated list of client data with a clean, responsive UI.

## Features

- **Paginated Data Display**: Shows 20 clients per page with navigation controls
- **Server-Side Data Loading**: Fetches client data from a mock dataset
- **Client-Side Pagination**: Smooth page navigation using URL search parameters
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layouts
- **Type-Safe**: Full TypeScript support throughout the application
- **Comprehensive Testing**: Unit tests with Vitest and E2E tests with Playwright

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Testing

### Unit Tests

```bash
npm run test
```

#### Wtach Mode

```bash
npm run test:watch
```

#### Coverage report

```bash
npm run test:coverage
```

### E2E Tests

```bash
npm run test:e2e
```

### Project Structure

```bash
src/
├── app/
│   ├── api/
│   │   └── data/
│   │       └── route.ts          # API endpoint for paginated data
│   ├── components/
│   │   ├── ClientItem.tsx         # Individual client list item
│   │   ├── Header.tsx             # Page header
│   │   ├── Paginator.tsx          # Pagination controls
│   │   └── TableHeader.tsx        # Table column headers
│   ├── hooks/
│   │   └── useClients.ts          # Hook for fetching client data
│   ├── page.tsx                   # Main page component
│   ├── layout.tsx                 # Root layout
│   ├── types.ts                   # TypeScript type definitions
│   └── globals.css                # Global styles
├── services/
│   └── loadClientsDataSet.ts      # Mock data loading service
├── utils/
│   └── dataPaginator.ts           # Pagination utility function
└── test/
    ├── setup.ts                   # Vitest setup
    └── mocks/
        └── mockUsers.ts           # Mock user data
tests/
└── e2e/
    └── pagination.spec.ts         # E2E pagination tests
```

