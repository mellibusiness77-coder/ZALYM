import { TranslationSet } from './types';
import heroImg from './assets/images/hero_interior_1782061008342.jpg';
import portraitImg from './assets/images/designer_portrait_1782061023066.jpg';
import serviceDesignImg from './assets/images/service_design_1782061037290.jpg';
import serviceAuditImg from './assets/images/service_audit_1782061066262.jpg';
import heroBrightImg from './assets/images/hero_bright_living_room_1782062589328.jpg';

// Let's declare our generated image paths precisely as saved by generate_image
export const IMAGES = {
  hero: 'https://image.noelshack.com/fichiers/2026/39/3/1790179967-accueuil-zaly.jpg',
  portrait: 'https://image.noelshack.com/fichiers/2026/26/1/1782084312-chatgpt-image-22-juin-2026-01-16-01.jpg',
  serviceDesign: serviceDesignImg,
  serviceCoordination: 'https://image.noelshack.com/fichiers/2026/39/4/1790258524-collab.jpg',
  serviceAudit: serviceAuditImg,
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
        suisse: {
          id: "suisse",
          country: "Suisse",
          countryCode: "CH",
          title: "Chalet Contemporain et Épuré",
          location: "Crans-Montana • Suisse",
          bannerImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
          introduction: "Un sanctuaire face aux sommets valaisans. L'approche a consisté à éliminer le superflu pour exalter la puissance brute du paysage montagnard. Le mélèze sablé et la pierre locale se marient aux canapés oversize et à un éclairage architectural discret pour un confort thermique et visuel d'exception.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
              caption: "Le séjour cathédrale orienté vers les cimes, caractérisé par son harmonie de bois sombre et beige."
            },
            {
              url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
              caption: "Salon de lecture intime, avec cheminée ouverte encastrée dans un mur de calcaire sculpté."
            },
            {
              url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
              caption: "Cuisine épurée avec îlot central en granite brossé suisse et poignées dérobées."
            },
            {
              url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
              caption: "Lumière douce de fin de journée glissant sur les rideaux et les volumes en chêne clair."
            }
          ]
        },
        usa: {
          id: "usa",
          country: "USA",
          countryCode: "US",
          title: "Penthouse Minimaliste",
          location: "SoHo, New York • USA",
          bannerImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=85",
          introduction: "Au sommet d'un bâtiment industriel réhabilité de SoHo, notre équipe a structuré un espace de vie grandiose baigné de lumière de part en part. Nous avons privilégié les contrastes : acier brossé d'une rigueur absolue contre rideaux aériens en lin double drapé, et sols en ciment soyeux.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1600121848594-d8644e57abad?auto=format&fit=crop&w=1200&q=80",
              caption: "Espace ouvert salon-repas mettant en valeur de somptueuses pièces de mobilier d'art italien."
            },
            {
              url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
              caption: "La cuisine d'architecte, monobloc d'inox microbillé s'intégrant discrètement au fond de la pièce."
            },
            {
              url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
              caption: "Suite présidentielle isolée par des cloisons acoustiques élégamment gainées de feutre de laine."
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
        },
        egypt: {
          id: "egypt",
          country: "Egypt",
          countryCode: "EG",
          title: "Résidence de Charme en Haute-Égypte",
          location: "Le Caire • Égypte",
          bannerImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=85",
          introduction: "Pétrie d'histoire et de matières solaires, cette grande propriété urbaine combine des approches vernaculaires et le raffinement de la décoration européenne contemporaine. Nous avons utilisé des enduits à la chaux appliqués manuellement, du travertin couleur sable et du lin brut d'Égypte.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1615529182906-134d9a3983a4?auto=format&fit=crop&w=1200&q=80",
              caption: "Chambre à coucher épurée jouant avec des textures sablées claires et un mobilier en cèdre naturel."
            },
            {
              url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
              caption: "Espace lounge intime : niches architecturales voûtées d'inspiration saharienne et tapis berbères soyeux."
            },
            {
              url: "https://images.unsplash.com/photo-1600585154526-990975239db0?auto=format&fit=crop&w=1200&q=80",
              caption: "Salle de détente ouverte alliant un sol de marbre sablé, des canapés profonds beiges et des jeux d'ombres tamisées."
            }
          ]
        }
      }
    },
    contact: {
      title: "Parlons de votre projet",
      subtitle: "Basés à Paris et intervenant à l'international, nous répondons à vos projets de beaux volumes sous 48h.",
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
        suisse: {
          id: "suisse",
          country: "Switzerland",
          countryCode: "CH",
          title: "Contemporary Minimalist Alpine Chalet",
          location: "Crans-Montana • Switzerland",
          bannerImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
          introduction: "A pure scenic refuge high in the dramatic Crans-Montana. The layout eliminates any visual noise to isolate the stunning Alpine landscape. Salvaged mountain larch timber and natural grey stone tiles pair perfectly with oversized Italian linen seating and custom light architectural details.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
              caption: "Double-height central living room boasting pristine wall details and large structural logs."
            },
            {
              url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
              caption: "Cosy reading snug wrapping around a low horizontal fireplace nested in bespoke limestone blocks."
            },
            {
              url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
              caption: "Sleek alpine kitchen containing a monolithic grey granite island and flush soft-close appliances."
            },
            {
              url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
              caption: "Filtered evening sunshine falling upon tailored oak panels and custom textured wall coverings."
            }
          ]
        },
        usa: {
          id: "usa",
          country: "USA",
          countryCode: "US",
          title: "Loft-Penthouse Collection",
          location: "SoHo, New York • USA",
          bannerImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1600&q=85",
          introduction: "Hovering high above historical SoHo brick architectures, this top-floor penthouse was engineered to feel light, open, and intensely tactile. Raw blackened structural steel, micro-cement floor coatings, and grand sliding panels establish an exquisite urban lifestyle.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1600121848594-d8644e57abad?auto=format&fit=crop&w=1200&q=80",
              caption: "Fluid lifestyle lounge containing unique limited-edition furniture creations and bespoke art curation."
            },
            {
              url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
              caption: "Minimalist stainless-steel professional cooktop setup matching flush wood backboards seamlessly."
            },
            {
              url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
              caption: "Master penthouse bedroom isolated behind custom acoustic felt wall systems."
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
        },
        egypt: {
          id: "egypt",
          country: "Egypt",
          countryCode: "EG",
          title: "Luminous Giza Prestige Pavilion",
          location: "Cairo • Egypt",
          bannerImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=85",
          introduction: "Immerse in historic sunrays and dusty desert-toned surfaces. This grand urban property combines regional architecture lessons with polished European interior comforts. Standard sand-blasted earthy lime-plasters pair with brushed travertine stone blocks and local Egyptian raw linen draping.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1615529182906-134d9a3983a4?auto=format&fit=crop&w=1200&q=80",
              caption: "Giza master bedroom featuring textured earth-colored walls and low-slung aromatic cedar sleep platforms."
            },
            {
              url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80",
              caption: "Intimate evening lounge room displaying saharic arched recesses and tactile flat-weave custom rugs."
            },
            {
              url: "https://images.unsplash.com/photo-1600585154526-990975239db0?auto=format&fit=crop&w=1200&q=80",
              caption: "Outdoor-facing relaxation deck lined with soft custom light beige cushions, filtering harsh sunrays."
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
