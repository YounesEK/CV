/* ============================================================
   CV CONTENT - EDIT ONLY THIS FILE TO UPDATE YOUR CV
   ------------------------------------------------------------
   i18n note (future): to add languages, change any string into
   an object { es: "...", en: "..." } and add a t() helper in
   app.js that reads the active language. Structure is ready.
   ============================================================ */

const CV_DATA = {
  // --- Personal / Home ---
  profile: {
    name: "Younes El Kouarti",
    title: "Operaciones y Logistica Internacional",
    tagline:
      "Fundador y gestor con experiencia multicontinental en comercio mayorista, logistica de alto volumen y direccion de equipos.",
    location: "Ocana, Toledo",
    email: "younesmar@gmail.com",
    photo: "assets/profile.jpg", // placeholder image path
    cvFile: "assets/cv.pdf", // download CV path
    links: [
      { label: "Email", url: "mailto:younesmar@gmail.com" },
      { label: "LinkedIn", url: "#" },
    ],
  },

  // --- Professional summary (hybrid CV) ---
  summary:
    "Mas de 20 anos liderando operaciones comerciales y logisticas. Especialista en comercio mayorista B2B de smartphones a escala multicontinental, con dominio de la fiscalidad intracomunitaria e internacional y el control de cadenas de suministro de gran volumen. Solida experiencia previa como jefe de obra y comercial bancario. Perfil orientado a resultados, negociacion y gestion de equipos.",

  // --- Experience (reverse chronological) ---
  experience: [
    {
      role: "Fundador / Comercio Mayorista de Smartphones",
      company: "Younes Trading SL · Primacy Trading SL · Promycons Ideas y Servicios SL",
      period: "Junio 2014 — Mayo 2026",
      duration: "11 anos 11 meses",
      location: "Multicontinental (Asia, Africa, Europa)",
      highlights: [
        "Compra y venta mayorista B2B de telefonos moviles nuevos y usados, mas de 20.000 dispositivos gestionados.",
        "Importacion multicontinental desde Asia, Africa y Europa, con gestiones de transito aduanero.",
        "Fiscalidad intracomunitaria e internacional y registro de operaciones en importaciones fuera de la UE.",
        "Control logistico y trazabilidad de miles de dispositivos: ubicacion, stock y distribucion.",
        "Operativa bajo sociedades limitadas propias y regimen de autonomo, en distintas etapas cronologicas.",
      ],
    },
    {
      role: "Comercial y Administrativo",
      company: "Societe Generale",
      period: "Mayo 2010 — Abril 2012",
      duration: "1 ano 11 meses",
      location: "",
      highlights: [
        "Prospeccion de zonas y captacion de clientes; 50 clientes captados.",
        "Seguimiento de cartera, activacion de cuentas y contratacion de productos bancarios.",
        "En plantilla como comercial y administrativo.",
      ],
    },
    {
      role: "Jefe de Obra",
      company: "Construccion residencial",
      period: "Mayo 2005 — Mayo 2010",
      duration: "5 anos",
      location: "Maello y Morana, Avila",
      highlights: [
        "Construccion de 70 chalets individuales llave en mano, ademas de reformas.",
        "Direccion de un equipo de 50 trabajadores y todos los oficios.",
        "Gestion integral: cimentacion, ejecucion, presupuestos y plazos hasta entrega de llaves.",
        "Lectura y replanteo de planos, planificacion y ejecucion de planning.",
        "Desempeno tambien como oficial 1a y peon segun necesidades de obra.",
      ],
    },
    {
      role: "Comercial y Administrativo",
      company: "BMCE International",
      period: "Mayo 2003 — Mayo 2004",
      duration: "1 ano",
      location: "",
      highlights: [
        "Prospeccion de zonas y captacion de clientes; 20 clientes captados.",
        "Seguimiento de cartera, activacion de cuentas y contratacion de productos bancarios.",
      ],
    },
  ],

  // --- Education ---
  education: [
    {
      degree: "Licenciado en Administracion y Direccion de Empresas",
      school: "Marruecos",
      period: "Septiembre 1995 — Septiembre 2000",
      duration: "5 anos",
    },
  ],

  // --- Certifications ---
  certifications: [
    { name: "Introduction to Cybersecurity", issuer: "CISCO" },
    { name: "Data Analytics Essentials", issuer: "CISCO" },
    { name: "Scrum Foundation Professional (SFPC)", issuer: "CertiProf" },
    { name: "PRL Online 20 horas", issuer: "Prevencion de Riesgos Laborales" },
    { name: "Carretillero en vigor", issuer: "Certificacion oficial" },
    { name: "Carnet de conducir tipo B", issuer: "" },
  ],

  // --- Skills ---
  skills: {
    core: [
      "Logistica y operaciones",
      "Comercio internacional B2B",
      "Fiscalidad intracomunitaria e internacional",
      "Vision estrategica y control analitico",
      "Negociacion y resolucion de problemas",
      "Liderazgo y gestion de equipos",
    ],
    tools: [
      "Excel avanzado",
      "Microsoft Office 365",
    ],
    languages: [
      { name: "Arabe", level: "Nativo" },
      { name: "Castellano", level: "C2" },
      { name: "Frances", level: "C2" },
      { name: "Ingles", level: "B2" },
    ],
  },
};
