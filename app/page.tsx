'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, HeartHandshake, Mail, Menu, Microscope, MoveUpRight, ShieldCheck, Sparkles, X } from 'lucide-react';

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Over Elke', href: '#over' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Werkwijze', href: '#werkwijze' },
  { label: 'Onderwijs', href: '#onderwijs' },
  { label: 'Contact', href: '#contact' }
];

const services = [
  { no: '01', title: 'Wortelkanaalbehandeling', text: 'Gerichte behandeling van ontstoken of geïnfecteerd weefsel in het wortelkanaal, met behoud van uw eigen tand als uitgangspunt.', icon: Microscope },
  { no: '02', title: 'Endodontische herbehandeling', text: 'Wanneer een eerdere wortelkanaalbehandeling niet het gewenste resultaat heeft gehad, bekijken we zorgvuldig welke mogelijkheden er zijn.', icon: Sparkles },
  { no: '03', title: 'Zorg bij tandartsangst', text: 'Een rustige benadering, duidelijke uitleg en ruimte voor vragen en pauzes. U houdt zelf de regie over uw behandeling.', icon: HeartHandshake },
  { no: '04', title: 'Samenwerking met verwijzers', text: 'Heldere afstemming met uw eigen tandarts, met aandacht voor diagnostiek, behandelkeuzes en een goede terugkoppeling.', icon: ShieldCheck }
];

const steps = [
  { num:'01', title:'Luisteren en onderzoeken', text:'We beginnen met uw klachten, vragen en de diagnostische informatie die beschikbaar is.' },
  { num:'02', title:'Uitleg en behandelplan', text:'U hoort wat de bevindingen betekenen, welke opties er zijn en wat u kunt verwachten.' },
  { num:'03', title:'Zorgvuldige behandeling', text:'Met aandacht voor nauwkeurigheid, rust, comfort en communicatie tijdens de behandeling.' },
  { num:'04', title:'Nazorg en afstemming', text:'U krijgt passende instructies en waar nodig vindt afstemming met uw eigen tandarts plaats.' }
];

const faqs = [
  { q:'Wat is endodontologie?', a:'Endodontologie richt zich op de binnenzijde van tanden en kiezen, waaronder het wortelkanaalstelsel. Een wortelkanaalbehandeling kan nodig zijn wanneer het weefsel in het kanaal ontstoken of geïnfecteerd is.' },
  { q:'Doet een wortelkanaalbehandeling pijn?', a:'De behandeling wordt doorgaans met lokale verdoving uitgevoerd. De ervaring verschilt per persoon en situatie; bespreek zorgen of eerdere ervaringen vooraf, zodat daar rekening mee kan worden gehouden.' },
  { q:'Kan een eerder behandelde kies opnieuw behandeld worden?', a:'In sommige gevallen is een herbehandeling mogelijk. Of dit zinvol is, hangt af van de oorzaak, de staat van de tand of kies en de bevindingen bij onderzoek.' },
  { q:'Kan mijn eigen tandarts mij verwijzen?', a:'Samenwerking met verwijzende tandartsen is onderdeel van de werkwijze. Bespreek met uw eigen tandarts welke route voor uw situatie passend is.' }
];

