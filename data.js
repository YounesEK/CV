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
    title: "Operaciones y Logística Internacional",
    tagline:
      "Fundador y gestor con experiencia multicontinental en comercio mayorista, logística de alto volumen y dirección de equipos.",
    location: "Ocaña, Toledo",
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
    "Más de 20 años liderando operaciones comerciales y logísticas. Especialista en comercio mayorista B2B de smartphones a escala multicontinental, con dominio de la fiscalidad intracomunitaria e internacional y el control de cadenas de suministro de gran volumen. Sólida experiencia previa como jefe de obra y comercial bancario. Perfil orientado a resultados, negociación y gestión de equipos.",

  // --- Experience (reverse chronological) ---
  experience: [
    {
      role: "Fundador / Comercio Mayorista de Smartphones",
      company: "Younes Trading SL · Primacy Trading SL · Promycons Ideas y Servicios SL",
      period: "Junio 2014 — Mayo 2026",
      duration: "11 años 11 meses",
      location: "Multicontinental (Asia, África, Europa)",
      highlights: [
        "Compra y venta mayorista B2B de teléfonos móviles nuevos y usados, gestionando operaciones de gran volumen de forma recurrente.",
        "Importación multicontinental desde Asia, África y Europa, con gestiones de tránsito aduanero.",
        "Fiscalidad intracomunitaria e internacional y registro de operaciones en importaciones fuera de la UE.",
        "Control logístico y trazabilidad de miles de dispositivos: ubicación, stock y distribución.",
        "Operativa bajo sociedades limitadas propias y régimen de autónomo, en distintas etapas cronológicas.",
      ],
    },
    {
      role: "Comercial y Administrativo",
      company: "Société Générale",
      period: "Mayo 2010 — Abril 2012",
      duration: "1 año 11 meses",
      location: "",
      highlights: [
        "Prospección de zonas y captación de clientes; media de 20 clientes captados por semana.",
        "Seguimiento de cartera, activación de cuentas y contratación de productos bancarios.",
        "En plantilla como comercial y administrativo.",
      ],
    },
    {
      role: "Jefe de Obra",
      company: "Construcción residencial",
      period: "Mayo 2005 — Mayo 2010",
      duration: "5 años",
      location: "Maello y Moraña, Ávila",
      highlights: [
        "Construcción de 70 chalets individuales llave en mano, además de reformas.",
        "Dirección de un equipo de 50 trabajadores y todos los oficios.",
        "Gestión integral: cimentación, ejecución, presupuestos y plazos hasta entrega de llaves.",
        "Lectura y replanteo de planos, planificación y ejecución de planning.",
        "Desempeño también como oficial 1ª y peón según necesidades de obra.",
      ],
    },
    {
      role: "Comercial y Administrativo",
      company: "BMCE International",
      period: "Mayo 2003 — Mayo 2004",
      duration: "1 año",
      location: "",
      highlights: [
        "Prospección de zonas y captación de clientes; 100 clientes captados en un solo fin de semana.",
        "Seguimiento de cartera, activación de cuentas y contratación de productos bancarios.",
      ],
    },
  ],

  // --- Education ---
  education: [
    {
      degree: "Licenciado en Administración y Dirección de Empresas",
      school: "Marruecos",
      period: "Septiembre 1995 — Septiembre 2000",
      duration: "5 años",
    },
  ],

  // --- Certifications ---
  certifications: [
    { name: "PRL Online 20 horas", issuer: "Prevención de Riesgos Laborales" },
    { name: "Carretillero en vigor", issuer: "Certificación oficial" },
    { name: "Carnet de conducir tipo B", issuer: "" },
  ],

  // --- Skills ---
  skills: {
    core: [
      "Logística y operaciones",
      "Comercio internacional B2B",
      "Fiscalidad intracomunitaria e internacional",
      "Visión estratégica y control analítico",
      "Negociación y resolución de problemas",
      "Liderazgo y gestión de equipos",
    ],
    tools: [
      "Excel avanzado",
      "Microsoft Office 365",
    ],
    languages: [
      { name: "Árabe", level: "Nativo" },
      { name: "Castellano", level: "C2" },
      { name: "Francés", level: "C2" },
      { name: "Inglés", level: "B2" },
    ],
  },
};
