import { TranslationSet } from './types';
import heroImg from './assets/images/hero_interior_1782061008342.jpg';
import portraitImg from './assets/images/designer_portrait_1782061023066.jpg';
import serviceDesignImg from './assets/images/service_design_1782061037290.jpg';
import heroBrightImg from './assets/images/hero_bright_living_room_1782062589328.jpg';

// Let's declare our generated image paths precisely as saved by generate_image
export const IMAGES = {
  hero: 'https://image.noelshack.com/fichiers/2026/39/3/1790179967-accueuil-zaly.jpg',
  portrait: 'https://image.noelshack.com/fichiers/2026/26/1/1782084312-chatgpt-image-22-juin-2026-01-16-01.jpg',
  serviceDesign: serviceDesignImg,
  serviceCoordination: 'https://image.noelshack.com/fichiers/2026/39/4/1790258524-collab.jpg',
  serviceAudit: 'https://image.noelshack.com/fichiers/2026/41/5/1791546237-photo-audit.jpg',
  heroBright: 'https://image.noelshack.com/fichiers/2026/39/3/1790179967-accueuil-zaly.jpg'
};

export const translations: { FR: TranslationSet; EN: TranslationSet } = {
  FR: {
    nav: {
      home: "Accueil",
      history: "Notre Histoire",
      services: "Services",
      projects: "Réalisations",
      contact: "Contact"
    },
    hero: {
      title: "Des intérieurs pensés pour votre vie.",
      subtitle: "De Paris à Dubaï, nous transformons chaque espace en une expérience unique, pensée pour vous et les personnes qui y vivent.",
      ctaProjects: "Découvrir nos réalisations",
      ctaContact: "Nous contacter"
    },
    history: {
      sectionTitle: "Notre Histoire",
      quote: "Nous croyons que chaque espace a une âme à révéler.",
      paragraph1: "Designers d'intérieur passionnés, nous travaillons avec des clients exigeants à travers le monde pour créer des environnements qui allient beauté, fonctionnalité et authenticité.",
      paragraph2: "Fondée à Paris, Zaly M imagine des intérieurs qui allient élégance, confort et sens du détail. Toujours en partant de la façon dont vous vivez.",
      statExperience: "3 Ans d'Excellence",
      statCountries: "5 Pays Majeurs",
      statClarity: "Luxe Pur & Discret"
    },
    services: {
      sectionTitle: "Nos Services",
      subtitle: "Un accompagnement haut de gamme sur-mesure pour tous vos projets d'aménagement",
      items: [
        {
          id: "design",
          title: "Conception & Design",
          text: "Plans 3D, moodboards, choix des matériaux et palettes de couleurs — nous vous donnons à voir votre futur espace avant qu'il n'existe.",
          image: IMAGES.serviceDesign,
          buttonText: "En savoir plus",
          moreDetails: [
            "Élaboration de plans d'aménagement et modélisation en haute définition 3D.",
            "Création de planches tendances (moodboards) et cahiers de styles exclusifs.",
            "Accompagnement personnalisé dans la sélection de matériaux nobles (marbres, essences de bois rares, finitions métalliques artisanales).",
            "Élaboration des plans techniques d'électricité, calepinage et éclairages scénographiques."
          ]
        },
        {
          id: "coordination",
          title: "Coordination de projet",
          text: "Nous pilotons artisans, fournisseurs et entrepreneurs pour que votre projet se déroule sans friction, de l'esquisse à la livraison.",
          image: IMAGES.serviceCoordination,
          buttonText: "En savoir plus",
          moreDetails: [
            "Sélection rigoureuse des meilleurs artisans d'art et entreprises du bâtiment.",
            "Planification rigide du calendrier de chantier et suivi rigoureux de chaque étape.",
            "Coordination logistique pour les commandes, la livraison et l'installation finale du mobilier.",
            "Réunions régulières et rapports d'avancement photographiques complets pour un contrôle total à distance."
          ]
        },
        {
          id: "audit",
          title: "Conseil & Audit",
          text: "Un regard expert sur votre espace existant : optimisation, réaménagement, choix de mobilier ou simple mise en scène.",
          image: IMAGES.serviceAudit,
          buttonText: "En savoir plus",
          moreDetails: [
            "Audit d'aménagement sur place ou à distance pour évaluer le potentiel de votre espace.",
            "Conseils immédiats de valorisation spatiale, d'optimisation de volumes et d'harmonie des teintes.",
            "Shopping accompagnement ou curatoring pour le mobilier d'art, luminaires design et œuvres d'art complémentaires.",
            "Interventions flash d'une journée pour restructurer élégamment votre intérieur existant."
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Nos Réalisations",
      subtitle: "Un aperçu de nos projets d'aménagement d'espaces internationaux d'exception",
      moreInfoButton: "En savoir plus",
      backBtn: "Retour à l'accueil",
      projectDetailsLabel: "Le Concept de Design",
      projectGalleryLabel: "Galerie de Réalisation",
      items: {
        france: {
          id: "france",
          country: "France",
          countryCode: "FR",
          title: "Appartement d'Exception Haussmannien",
          location: "Paris • France",
          bannerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
          introduction: "Situé au cœur de Paris, cet appartement de 220m² a été entièrement repensé pour un collectionneur d'art. Notre mission consistait à préserver l'écriture classique du lieu tout en y infusant un minimalisme contemporain extrêmement rigoureux. Un dialogue d'une rare élégance entre tradition et modernité absolue.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
              caption: "Le grand salon : moulures d'époque restaurées, banquettes profilées sur mesure et textures minérales."
            },
            {
              url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
              caption: "Espace salle à manger baigné d'une clarté raffinée avec rideaux de lin lourd et table en travertin."
            },
            {
              url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
              caption: "Suite principale : intégration d'un dressing sur mesure en noyer et textures bouclées apaisantes."
            },
            {
              url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
              caption: "Détail de la salle de bain épurée mariant pierre naturelle cannelée et robinetterie bronze brossé."
            }
          ]
        },
        cotedivoire: {
          id: "cotedivoire",
          country: "Côte d'Ivoire",
          countryCode: "CI",
          title: "Conception 3D, Cité Belle Nubian Riviera Mbadon  ville Abijan. ",
          location: "Abidjan • Côte d'Ivoire",
          duration: "Conception 3D",
          style: "Architecture Contemporaine & Design 3D",
          bannerImage: "https://image.noelshack.com/fichiers/2026/42/3/1791972381-photo-2026-09-23-17-49-41-1.jpg",
          introduction: "Conception 3D architecturale et aménagement d'intérieur pour une résidence d'exception située à la Cité Belle Nubian, Riviera Mbadon à Abidjan. Les espaces ont été pensés pour allier modernité, confort et élégance.",
          gallery: [
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-1.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-2.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-3.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-4.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-5.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-41.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-41-1.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-41-2.jpg",
              caption: ""
            }
          ]
        },
        usa: {
          id: "usa",
          country: "USA",
          countryCode: "US",
          title: "Pâtisserie salon de thé",
          location: "USA",
          duration: "Conception & Réalisation",
          style: "Pâtisserie & Salon de thé",
          bannerImage: "https://image.noelshack.com/fichiers/2026/42/3/1791973218-photo-2026-09-25-08-09-57.jpg",
          introduction: "Aménagement d'intérieur et création d'une identité architecturale raffinée pour un concept de pâtisserie et salon de thé aux États-Unis. Un dialogue élégant entre matières nobles, lumière feutrée et douceur des lignes pour une immersion gourmande unique.",
          gallery: [
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791973486-photo-2026-09-25-08-09-43.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791973486-photo-2026-09-25-08-09-57.jpg",
              caption: ""
            }
          ]
        },
        dubai: {
          id: "dubai",
          country: "Dubai",
          countryCode: "AE",
          title: "Villa Arabian Ranches",
          location: "Arabian Ranches, Dubaï",
          duration: "3 semaines",
          style: "mid century modern",
          bannerImage: "https://image.noelshack.com/fichiers/2026/39/3/1790184932-villa-zaly.jpg",
          introduction: "Située à Arabian Ranches à Dubaï, cette villa de 220 m² a été entièrement aménagée et décorée pour un jeune couple et ses deux enfants.\n\nLe projet s’inspire du style Mid-Century Modern : lignes épurées, bois chaleureux, formes douces et palette de tons naturels. Chaque espace a été pensé pour offrir à la famille une maison élégante, confortable et facile à vivre au quotidien.",
          gallery: [
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-1.jpg",
              caption: "Chambre parentale : harmonie des volumes et lumière naturelle."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-2.jpg",
              caption: "Salon et ambiance Mid-Century Modern aux finitions soignées."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-3.jpg",
              caption: "Détail du mobilier aux lignes douces et textures chaleureuses."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-28-4.jpg",
              caption: "Espace contemporain et circulation fluide."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-28-5.jpg",
              caption: "Perspective architecturale mettant en valeur la palette de tons naturels."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-6.jpg",
              caption: "Agencement sur mesure et intégration du bois chaleureux."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-29.jpg",
              caption: "Harmonie des teintes douces et du design intemporel."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-1.jpg",
              caption: "Entrée pensée pour la vie quotidienne en famille."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-2.jpg",
              caption: "Détails décoratifs et sélection d'objets d'art délicats."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-29-3.jpg",
              caption: "Aménagement sur mesure pour un coin bureau."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-4.jpg",
              caption: "Côté salle à manger conçue comme un havre de paix."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-5.jpg",
              caption: "Éclairage chaleureux et matières douces dans l'espace buanderie."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-6.jpg",
              caption: "Chambre d'enfant alliant confort, clarté et rangements astucieux."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-7.jpg",
              caption: "Deuxième chambre aux teintes apaisantes et agencement optimisé."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-8.jpg",
              caption: "Chambre enfant girly."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-9.jpg",
              caption: "Chambre enfant girly."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259245-photo-2026-09-23-17-33-29-10.jpg",
              caption: "Chambre enfant girly."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-11.jpg",
              caption: "Continuité entre les espaces intérieurs et l'extérieur."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-12.jpg",
              caption: "Chambre d'ami épurée."
            }
          ]
        }
      }
    },
    contact: {
      title: "Parlons de votre projet",
      subtitle: "Basés à Paris et intervenant à l'international, nous répondons à vos projets sous 48h.",
      fullName: "Nom complet",
      phone: "Numéro de téléphone",
      email: "Adresse e-mail",
      projectType: "Type de projet",
      serviceOptions: {
        design: "Conception & Design",
        coordination: "Coordination de projet",
        audit: "Conseil & Audit"
      },
      messageLabel: "Votre Message",
      placeholderMessage: "Parlez-nous de votre espace, de vos attentes et du calendrier envisagé...",
      sendBtn: "Envoyer",
      whatsappNotice: "En cliquant sur envoyer, les informations de votre projet seront pré-remplies élégamment sur WhatsApp."
    },
    footer: {
      tagline: "Design d'intérieur haut de gamme & aménagement d'espaces sans frontières.",
      presenceTitle: "ADRESSES & PROJETS",
      hoursTitle: "CONSEILS SUR RDV",
      hoursVal: "Lundi au Samedi : 09:00 — 19:30",
      rights: "ZALY M. Tous droits réservés. L'excellence du luxe discret."
    }
  },
  EN: {
    nav: {
      home: "Home",
      history: "Our Story",
      services: "Services",
      projects: "Portfolios",
      contact: "Contact"
    },
    hero: {
      title: "Designing spaces that reflect your soul",
      subtitle: "From Paris to Dubai, we translate private visions into unique material structures, shaped for your ultimate lifestyle.",
      ctaProjects: "Explore Our Portfolios",
      ctaContact: "Contact Us"
    },
    history: {
      sectionTitle: "Our Story",
      quote: "We believe every room has a story waiting to unfold.",
      paragraph1: "Passionate interior designers working globally with discerning patrons to structure environments that fuse elevated beauty, quiet utility, and rare soul.",
      paragraph2: "Founded in Paris, Zaly M imagines bespoke interiors blending elegance, comfort, and an obsessive attention to detail. Always starting from the way you live.",
      statExperience: "3 Years of Excellence",
      statCountries: "5 Key Locations",
      statClarity: "Pure, Understated Luxury"
    },
    services: {
      sectionTitle: "Bespoke Services",
      subtitle: "Tailored luxury interior design support from blueprint sketches to final handover",
      items: [
        {
          id: "design",
          title: "Concept & Architectural Design",
          text: "Bespoke 3D plans, sophisticated moodboards, luxury material curation, and tactile color layouts — giving life to your space before it is constructed.",
          image: IMAGES.serviceDesign,
          buttonText: "Read details",
          moreDetails: [
            "Bespoke partition layouts and hyper-realistic 3D render designs.",
            "Visual moodboards and texture boards documenting material harmony.",
            "Personalized physical selection of noble stones, rare timber essences, and custom metal hardware.",
            "Technical lighting layouts, plumbing planning, and custom cabinetry architectural drawings."
          ]
        },
        {
          id: "coordination",
          title: "Bespoke Project Management",
          text: "Direct supervision of skilled local craftsmen, luxury suppliers, and global builders for a seamless execution from foundation to furniture setup.",
          image: IMAGES.serviceCoordination,
          buttonText: "Read details",
          moreDetails: [
            "Selective sourcing of high-end artisans, specialist contractors, and premium trade partners.",
            "Rigid project scheduling, milestones tracking, and budget safety compliance.",
            "Comprehensive shipping coordinates, logistics tracking, customs alignment, and final layout installation.",
            "Structured site inspections and beautiful high-definition photo walk-through updates for absolute alignment."
          ]
        },
        {
          id: "audit",
          title: "Elite Workspace Design Audit",
          text: "An expert structural overview of your property: flow optimizations, floor plans re-engineering, curated design purchases or instant staging edits.",
          image: IMAGES.serviceAudit,
          buttonText: "Read details",
          moreDetails: [
            "Comprehensive physical or remote audit assessing architectural layouts and flow improvements.",
            "Bespoke immediate styling advice, optimal light orientation, and signature color matching guidelines.",
            "Curator service recommending fine art assets, unique decorative pieces, and bespoke Italian design brands.",
            "One-day intensive elite makeover restructuring spatial layouts with your existing family collections."
          ]
        }
      ]
    },
    projects: {
      sectionTitle: "Completed Works",
      subtitle: "A showcase of our world-class, premium private residential commissions",
      moreInfoButton: "Explore Portfolio",
      backBtn: "Back to Home",
      projectDetailsLabel: "Design Philosophy",
      projectGalleryLabel: "Completed Gallery",
      items: {
        france: {
          id: "france",
          country: "France",
          countryCode: "FR",
          title: "Haussmann Exceptional Resettlement",
          location: "Paris • France",
          bannerImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
          introduction: "Located a brief stroll from Trocadéro, this grand 220sqm residence is an tailored cocoon for a discerning art collector. Our mandate was to respect original plaster ornaments while embedding a pristine, ultra-minimal modern lifestyle core. A quiet dialogue of timeless charm and razor-sharp contemporary geometry.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
              caption: "The main reception: revived classical mouldings, crisp custom banquette couches, and raw mineral textures."
            },
            {
              url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
              caption: "Refined formal dining room detailed with silk drapes, soft cove lights, and a monolithic travertine dining table."
            },
            {
              url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
              caption: "The master sanctuary: featuring flush walnut millwork, high-pile wool textures, and indirect ambient backlighting."
            },
            {
              url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
              caption: "Muted custom ensuite bathroom displaying sandblasted stonework, custom hardware, and bronze metal mixers."
            }
          ]
        },
        cotedivoire: {
          id: "cotedivoire",
          country: "Côte d'Ivoire",
          countryCode: "CI",
          title: "Conception 3D, Cité Belle Nubian Riviera Mbadon  ville Abijan. ",
          location: "Abidjan • Ivory Coast",
          duration: "3D Architectural Design",
          style: "Contemporary Architecture & 3D Design",
          bannerImage: "https://image.noelshack.com/fichiers/2026/42/3/1791972381-photo-2026-09-23-17-49-41-1.jpg",
          introduction: "3D architectural visualization and bespoke high-end interior concept for an exceptional property located at Cité Belle Nubian, Riviera Mbadon in Abidjan.",
          gallery: [
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-1.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-2.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-3.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-4.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-40-5.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-41.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-41-1.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791972574-photo-2026-09-23-17-49-41-2.jpg",
              caption: ""
            }
          ]
        },
        usa: {
          id: "usa",
          country: "USA",
          countryCode: "US",
          title: "Pâtisserie salon de thé",
          location: "USA",
          duration: "Design & Implementation",
          style: "Patisserie & Tea Salon",
          bannerImage: "https://image.noelshack.com/fichiers/2026/42/3/1791973218-photo-2026-09-25-08-09-57.jpg",
          introduction: "Bespoke interior architecture and design for a high-end French patisserie and tea salon in the USA. A warm, refined, and contemporary atmosphere combining noble textures and curated lighting.",
          gallery: [
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791973486-photo-2026-09-25-08-09-43.jpg",
              caption: ""
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/42/3/1791973486-photo-2026-09-25-08-09-57.jpg",
              caption: ""
            }
          ]
        },
        dubai: {
          id: "dubai",
          country: "Dubai",
          countryCode: "AE",
          title: "Villa Arabian Ranches",
          location: "Arabian Ranches, Dubai",
          duration: "3 weeks",
          style: "Mid-Century Modern",
          bannerImage: "https://image.noelshack.com/fichiers/2026/39/3/1790184932-villa-zaly.jpg",
          introduction: "Located in Arabian Ranches in Dubai, this 220 m² villa was entirely designed and decorated for a young couple and their two children.\n\nThe project draws inspiration from the Mid-Century Modern style: clean lines, warm woods, soft shapes, and a palette of natural tones. Every space was curated to offer the family an elegant, comfortable, and effortless home for everyday living.",
          gallery: [
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-1.jpg",
              caption: "Master bedroom: harmonious volumes and abundance of daylight."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-2.jpg",
              caption: "Living room showcasing Mid-Century Modern ambiance and bespoke detailing."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-3.jpg",
              caption: "Furniture detailing in soft curves and warm natural textures."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-28-4.jpg",
              caption: "Contemporary space and fluid circulation paths."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-28-5.jpg",
              caption: "Architectural perspective highlighting the serene earth-toned palette."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259241-photo-2026-09-23-17-33-28-6.jpg",
              caption: "Custom joinery integrating warm timber veneers."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-29.jpg",
              caption: "Subtle synergy between soothing hues and timeless design."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-1.jpg",
              caption: "Entrance designed for everyday warmth and family living."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-2.jpg",
              caption: "Curated styling accents and refined art objects."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259242-photo-2026-09-23-17-33-29-3.jpg",
              caption: "Bespoke joinery for a dedicated home office area."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-4.jpg",
              caption: "Dining area designed as a haven of peace."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-5.jpg",
              caption: "Warm ambient lighting and soft textures in the laundry room."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259243-photo-2026-09-23-17-33-29-6.jpg",
              caption: "Children's room pairing functionality with joyful playfulness."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-7.jpg",
              caption: "Secondary bedroom featuring soothing neutral colors and built-in units."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-8.jpg",
              caption: "Girly children's bedroom."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-9.jpg",
              caption: "Girly children's bedroom."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259245-photo-2026-09-23-17-33-29-10.jpg",
              caption: "Girly children's bedroom."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-11.jpg",
              caption: "Seamless flow connecting indoor comfort to the terrace."
            },
            {
              url: "https://image.noelshack.com/fichiers/2026/39/4/1790259244-photo-2026-09-23-17-33-29-12.jpg",
              caption: "Minimalist guest bedroom."
            }
          ]
        }
      }
    },
    contact: {
      title: "Let's discuss your project",
      subtitle: "Headquartered in Paris and serving private patrons globally. We respond with design proposals within 48 hours.",
      fullName: "Full name",
      phone: "Phone number",
      email: "Email address",
      projectType: "Project type",
      serviceOptions: {
        design: "Concept & Architectural Design",
        coordination: "Bespoke Project Management",
        audit: "Elite Workspace Design Audit"
      },
      messageLabel: "Your Inquiry",
      placeholderMessage: "Tell us about your property, layout hopes, and target timeline...",
      sendBtn: "Send",
      whatsappNotice: "Upon clicking, your inquiry details will be beautifully composed and prepared inside WhatsApp automatically."
    },
    footer: {
      tagline: "High-end interior design & international spatial architecture consulting.",
      presenceTitle: "GLOBAL OFFICES & PROJECTS",
      hoursTitle: "INQUIRIES BY APPOINTMENT",
      hoursVal: "Monday to Saturday: 09:00 AM — 07:30 PM CET",
      rights: "ZALY M. All rights reserved. Silent Luxury and Absolute Form."
    }
  }
};
