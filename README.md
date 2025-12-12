# 🛒 AI-Powered E-Commerce Platform

Next.js 16 · React 19 · AI Agents · Payments · Headless CMS  
A production-grade e-commerce platform enhanced with AI shopping agents, real-time content updates, and secure payment workflows.

## Project Overview
- Secure user authentication with Clerk and agent-aware context (AgentKit)
- Real-time product and order updates via Sanity CMS + Sanity Live
- AI-powered shopping assistance with Vercel AI SDK and multi-provider LLMs
- Stripe-driven checkout, webhooks, and stock management
- Server-first data mutations with App Router, Server/Client Components, and Server Actions

## Quickstart
1) Install deps: `pnpm install`  
2) Env setup: copy `.env.example` → `.env.local` and fill Clerk, Stripe, Sanity, AI keys  
3) Run dev server: `pnpm dev` (Next.js) and open the Studio at `/studio`
4) Seed Sanity dataset:  
   `pnpm dlx sanity dataset import sample-data.ndjson --replace`

## Tech Stack
- Frontend: Next.js 16, React 19, Tailwind CSS v4, shadcn/ui
- State: Zustand
- CMS: Sanity (Studio embedded), GROQ, TypeGen, Sanity Live
- Auth: Clerk
- Payments: Stripe (Checkout + webhooks)
- AI: Vercel AI SDK, AgentKit, Claude / GPT / Cohere

## Key Learning Areas
1) Modern Next.js architecture: App Router, Server/Client Components, Server Actions, server-first mutations  
2) Auth & user context: Clerk integration with AI agents; per-user tool scoping  
3) Headless CMS & realtime: Sanity CMS + App SDK, GROQ, TypeGen, Sanity Live  
4) AI shopping experience: discovery, order status tracking, recommendations with guardrails  
5) Payments & webhooks: Stripe Checkout, secure event-driven order + stock workflows  
6) State & UX: Zustand, cart persistence, responsive shadcn/ui with dark mode  
7) AI-driven admin: Claude-powered insights for sales, product performance, and inventory

## Scripts
- `pnpm dev` — start Next.js dev server (Studio at `/studio`)
- `pnpm lint` — run linting
- `pnpm build` — production build

## Seeding Sanity CMS
Import provided sample data into your active dataset:
```
pnpm dlx sanity dataset import sample-data.ndjson --replace
```
> Ensure your Sanity project ID/dataset are configured in env vars before running.

## Notes
- shadcn/ui components are installed via the official CLI and themed for Tailwind v4.
- Keep API keys and secrets in `.env.local`; never commit them.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
