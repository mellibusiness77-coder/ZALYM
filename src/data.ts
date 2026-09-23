import { TranslationSet } from './types';
import heroImg from './assets/images/hero_interior_1782061008342.jpg';
import portraitImg from './assets/images/designer_portrait_1782061023066.jpg';
import serviceDesignImg from './assets/images/service_design_1782061037290.jpg';
import serviceCoordinationImg from './assets/images/service_coordination_1782061051289.jpg';
import serviceAuditImg from './assets/images/service_audit_1782061066262.jpg';
import heroBrightImg from './assets/images/hero_bright_living_room_1782062589328.jpg';

// Let's declare our generated image paths precisely as saved by generate_image
export const IMAGES = {
  hero: 'https://image.noelshack.com/fichiers/2026/39/3/1790179967-accueuil-zaly.jpg',
  portrait: 'https://image.noelshack.com/fichiers/2026/26/1/1782084312-chatgpt-image-22-juin-2026-01-16-01.jpg',
  serviceDesign: serviceDesignImg,
  serviceCoordination: serviceCoordinationImg,
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
          title: "Villa d'Exception Oasis Céleste",
          location: "Palm Jumeirah • Dubaï",
          bannerImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
          introduction: "Une villa côtière monumentale conçue pour créer l'harmonie parfaite entre la vue sur le golfe Persique et l'intimité du foyer. Les marbres nobles se déclinent en teintes désertiques dorées, rehaussés par un mobilier italien exclusif et des menuiseries sur mesure atteignant les plafonds.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
              caption: "Le somptueux atrium central : l'intégration d'un jardin sec minimaliste et d'un escalier hélicoïdal suspendu."
            },
            {
              url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
              caption: "Salon d'été s'ouvrant sur la terrasse et sa piscine à débordement par de gigantesques vantaux invisibles."
            },
            {
              url: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
              caption: "Détail de la salle de bains d'invités combinant un bloc vasque sculpté en Onyx rétro-éclairé."
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
          title: "Celestial Palm Oasis Villa",
          location: "Palm Jumeirah • Dubai",
          bannerImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
          introduction: "A majestic coastal mansion celebrating indoor-outdoor waterfront interactions. Crisp white Calacatta marble slab details line the floors, complemented by brushed-brass trim work, tailored Italian structural elements, and grand views.",
          gallery: [
            {
              url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
              caption: "Grand central double-atrium highlighted by custom water elements and a fluid helix marble stair flight."
            },
            {
              url: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
              caption: "Sunlit outdoor pavilion linking the family room to the glass-walled infinity pool edge."
            },
            {
              url: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=1200&q=80",
              caption: "Guest bathroom luxury with a hand-sculpted glowing translucent Onyx raw-edge wash stand."
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
