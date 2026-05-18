# SwiftMove — Packers & Movers Landing Page

Production-ready marketing site for **SwiftMove**, a premium Packers & Movers brand.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React
- Route Handler API for contact form

## Features
- Dense, premium logistics-style layout
- Responsive hero, services, and contact sections
- Smooth anchor scrolling
- Mobile nav with hamburger menu
- IntersectionObserver-based staggered service card reveal
- Contact form with validation, loading state, and success message
- API endpoint at `/api/contact`

## Getting Started
Install dependencies:

```
npm install
```

Run the dev server:

```
npm run dev
```

Open http://localhost:3000

## Project Structure
```
app/
  layout.tsx
  page.tsx
  api/contact/route.ts
components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  ContactForm.tsx
  Footer.tsx
```

## Contact API
**POST** `/api/contact`

Request body:
```json
{ "name": "", "phone": "", "service": "" }
```

Responses:
- 200: `{ "success": true, "message": "Request received" }`
- 400: `{ "success": false, "message": "All fields are required" }`
- 405: `{ "success": false, "message": "Method Not Allowed" }`

## License & Trademark
Copyright (c) 2026 Sarthak Bahal. All rights reserved.

“SwiftMove” and all associated names, logos, and branding elements are trademarks of Sarthak Bahal. Unauthorized use is prohibited.

See LICENSE for full terms.
