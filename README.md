# Wedding Invitation — Ilyas & Laily

A React digital wedding invitation for the **Walimatul Ursy of Ilyas & Laily**
(**Rabu, 22 Juli 2026, 07.30 WIB** — Rondokuning, Kraksaan, Probolinggo).

Built by recreating the Bridestory **"CleanthaRassya"** template
(`antharassya.bridestory.id`) component-by-component with Vite, then filling in
the real invitation data from `src/assets/invitation_letter.pdf`. The original
"Powered by Bridestory" footer is intentionally **omitted** and replaced with the
couple's closing greeting.

## Run

```bash
npm install            # if you hit a cache permission error: npm install --cache ./.npm-cache
npm run dev            # http://localhost:5173
npm run build          # production build into dist/
npm run preview        # preview the production build
```

## URL options

- `?to=Bapak%20Ilyas` — greets a named guest on the opening cover.
- `?preview=1` — skips the splash and renders the invitation directly.

## Structure

```
src/
  App.jsx                 orchestrates the opening-cover gate + all sections
  data.js                 all invitation content + asset paths (edit here)
  hooks/useInView.jsx     scroll-reveal helper (IntersectionObserver) + <Reveal>
  components/
    OpeningCover.jsx      full-screen "Open Invitation" splash
    Cover.jsx             toile landscape hero with swaying tree ornaments
    Quotes.jsx            Surat Ar-Rum: 21 verse
    BrideGroom.jsx        bride & groom + parents
    Gallery.jsx           photo gallery
    Event.jsx             Walimatul Ursy card + live Countdown
    Countdown.jsx         days/hours/mins/secs to the event
    Rsvp.jsx              attendance form (stored in localStorage)
    Gift.jsx              digital envelope / bank accounts (NOT rendered — see notes)
    Wish.jsx              guestbook + closing greeting
    MusicToggle.jsx       floating background-music control
  styles/global.css       design tokens (sage #69886C / cream #F9F7F6 / brown #5E5352)
public/assets/            ornament & background images from the original template
```

## Notes

- **Content** lives entirely in `src/data.js` — names, parents, date, time,
  location, gallery photos. The countdown reads `wedding.eventDate`
  (`2026-07-22 07:30`).
- **Gift / Amplop Digital** is removed from the page flow because the invitation
  has no bank-account info. To re-enable it: add accounts to a `gift` object in
  `data.js`, then re-import and render `<Gift />` in `src/App.jsx`.
- **No backend**: the RSVP and Wishes forms persist to `localStorage` so the
  confirmation flow feels real. Wire `submit()` in `Rsvp.jsx` / `Wish.jsx` to an
  API if you need real submissions.
- **Music**: drop an `mp3` at `public/assets/music.mp3` to make the floating
  toggle play a track.
- The layout is mobile-first and centered in a phone-width column, matching the
  original template.
