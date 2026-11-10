# Losch Dental — Next.js

Premium website voor Elke Losch, tandarts met expertise in endodontologie in Utrecht en omgeving.

## Lokaal ontwikkelen
1. Installeer Node.js 20.9+.
2. Voer `npm install` uit.
3. Start met `npm run dev` en open http://localhost:3000.
4. Controleer een productie-build met `npm run build`.

## Vercel
Importeer deze repository en kies de Next.js preset. Het bestaande bestand `Elke-losch.jpg` in de root wordt gebruikt voor de portretfoto via het pad `/Elke-losch.jpg`; verplaats deze naar `public/Elke-losch.jpg` voor productie (of wijzig het pad in `app/page.tsx` naar de publieke bron). 

**Controle voor publicatie:** vervang de tijdelijke contactlinks door een bevestigd zakelijk e-mailadres / telefoonnummer, controleer inhoud, behandelindicaties, privacy en portretfoto met Elke. De contactknop gebruikt momenteel de contactsectie, niet een verzonnen boekingsysteem.

Dit ontwerp gebruikt CSS zonder Tailwind om onnodige build-afhankelijkheden te beperken.
