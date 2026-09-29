# Understanding Gen Z landing page

Responsive, ten-section landing page for the **Beyond the Stereotypes: Understanding Gen Z** research report.

## Stack

Next.js App Router, TypeScript, and Tailwind CSS. The editorial visual system is in `src/app/globals.css`. Inter is self-hosted through `@fontsource-variable/inter`, and the primary product accent is `#4A18AD`. No image or animation packages are required.

## Run

```bash
npm install
npm run dev
```

`npm run build` checks the production build, and `npm run typecheck` runs TypeScript validation.

## Content and launch setup

- Repeated editorial content is in `src/content.ts` (dimensions, teasers, illustrative previews, timeline, audiences, FAQ).
- Page composition and one-off copy are in `src/app/page.tsx`.
- Interactive purchase buttons, sticky purchase bar, report carousel, and FAQ are in `src/components/interactive.tsx`.
- Set `NEXT_PUBLIC_CHECKOUT_URL` in `.env.local` to the **confirmed** checkout destination. Until then, purchase buttons explain that checkout is unavailable. See `.env.example`.
- Replace the CSS report cover and the preview carousel's **ILUSTRASI** pages with approved report assets before launch. No actual report pages were supplied.
- Search for `[Konfirmasi` to find unresolved business details: checkout/fulfillment, report delivery and download, PLUS MAX access and renewal, permitted citation, and support contact.

The credibility section states the known urban Gen Z scope and avoids claiming national representativeness. No respondent counts, percentages, methodology details, purchase mechanics, or scarcity claims have been added.

## Project Context

Before making UX, UI, or major product changes to the Whitepaper landing page, read:

[Whitepaper – Understanding Gen Z Project Context](./docs/whitepaper-project-context.md)