function Reveal({children, className = ''}: {children: React.ReactNode; className?: string}) {
  return <div className={'reveal ' + className}>{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }), { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return <>
    <a className="skip-link" href="#main">Direct naar inhoud</a>
    <header className="site-header">
      <div className="container nav-row">
        <a className="brand" href="#home" aria-label="Losch Dental — naar home">
          <span className="brand-symbol">L<span>.</span></span>
          <span className="brand-text"><strong>LOSCH DENTAL</strong><small>ENDODONTOLOGIE · UTRECHT</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">{nav.slice(0,5).map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <a className="header-cta" href="#contact">Neem contact op <ArrowUpRight size={17}/></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Sluit menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobiele navigatie">{nav.map(item => <a key={item.href} onClick={() => setMenuOpen(false)} href={item.href}>{item.label} <ArrowUpRight size={16}/></a>)}</nav>}
    </header>
    <main id="main">
      <section className="hero" id="home">
        <div className="hero-grain" aria-hidden="true"/>
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow light"><span className="eyebrow-line"/> TANDARTS ENDODONTOLOGIE · UTRECHT</span>
            <h1>Bijzondere zorg<br/>voor <em>uw eigen</em><br/>glimlach.</h1>
            <p className="hero-lead">Gespecialiseerde aandacht voor endodontologie. Met precisie, rust en persoonlijke betrokkenheid — omdat een goede behandeling begint met vertrouwen.</p>
            <div className="hero-actions"><a href="#contact" className="button button-gold">Neem contact op <ArrowUpRight size={18}/></a><a href="#expertise" className="text-link light-link">Ontdek mijn expertise <ArrowRight size={17}/></a></div>
            <div className="hero-signature"><span className="signature-line"/><span>Elke Losch <small>Tandarts · Endodontologie</small></span></div>
          </div>
          <div className="hero-art">
            <div className="hero-photo" role="img" aria-label="Rustige sfeerimpressie van een lichte tandheelkundige praktijk" />
            <div className="hero-photo-label"><span className="dot"/><span>ZORG MET AANDACHT<br/><strong>Voor iedere stap</strong></span></div>
            <div className="hero-vertical">LOSCH DENTAL — UTRECHT</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>DESKUNDIGHEID &nbsp;·&nbsp; RUST &nbsp;·&nbsp; VERTROUWEN</span><a href="#over" aria-label="Scroll naar over Elke"><ArrowDown size={18}/></a><span>01 / 05</span></div>
      </section>

      <section className="intro section-pad" id="over">
        <div className="container intro-grid">
          <Reveal className="intro-image-col"><div className="portrait-frame"><img src="/Elke-losch.jpg" alt="Portret van tandarts Elke Losch"/><span className="portrait-annotation">ELKE LOSCH<br/><small>TANDARTS · ENDODONTOLOGIE</small></span></div><div className="image-corner" aria-hidden="true"/></Reveal>
          <Reveal className="intro-copy"><span className="eyebrow"><span className="eyebrow-line"/> AANGENAAM KENNIS TE MAKEN</span><h2>Een persoonlijke<br/>benadering. <em>Met oog<br/>voor detail.</em></h2><p className="large-copy">Ik ben Elke Losch, tandarts met een bijzondere interesse en expertise in de endodontologie.</p><p>In mijn werk combineer ik zorgvuldige diagnostiek en behandeling met duidelijke communicatie. Ik vind het belangrijk dat u begrijpt wat er gebeurt, welke mogelijkheden er zijn en dat er ruimte blijft voor uw vragen.</p><p>Naast mijn werk als tandarts ben ik betrokken bij het onderwijs aan toekomstige mondzorgprofessionals. Zo komen praktijkervaring, kennis en aandacht voor mensen samen.</p><a href="#werkwijze" className="underlined-link">Meer over mijn werkwijze <MoveUpRight size={18}/></a></Reveal>
        </div>
      </section>

      <section className="quote-strip"><div className="container quote-grid"><span className="quote-icon">“</span><blockquote>Goede zorg gaat niet alleen over wat je doet, maar ook over <em>hoe iemand zich daarbij voelt.</em></blockquote><span className="quote-caption">DE FILOSOFIE ACHTER LOSCH DENTAL</span></div></section>

      <section className="expertise section-pad" id="expertise"><div className="container">
        <Reveal className="section-heading-row"><div><span className="eyebrow"><span className="eyebrow-line"/> EXPERTISE & AANDACHTSGEBIEDEN</span><h2>Zorg die verder kijkt<br/>dan <em>de behandeling.</em></h2></div><p>Elke situatie is anders. Daarom draait goede endodontologische zorg om een zorgvuldige afweging, heldere uitleg en een persoonlijke aanpak.</p></Reveal>
        <div className="service-grid">{services.map(item => <Reveal className="service-card" key={item.no}><div className="service-top"><span>{item.no} / 04</span><item.icon size={25} strokeWidth={1.25}/></div><div><h3>{item.title}</h3><p>{item.text}</p></div><a href="#contact" aria-label={'Meer informatie over ' + item.title}>Meer informatie <ArrowUpRight size={17}/></a></Reveal>)}</div>
      </div></section>

      <section className="approach section-pad" id="werkwijze"><div className="container approach-grid"><Reveal className="approach-left"><span className="eyebrow light"><span className="eyebrow-line"/> MIJN WERKWIJZE</span><h2>Van eerste vraag<br/>tot <em>nazorg.</em></h2><p>Een heldere aanpak geeft rust. U weet wat u kunt verwachten en er is ruimte om samen de juiste keuzes te bespreken.</p><a href="#contact" className="button button-outline">Neem contact op <ArrowUpRight size={18}/></a></Reveal><div className="steps">{steps.map(s=><Reveal className="step" key={s.num}><span className="step-no">{s.num}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><Check size={19} strokeWidth={1.4}/></Reveal>)}</div></div></section>

      <section className="teaching section-pad" id="onderwijs"><div className="container teaching-grid"><Reveal className="teaching-visual"><div className="teaching-image" role="img" aria-label="Onderwijs- en werkomgeving in de mondzorg"/><div className="teaching-badge"><BookOpen size={24}/><span>KENNIS DELEN<br/><strong>Blijven ontwikkelen</strong></span></div></Reveal><Reveal className="teaching-copy"><span className="eyebrow"><span className="eyebrow-line"/> KENNIS & ONDERWIJS</span><h2>Kennis delen.<br/><em>Samen groeien.</em></h2><p className="large-copy">Goede mondzorg begint bij nieuwsgierigheid, kennis en de bereidheid om te blijven leren.</p><p>Als docent mondzorgkunde in Utrecht draag ik bij aan de ontwikkeling van toekomstige professionals. In het onderwijs besteed ik aandacht aan klinisch denken, praktische vaardigheden en patiëntgerichte communicatie.</p><a href="#contact" className="underlined-link">Meer weten? Neem contact op <MoveUpRight size={18}/></a></Reveal></div></section>

      <section className="referral"><div className="container referral-inner"><div><span className="eyebrow light"><span className="eyebrow-line"/> VOOR VERWIJZERS</span><h2>Samen werken aan<br/><em>de juiste zorg.</em></h2></div><div><p>Een goede samenwerking met de verwijzende tandarts is belangrijk voor continuïteit en een zorgvuldig behandeltraject. Neem contact op om een casus of mogelijke verwijzing te bespreken.</p><a href="#contact" className="button button-gold">Contact voor verwijzers <ArrowUpRight size={18}/></a></div></div></section>

      <section className="faq-section section-pad" id="vragen"><div className="container faq-grid"><Reveal><span className="eyebrow"><span className="eyebrow-line"/> GOED OM TE WETEN</span><h2>Veelgestelde<br/><em>vragen.</em></h2><p>Een aantal antwoorden op vragen die vaak spelen rondom endodontologische zorg.</p></Reveal><div className="faq-list">{faqs.map((item,i)=><div className={'faq-item '+(faq===i?'open':'')} key={item.q}><button aria-expanded={faq===i} aria-controls={'faq-answer-'+i} onClick={()=>setFaq(faq===i?null:i)}><span>{item.q}</span><ChevronDown size={19}/></button>{faq===i&&<div id={'faq-answer-'+i} className="faq-answer">{item.a}</div>}</div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div><span className="eyebrow light"><span className="eyebrow-line"/> CONTACT</span><h2>Heeft u een vraag?<br/><em>Ik hoor graag van u.</em></h2><p>Voor vragen over endodontologische zorg, samenwerking of onderwijs kunt u contact opnemen. Vermeld geen medische of andere gevoelige persoonsgegevens in een onbeveiligde e-mail.</p><div className="contact-details"><span><Mail size={20}/> Contactgegevens op aanvraag</span><span><ShieldCheck size={20}/> Utrecht en omgeving</span></div></div><div className="contact-panel"><span className="panel-icon"><Mail size={30} strokeWidth={1.25}/></span><h3>Persoonlijk contact</h3><p>De zakelijke contactgegevens worden hier geplaatst zodra ze zijn bevestigd. Zo voorkomen we dat berichten naar een onjuist adres gaan.</p><a href="#home" className="button button-dark">Terug naar boven <ArrowUpRight size={18}/></a></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-top"><a className="brand footer-brand" href="#home"><span className="brand-symbol">L<span>.</span></span><span className="brand-text"><strong>LOSCH DENTAL</strong><small>ENDODONTOLOGIE · UTRECHT</small></span></a><nav aria-label="Footernavigatie"><a href="#over">Over Elke</a><a href="#expertise">Expertise</a><a href="#onderwijs">Onderwijs</a><a href="#contact">Contact</a></nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Losch Dental · Elke Losch</span><span>Met aandacht voor iedere stap.</span></div></footer>
  </>;
}
