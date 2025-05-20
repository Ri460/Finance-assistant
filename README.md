# FinanceAI: AI-Powered Personal Finance Assistant

FinanceAI is a comprehensive personal finance management application that leverages artificial intelligence to provide smart insights, predictions, and recommendations for your financial life.

![FinanceAI Dashboard](https://github.com/yourusername/financeai/raw/main/public/dashboard-preview.png)

## Features

- **Expense Tracking with NLP Categorization**: Automatically categorize transactions using natural language processing
- **Spending Predictions**: ML-powered forecasting of future expenses
- **Smart Budgeting**: Set budgets and receive alerts when you're close to exceeding them
- **Bill Reminders**: Never miss a payment with automated bill tracking and reminders
- **Investment Recommendations**: Get personalized investment advice based on your risk profile
- **Multi-Platform Access**: Access your financial data from any device
- **Data Security**: All sensitive data is encrypted using bcrypt

## Tech Stack

- **Frontend**: Next.js 14+ (React) with TypeScript
- **UI Components**: shadcn/ui (based on Tailwind CSS)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL via Neon (serverless Postgres)
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Charts**: recharts and react-minimal-pie-chart

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Neon account (for serverless PostgreSQL)

### Setting up Neon Database

1. Create a Neon account at https://neon.tech
2. Create a new project
3. Create a new database
4. Get your connection string from the Neon dashboard
5. Add the connection string to your environment variables (see below)

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/financeai.git
   cd financeai
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   \`\`\`
   # Database
   POSTGRES_PRISMA_URL=your_neon_connection_string
   POSTGRES_URL_NON_POOLING=your_neon_connection_string_non_pooling
   
   # NextAuth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   \`\`\`

4. Run database migrations:
   \`\`\`bash
   npx prisma migrate dev
   \`\`\`

5. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Database Setup

1. Run the database migrations:
   \`\`\`bash
   npx prisma migrate dev
   \`\`\`

2. Seed the database with initial data by visiting `/api/seed` in your browser

## Project Structure

\`\`\`
financeai/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   ├── dashboard/        # Dashboard page
│   ├── transactions/     # Transactions page
│   ├── budgets/          # Budgets page
│   ├── investments/      # Investments page
│   ├── analytics/        # Analytics page
│   ├── settings/         # Settings page
│   ├── login/            # Login page
│   ├── signup/           # Signup page
│   └── onboarding/       # Onboarding page
├── components/           # React components
│   ├── dashboard/        # Dashboard components
│   ├── transactions/     # Transaction components
│   ├── budgets/          # Budget components
│   ├── investments/      # Investment components
│   ├── analytics/        # Analytics components
│   ├── settings/         # Settings components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utility functions and libraries
├── actions/              # Server actions
├── prisma/               # Prisma schema and migrations
├── scripts/              # Scripts for database seeding, etc.
└── public/               # Static assets
\`\`\`

## Deployment

This project is ready to be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up the environment variables in Vercel
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [Neon](https://neon.tech/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
