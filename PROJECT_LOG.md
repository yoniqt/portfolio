# Portfolio Project — Mentorship Log

If you're reading this in a NEW Claude conversation/account: paste this whole file as
your first message and say "continue mentoring me from here." That's all you need.

## The deal / how I want to be taught

I'm a CS student who knows basic HTML/CSS/JS/PHP/Flutter/Java/Python, but I'm a
beginner in React, Next.js, Docker, Git/GitHub, and backend frameworks. Most of my
past projects were AI-generated without me really understanding them. This time I
want to actually understand what I build, not just get code handed to me, so I can
defend it in a Junior Software Engineer interview.

Rules for how to mentor me:

- Do NOT build things all at once. Small lessons only.
- Each new concept: explain what it is -> why companies use it -> where it shows up
  in real projects -> simple example -> check I understand -> THEN write code ->
  explain every line -> make me explain it back -> quiz me -> give me a solo
  challenge and wait for me to finish it before moving on.
- When I ask for code, don't just write it — ask me "what do you think should
  happen first?" and make me reason about it first.
- After any code: explain why it exists, alternatives, common mistakes, best
  practices, security concerns, performance considerations.
- Teach Git/GitHub and Docker from scratch, assume zero prior knowledge, every time.
- Before creating any database table, make me design it first, then critique it.
- If my code is bad, don't silently fix it — explain why it's bad and how to improve.
- Prioritize my learning over finishing the project fast.

## Tech stack (decided, don't re-litigate unless I bring it up)

- Frontend: React + Next.js + Tailwind CSS
- Backend: Node.js + Express (deliberately switched away from Laravel — I'm
  targeting international/remote "full-stack JS developer" jobs, one language is
  a better fit for that market; I know Laravel/PHP still has real remote demand
  too, especially EU/UK, but chose JS-only on purpose)
- Database: MySQL
- Auth: custom auth in Express (JWT or sessions — not decided yet)
- Version control: Git + GitHub
- Dev environment: Docker
- Deployment: Vercel (frontend) + a Node-friendly host for backend (TBD) + prod MySQL

## What we're building

1. **First project:** my own personal developer portfolio site (Next.js + React +
   Tailwind only, no backend yet). This is deliberately simple/frontend-only so I
   learn the frontend stack without backend complexity at the same time.
2. **Second project (not chosen yet):** a real CRUD system — candidates were Clinic
   Management System, Hotel Booking System, Inventory System, Barangay Management
   System. This becomes a featured case study INSIDE the portfolio site once built.

## Portfolio site structure (decided)

Homepage sections, in order: Hero/Intro -> About Me -> Skills/Tech Stack -> Projects
showcase -> Contact. Building one section at a time. Projects section will later
link to/showcase the CRUD system (Clinic/Hotel/etc.) once that's built.

## Where we left off (update this section as we progress)

- Node.js, Git/GitHub, and the Next.js scaffold are all done and understood
  (App Router, Pages, Layouts, Server/Client components, routing).
- Detour: spent a long session deep-diving PinacConnect (the user's capstone)
  for OJT/interview prep instead of this project — see the PinacConnect
  memory notes in Claude's memory system for that. Cleaned up that repo,
  connected it to GitHub, generated a consolidated schema.sql, and built a
  REVIEW.md study guide covering the whole backend + a Flutter mobile app
  overview.
- **Full site was then built in one go** (2026-08-01), at the user's explicit
  request, mirroring the "build first, understand deeply after" approach that
  worked for PinacConnect — the user was exhausted after the long PinacConnect
  session and asked for this trade-off explicitly, aware it meant skipping the
  usual "explain before code" process for now.
- Built: Nav (with mobile menu) + dark/light theme toggle (Tailwind v4
  class-based dark mode via `@custom-variant dark`, `ThemeProvider` context in
  `app/theme-provider.js`, persisted to localStorage) + a reusable scroll-reveal
  animation wrapper (`app/ui/reveal.js`, IntersectionObserver-based) used across
  every page. Pages: Home (Hero, already existed), `/about`, `/skills`,
  `/projects` (client-side tag filtering, currently featuring PinacConnect and
  this portfolio site itself), `/contact` (working form -> `/api/contact` route
  handler -> nodemailer via Gmail SMTP).
- Production build (`npm run build`) passes clean, all routes compile.
- **Still needed from the user**: generate a real Gmail App Password and put it
  in `.env.local` (`CONTACT_EMAIL_APP_PASSWORD`, currently a placeholder) for
  the contact form to actually send email. Also hasn't been checked in an
  actual running browser yet, only via production build success.
- **Owed to the user**: a proper teaching/review pass through everything just
  built — same REVIEW.md-style treatment as PinacConnect (Server vs Client
  components in practice, the ThemeProvider/context pattern, how the
  IntersectionObserver reveal animation works, the API route handler +
  nodemailer flow). Do this next, since it was explicitly deferred, not
  skipped.
- Not yet committed to git — the portfolio repo's last commit is still just
  the Next.js scaffold; all of this new work is uncommitted on disk.

## Practice Quic only try to git add haha
