# Losch Dental — Next.js

Een responsive, Nederlandstalige website voor Elke Losch, tandarts met expertise in endodontologie, Utrecht en omgeving.

## Ontwikkeling

Vereist: Node.js 20.9 of nieuwer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Productiecontrole: `npm run build`, gevolgd door `npm start`.

## Tech stack

Next.js App Router, React 19, TypeScript, CSS, lucide-react. Geen Tailwind vereist. De bestaande portretfoto staat op `public/Elke-losch.jpg`.

## Publicatie op Vercel

Importeer `RogerCAF/Losch-Dental` in Vercel, kies het Next.js-framework en laat het root directory-veld leeg. Voor een veilige preview kun je eerst de branch `redesign/premium-emerald-2026` gebruiken. Publiceer pas op de hoofddomeinnaam nadat het ontwerp is nagekeken en de pull request is gemerged.

## Nog te verifiëren vóór livegang

- Zakelijk e-mailadres en eventueel telefoonnummer: niet ingevuld; er wordt geen fictieve boeking of contactfunctie getoond.
- Inhoud en exacte professionele titels/claims laten goedkeuren door Elke.
- De sfeerfoto's in CSS worden nu extern geladen vanaf Unsplash; vervang deze bij voorkeur door eigen, gelicenseerde praktijkfotografie. De foto van Elke komt uit de oorspronkelijke repository.
- Controleer mobiele weergave, toegankelijkheid en het resultaat van `npm run build` in Vercel.
- Overweeg privacyverklaring en overige wettelijk vereiste praktijkinformatie op basis van de uiteindelijke functionaliteit.
