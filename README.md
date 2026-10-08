# Prasad Jewellers | Noamundi

> A premium, mobile-first digital experience for Prasad Jewellers, Noamundi.

![Deployment](https://github.com/Arowai2Atul/Prasad_Jewellers_Noamundi/actions/workflows/deploy.yml/badge.svg)

## Vision

Bring the trust and warmth of a local jewellery business into a fast, elegant digital experience. Customers should be able to discover jewellery, check market rates, share design requirements, contact the store, and follow their requests without friction.

## Product pillars

- **Live market awareness** — Jamshedpur Jewellers Association / Sarrafa Bhaav presentation with a clear rate date and update time.
- **Master Admin rate control** — a small daily form for the authorized admin to enter and verify Gold and Silver rates before publication.
- **Premium catalogue** — jewellery discovery designed for small screens first.
- **Design Your Jewellery** — customers can describe a gold, silver, or diamond requirement and provide a reference image, video, or link.
- **Direct assistance** — one-tap phone and WhatsApp contact.
- **Customer requests** — a foundation for verified customer accounts, request history, order status, and arrival notifications.
- **Performance first** — lightweight effects, optimized assets, progressive enhancement, and no unnecessary heavy 3D.

## Master Admin rate flow

1. Authorized Master Admin opens the private admin route.
2. Admin enters the association's verified daily Gold and Silver figures.
3. Form validates the numbers and records the official update time.
4. The approved payload will be written to the secure backend in the next integration step.
5. The storefront consumes the latest approved record and shows its source and timestamp.

**Important:** the current admin screen does not persist data yet. This is deliberate. A public GitHub Pages browser cannot safely hold an admin secret or database service key. The production persistence layer should use authenticated backend storage with role-based access.

## Technical direction

The first release is intentionally lightweight and deployable as a static web experience. Private customer data, authentication, media uploads, live rate ingestion, transactional email, and order workflows will be integrated behind explicit secure services rather than exposing secrets in the browser.

## Repository

This repository is the source of truth for the project.

- Product: Prasad Jewellers, Noamundi
- Owner: Mukti Prasad
- Customer support: +91 92342 76489
- Contact email: MuktiShah99@gmail.com

## Roadmap

- [x] Repository and product foundation
- [x] Mobile-first home experience
- [x] Sarrafa Bhaav rate experience
- [x] Gold / silver tracker
- [x] Master Admin rate-entry UI
- [x] Jewellery catalogue foundation
- [x] Design request entry point
- [x] WhatsApp / call / email integration
- [ ] Secure Master Admin authentication
- [ ] Secure daily rate persistence
- [ ] Customer verification and account layer
- [ ] Secure media upload
- [ ] Request / order status
- [ ] Arrival email workflow
- [ ] Verified automatic rate feed
- [ ] Live deployment and performance hardening

## Development principle

**Luxury should feel smooth, not heavy.**

Every visual effect must earn its performance cost.
