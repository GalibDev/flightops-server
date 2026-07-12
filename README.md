# FlightOps

**Manage Flights. Simplify Operations.**

FlightOps is a professional full-stack airline operations and flight discovery platform. Travellers can search, filter and review routes, while authenticated users can manage flight listings and monitor stable operational analytics.

## Features

- Responsive marketing site with 12 realistic international routes
- Search, airline/class/price filters, sorting and pagination
- Detailed flight pages with schedules, baggage, aircraft and related routes
- JWT authentication in HTTP-only cookies, bcrypt password hashing and demo access
- Protected flight creation and responsive flight management
- Role-based Admin Center with user roles, blocking and account deletion
- Flight approval/rejection, booking and payment status management
- Persistent administrative audit trail for every privileged action
- Recharts operations dashboard with stable business data
- MongoDB/Mongoose models, Zod validation and typed Next.js API routes
- Loading, empty, error, form and toast feedback states

## Technology

Next.js App Router, React, TypeScript, Tailwind CSS, Recharts, MongoDB, Mongoose, JWT (`jose`), bcryptjs, React Hook Form, Zod, Lucide and Sonner.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Configure:

```env
MONGODB_URI=mongodb://localhost:27017/flightops
JWT_SECRET=replace-with-a-long-random-secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Run quality checks with `npm run typecheck`, `npm run lint` and `npm run build`. Seed MongoDB with `npm run seed` after configuring `MONGODB_URI`.

## Demo credentials

| Role | Email | Password |
|---|---|---|
| User | user@flightops.com | User123! |
| Admin | admin@flightops.com | Admin123! |

Demo accounts work without MongoDB. Registration and persistent flight creation require MongoDB.

## Routes

Public: `/`, `/flights`, `/flights/[id]`, `/about`, `/contact`, `/login`, `/register`, `/privacy`, `/terms`.

Protected: `/dashboard`, `/flights/add`, `/flights/manage`.

Admin-only: `/admin`. Seed stable admin demonstration records with `npm run seed:admin`.

API: `/api/auth/*`, `/api/flights`, `/api/flights/[id]`, `/api/dashboard/stats`, `/api/contact`, and `/api/admin/*`.

## Screenshots

Add production screenshots here after deployment. The implementation follows the supplied AeroBook UI reference with FlightOps branding, accessible blue/navy/amber colors and a compact card-based interface.

## Deployment

- Live website: _Add deployment URL_
- Client repository: `https://github.com/GalibDev/flightops-client`
- Server repository: `https://github.com/GalibDev/flightops-server`

## Future improvements

Payment provider integration, real airline inventory feeds, booking records, email notifications, audit logs and role-specific administration.
