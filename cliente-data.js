// ============================================================
//  cliente-data.js — Ezequiel Tallaví
//  Único archivo que cambia por cliente en la plantilla
//  Interactive Vitae — interactivevitae.netlify.app
// ============================================================

window.CLIENT_DATA = {

  // ----------------------------------------------------------
  // PERSONAL
  // ----------------------------------------------------------
  personal: {
    name: "Ezequiel Tallaví",
    title: {
      es: "Estudiante de Ingeniería Industrial",
      en: "Industrial Engineering Student"
    },
    bio: {
      es: "Estudiante avanzado de Ingeniería Industrial con perfil analítico, organizado y orientado a la mejora continua. Me caracterizo por un estilo de trabajo sereno y enfocado, con capacidad para afrontar desafíos, analizar información y adaptarme a distintos contextos. Busco seguir desarrollándome en áreas vinculadas a proyectos, operaciones, logística y supply chain.",
      en: "Advanced Industrial Engineering student with an analytical, organized profile and a strong focus on continuous improvement. I am characterized by a calm and focused working style, with the ability to face challenges, analyze information, and adapt to different environments. I am seeking to continue developing in areas related to projects, operations, logistics, and supply chain."
    },
    email: "ezequieltallavi1@gmail.com",
    phone: "+54 011 5010-0586",
    linkedin: "www.linkedin.com/in/ezequiel-tallavi",
    location: {
      es: "Tigre, Buenos Aires",
      en: "Tigre, Buenos Aires"
    }
  },

  // ----------------------------------------------------------
  // EXPERIENCE
  // ----------------------------------------------------------
  experience: [
    {
      company: "Techint Ingeniería y Construcción",
      location: "Buenos Aires",
      role: {
        es: "Project Control | PEV",
        en: "Project Control | PEV"
      },
      period: {
        es: "Ene 2026 — Mar 2026",
        en: "Jan 2026 — Mar 2026"
      },
      current: false,
      description: {
        es: "Análisis de costos mensuales en centros logísticos y detección de desvíos vs. presupuesto. Desarrollo de dashboards en Power BI para seguimiento de KPIs de costos. Elaboración de reportes ejecutivos para toma de decisiones. Seguimiento de headcount y control de asignación de recursos. Monitoreo de tareas mediante Planner. Propuesta de mejoras para reducción de costos y eficiencia operativa.",
        en: "Monthly cost analysis in logistics centers and deviation detection vs. budget. Development of Power BI dashboards to track cost KPIs. Preparation of executive reports for decision-making. Headcount tracking and resource allocation control. Task monitoring using Planner. Proposal of improvements for cost reduction and operational efficiency."
      },
      tags: ["Power BI", "Control de Costos", "Reportes Ejecutivos", "Gestión de Proyectos"]
    },
    {
      company: "Vail Resorts",
      location: "Internacional",
      role: {
        es: "Customer Service | Instructor",
        en: "Customer Service | Instructor"
      },
      period: {
        es: "Dic 2022 — Abr 2023",
        en: "Dec 2022 — Apr 2023"
      },
      current: false,
      description: {
        es: "Atención a clientes en inglés en entorno internacional. Adaptación a necesidades individuales con foco en experiencia del cliente. Elaboración de reportes operativos. Participación en capacitaciones continuas.",
        en: "Customer service in English in an international environment. Adaptation to individual needs with a focus on customer experience. Preparation of operational reports. Participation in continuous training programs."
      },
      tags: ["Atención al Cliente", "Inglés", "Entorno Internacional", "Reportes Operativos"]
    },
    {
      company: "Samebo",
      location: "Buenos Aires",
      role: {
        es: "Emprendedor",
        en: "Entrepreneur"
      },
      period: {
        es: "2019 — 2022",
        en: "2019 — 2022"
      },
      current: false,
      description: {
        es: "Gestión de stock y planificación operativa. Definición y seguimiento de KPIs. Análisis de datos para toma de decisiones.",
        en: "Stock management and operational planning. Definition and tracking of KPIs. Data analysis for decision-making."
      },
      tags: ["Gestión de Stock", "KPIs", "Análisis de Datos", "Planificación Operativa"]
    }
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      institution: "Universidad de Buenos Aires (UBA)",
      location: "Buenos Aires",
      degree: {
        es: "Ingeniería Industrial",
        en: "Industrial Engineering"
      },
      period: {
        es: "2019 — Actualidad",
        en: "2019 — Present"
      },
      description: {
        es: "Carrera de grado con foco en procesos, operaciones, logística, gestión de proyectos y análisis cuantitativo.",
        en: "Undergraduate degree focused on processes, operations, logistics, project management, and quantitative analysis."
      },
      achievements: {
        es: "En curso",
        en: "In progress"
      }
    },
    {
      institution: "Colegio Cardenal Newman",
      degree: {
        es: "Bachiller en Ciencias Naturales",
        en: "High School Diploma in Natural Sciences"
      },
      period: "2018",
      description: {
        es: "Bachillerato en Ciencias Naturales con formación bilingüe.",
        en: "High school diploma in Natural Sciences with bilingual education."
      },
      achievements: {
        es: "",
        en: ""
      }
    }
  ],

  // ----------------------------------------------------------
  // SKILLS
  // ----------------------------------------------------------
  skills: {
    tools: [
      { es: 'Excel (Intermedio–Avanzado)', en: 'Excel (Intermediate–Advanced)' },
      { es: 'Power BI (Intermedio)',       en: 'Power BI (Intermediate)' },
      { es: 'SAP (Operativo)',             en: 'SAP (Operational)' },
      { es: 'Python (Básico)',             en: 'Python (Basic)' }
    ],
    professional: [
      { es: 'Análisis de datos',      en: 'Data analysis' },
      { es: 'Control de costos',      en: 'Cost control' },
      { es: 'Mejora continua',        en: 'Continuous improvement' },
      { es: 'Gestión de proyectos',   en: 'Project management' },
      { es: 'Planificación estratégica', en: 'Strategic planning' }
    ],
    languages: [
      {
        language:   { es: 'Español', en: 'Spanish' },
        level:      { es: 'Nativo',  en: 'Native' },
        levelShort: { es: 'nativo',  en: 'native' }
      },
      {
        language:   { es: 'Inglés', en: 'English' },
        level:      { es: 'Avanzado', en: 'Advanced' },
        levelShort: { es: 'avanzado', en: 'advanced' }
      }
    ],
    soft: [
      { name: { es: 'Resolución de problemas', en: 'Problem solving' } },
      { name: { es: 'Organización',            en: 'Organization' } },
      { name: { es: 'Mejora continua',         en: 'Continuous improvement' } },
      { name: { es: 'Adaptabilidad',           en: 'Adaptability' } }
    ]
  },

  // ----------------------------------------------------------
  // REFERENCES
  // Estructura: { name, role: {es,en}, company, relation: {es,en},
  //               photo, linkedin, quote: {es,en} }
  // ----------------------------------------------------------
  referencesVisible: false,

  // ----------------------------------------------------------
  // ABOUT ME (interests / personal)
  // ----------------------------------------------------------
  aboutMe: {},

  references: [
    {
      name: "",
      role: { es: "", en: "" },
      company: "",
      relation: { es: "", en: "" },
      photo: "assets/ref1.jpg",
      linkedin: "https://linkedin.com",
      quote: {
        es: "",
        en: ""
      }
    },
    {
      name: "",
      role: { es: "", en: "" },
      company: "",
      relation: { es: "", en: "" },
      photo: "assets/ref2.jpg",
      linkedin: "https://linkedin.com",
      quote: {
        es: "",
        en: ""
      }
    },
    {
      name: "",
      role: { es: "", en: "" },
      company: "",
      relation: { es: "", en: "" },
      photo: "assets/ref3.jpg",
      linkedin: "https://linkedin.com",
      quote: {
        es: "",
        en: ""
      }
    }
  ],

  // ----------------------------------------------------------
  // CHATBOT SYSTEM PROMPT
  // ----------------------------------------------------------
  chatbot: {
    faq: [
      {
        q: { es: "¿Cuál es la experiencia de Ezequiel?", en: "What's Ezequiel's background?" },
        a: { es: "Ezequiel es estudiante avanzado de Ingeniería Industrial en la UBA. Tuvo una experiencia en Techint Ingeniería y Construcción como Project Control (Ene–Mar 2026), donde trabajó con Power BI, control de costos y reportes ejecutivos. También fue instructor y atención al cliente en Vail Resorts (EE.UU., Dic 2022–Abr 2023) en un entorno 100% en inglés, y gestionó su propio emprendimiento (Samebo) entre 2019 y 2022.", en: "Ezequiel is an advanced Industrial Engineering student at UBA. He worked at Techint Ingeniería y Construcción as Project Control (Jan–Mar 2026), where he used Power BI, cost control, and executive reporting. He also worked as a customer service instructor at Vail Resorts (Dec 2022–Apr 2023) in a 100% English environment, and ran his own venture (Samebo) from 2019 to 2022." }
      },
      {
        q: { es: "¿Es buen fit para roles de operaciones o logística?", en: "Is Ezequiel a fit for operations or logistics roles?" },
        a: { es: "Sí. Su formación en Ingeniería Industrial y su experiencia en Techint lo posicionan bien para roles de operaciones, supply chain o control de proyectos. Tiene manejo de Power BI, SAP y Excel, y ya trabajó en un entorno de gran empresa con reportes ejecutivos y seguimiento de KPIs.", en: "Yes. His Industrial Engineering background and experience at Techint position him well for operations, supply chain, or project control roles. He has hands-on experience with Power BI, SAP, and Excel, and has already worked in a large corporate environment with executive reporting and KPI tracking." }
      },
      {
        q: { es: "¿Qué idiomas habla?", en: "What languages does Ezequiel speak?" },
        a: { es: "Español nativo e inglés avanzado. Trabajó en un entorno 100% en inglés en Vail Resorts (EE.UU.).", en: "Native Spanish and advanced English. He worked in a fully English-speaking environment at Vail Resorts in the United States." }
      },
      {
        q: { es: "¿Dónde estudia?", en: "Where does Ezequiel study?" },
        a: { es: "Estudia Ingeniería Industrial en la Universidad de Buenos Aires (UBA), actualmente en curso. Previamente cursó el bachillerato en Ciencias Naturales en el Colegio Cardenal Newman.", en: "He studies Industrial Engineering at the Universidad de Buenos Aires (UBA), currently in progress. He previously completed his high school diploma in Natural Sciences at Colegio Cardenal Newman." }
      },
      {
        q: { es: "¿Cómo puedo contactarlo?", en: "How can I contact Ezequiel?" },
        a: { es: "Por email: ezequieltallavi1@gmail.com — Por teléfono: +54 011 5010-0586 — Por LinkedIn: linkedin.com/in/ezequiel-tallavi", en: "By email: ezequieltallavi1@gmail.com — By phone: +54 011 5010-0586 — On LinkedIn: linkedin.com/in/ezequiel-tallavi" }
      },
      {
        q: { es: "¿Cómo lo ves para un rol junior en una empresa de proyectos?", en: "How would Ezequiel fit a junior role in a project-based company?" },
        a: { es: "Es un fit muy sólido. Ezequiel ya tiene experiencia real en project control dentro de Techint, una de las empresas de ingeniería más grandes de la región. Sabe usar las herramientas del día a día (Power BI, Excel, SAP, Planner) y tiene mentalidad analítica y organizada. Para un rol junior o semi-junior en proyectos, operaciones o supply chain, es un candidato muy competitivo.", en: "It's a very solid fit. Ezequiel already has real project control experience at Techint, one of the largest engineering firms in the region. He knows the day-to-day tools (Power BI, Excel, SAP, Planner) and has an analytical, organized mindset. For a junior or semi-junior role in projects, operations, or supply chain, he is a very competitive candidate." }
      },
      {
        q: { es: "¿Tiene experiencia con herramientas de datos?", en: "Does Ezequiel have experience with data tools?" },
        a: { es: "Sí. Usó Power BI en Techint para dashboards de KPIs de costos. Maneja Excel a nivel intermedio–avanzado, SAP a nivel operativo y Python a nivel básico. Su perfil combina la herramienta técnica con el criterio analítico para interpretar y comunicar resultados.", en: "Yes. He used Power BI at Techint to build cost KPI dashboards. He handles Excel at an intermediate–advanced level, SAP at an operational level, and Python at a basic level. His profile combines technical tools with the analytical judgment to interpret and communicate results." }
      },
      {
        q: { es: "¿Qué diferencia a Ezequiel de otros candidatos?", en: "What makes Ezequiel stand out?" },
        a: { es: "Tres cosas: primero, ya tiene experiencia real en una empresa de ingeniería de primer nivel (Techint), no solo formación académica. Segundo, su paso por Vail Resorts demuestra adaptabilidad y capacidad de trabajar en entornos internacionales en inglés. Tercero, el hecho de haber gestionado su propio emprendimiento muestra iniciativa y autonomía desde temprana edad.", en: "Three things: first, he already has real experience at a top-tier engineering company (Techint), not just academic training. Second, his time at Vail Resorts demonstrates adaptability and the ability to work in international English-speaking environments. Third, managing his own venture at an early age shows initiative and autonomy." }
      }
    ],
    systemPrompt: {
      es: `Eres el asistente de carrera de Ezequiel Tallaví, una IA entrenada para representar su perfil profesional con inteligencia y criterio. No eres un simple bot de preguntas y respuestas — eres un agente estratégico que defiende el perfil de Ezequiel, conduce conversaciones con propósito y hace preguntas para entender mejor a quien te escribe.

PERFIL COMPLETO DE EZEQUIEL TALLAVÍ:

Estudiante avanzado de Ingeniería Industrial en la UBA (2019 – Actualidad).
Project Control | PEV en Techint Ingeniería y Construcción (Ene–Mar 2026). Análisis de costos, dashboards en Power BI, reportes ejecutivos, seguimiento de headcount y KPIs, propuestas de mejora operativa.
Customer Service | Instructor en Vail Resorts (Dic 2022 – Abr 2023). Atención al cliente en inglés en entorno internacional, reportes operativos, capacitaciones continuas.
Emprendedor en Samebo (2019–2022). Gestión de stock, planificación operativa, definición y seguimiento de KPIs, análisis de datos.
Bachiller en Ciencias Naturales, Colegio Cardenal Newman (2018).
Herramientas: Excel (Intermedio–Avanzado), Power BI (Intermedio), SAP (Operativo), Python (Básico).
Habilidades profesionales: Análisis de datos, Control de costos, Mejora continua, Gestión de proyectos, Planificación estratégica.
Idiomas: Español nativo, Inglés avanzado (experiencia laboral en entorno 100% en inglés).
Soft skills: resolución de problemas, organización, mejora continua, adaptabilidad.
Contacto: ezequieltallavi1@gmail.com | +54 011 5010-0586 | linkedin.com/in/ezequiel-tallavi

CÓMO CONDUCIR LA CONVERSACIÓN:

Primer mensaje: presentate brevemente, explicá qué podés hacer y hacé una pregunta abierta para entender quién escribe (reclutador, empresa, colega, curioso).
Según la respuesta, adaptá el tono: más formal con reclutadores corporativos, más directo con startups o PYMEs.
Siempre que puedas, hacé UNA pregunta de seguimiento para profundizar. Ejemplos: "¿Para qué tipo de empresa sería el rol?", "¿Qué área tiene foco: proyectos, logística, operaciones?", "¿Buscan alguien que ya tenga experiencia con Power BI o SAP?"
Terminá cada respuesta con una pregunta o una invitación a seguir explorando.

LÓGICA DE SENIORITY — CÓMO RECOMENDAR PUESTOS:

Ezequiel es un estudiante avanzado con experiencia real en Techint, emprendimiento propio y experiencia internacional. Su target natural son roles junior a semi-junior en operaciones, proyectos, supply chain, control de gestión o logística.
Si alguien pregunta por un puesto Junior o Trainee: es el fit ideal. Recomendalo con entusiasmo y datos concretos de su experiencia en Techint.
Si preguntan por Semi-Senior o Analista Jr: alcanzable según el área. En project control o datos, puede competir; en roles más especializados, depende del contexto.
Si preguntan por Senior o Specialist: sé honesto — Ezequiel está construyendo su carrera y aún le falta experiencia para ese nivel. Pero destacá su potencial y trayectoria.
Nunca sobrevendas ni subvendas. Tu credibilidad es la credibilidad de Ezequiel.

REGLAS GENERALES:

Respondé siempre en el idioma en que te escriben.
Sé conciso, cálido y profesional. No uses listas largas si podés responder en prosa fluida.
Si te preguntan algo fuera del perfil de Ezequiel, redirigí amablemente a contactarlo directamente.
Nunca inventes información que no esté en este perfil.`,

      en: `You are Ezequiel Tallaví's career assistant — an AI trained to represent his professional profile with intelligence and strategic purpose. You are not a simple Q&A bot. You are a strategic agent that advocates for Ezequiel's profile, drives conversations with intent, and asks questions to better understand who you're speaking with.

EZEQUIEL TALLAVÍ'S FULL PROFILE:

Advanced Industrial Engineering student at UBA (2019 – Present).
Project Control | PEV at Techint Ingeniería y Construcción (Jan–Mar 2026). Cost analysis, Power BI dashboards, executive reporting, headcount tracking, KPI monitoring, operational improvement proposals.
Customer Service | Instructor at Vail Resorts (Dec 2022 – Apr 2023). Customer service in English in an international environment, operational reports, continuous training programs.
Entrepreneur at Samebo (2019–2022). Stock management, operational planning, KPI definition and tracking, data analysis for decision-making.
High School Diploma in Natural Sciences, Colegio Cardenal Newman (2018).
Tools: Excel (Intermediate–Advanced), Power BI (Intermediate), SAP (Operational), Python (Basic).
Professional skills: Data analysis, Cost control, Continuous improvement, Project management, Strategic planning.
Languages: Native Spanish, Advanced English (professional experience in a 100% English-speaking environment).
Soft skills: problem solving, organization, continuous improvement, adaptability.
Contact: ezequieltallavi1@gmail.com | +54 011 5010-0586 | linkedin.com/in/ezequiel-tallavi

HOW TO CONDUCT THE CONVERSATION:

First message: briefly introduce yourself, explain what you can do, and ask an open question to understand who is writing (recruiter, company, colleague, curious visitor).
Based on the response, adapt your tone: more formal with corporate recruiters, more direct with startups or SMEs.
Whenever possible, ask ONE follow-up question to go deeper. Examples: "What type of company would the role be at?", "Is the focus on projects, logistics, or operations?", "Are you looking for someone who already has experience with Power BI or SAP?"
End each response with a question or an invitation to keep exploring.

SENIORITY LOGIC — HOW TO RECOMMEND POSITIONS:

Ezequiel is an advanced student with real experience at Techint, his own entrepreneurial venture, and international work experience. His natural target is junior to semi-junior roles in operations, projects, supply chain, management control, or logistics.
If someone asks about a Junior or Trainee role: this is the ideal fit. Recommend him enthusiastically with concrete data from his Techint experience.
If they ask about Semi-Senior or Junior Analyst: achievable depending on the area. In project control or data roles, he can compete; in more specialized roles, it depends on context.
If they ask about Senior or Specialist: be honest — Ezequiel is building his career and still needs more experience for that level. But highlight his potential and track record.
Never oversell or undersell. Your credibility is Ezequiel's credibility.

GENERAL RULES:

Always respond in the language the user writes in.
Be concise, warm, and professional. Avoid long bullet lists if you can answer in flowing prose.
If asked something outside Ezequiel's profile, kindly redirect to contacting him directly.
Never invent information not present in this profile.`
    }
  },

  // ----------------------------------------------------------
  // TOUR GUIDE
  // ----------------------------------------------------------
  tour: [
    {
      sectionId: 'hero',
      title: { es: 'Hola, soy Ezequiel', en: "Hi, I'm Ezequiel" },
      desc: {
        es: 'Te dejo un recorrido rápido por mi perfil: qué hago, en qué trabajé y cómo puedo aportar.',
        en: "Here's a quick tour of my profile: what I do, where I've worked, and what I can bring to the table."
      }
    },
    {
      sectionId: 'experiencia',
      title: { es: 'Qué hice hasta ahora', en: "What I've done so far" },
      desc: {
        es: 'Experiencias, roles y resultados en cada etapa de mi carrera.',
        en: 'Experiences, roles, and results at each stage of my career.'
      }
    },
    {
      sectionId: 'mi-formacion',
      title: { es: 'Mi Formación', en: 'My Background' },
      desc: {
        es: 'Dónde estudié, qué títulos obtuve y los logros académicos que fui sumando en el camino.',
        en: "Where I studied, what degrees I earned, and the academic achievements I've built along the way."
      }
    },
    {
      sectionId: 'sobre-mi',
      title: { es: 'Cómo trabajo', en: 'How I work' },
      desc: {
        es: 'Mis habilidades, herramientas e intereses fuera del trabajo.',
        en: 'My skills, tools, and interests outside of work.'
      }
    },
    {
      sectionId: 'contacto',
      title: { es: 'Conectemos', en: "Let's connect" },
      desc: {
        es: 'Si te interesa mi perfil, acá tenés mis datos para contactarme.',
        en: 'If my profile interests you, here are my details to get in touch.'
      }
    }
  ]

};
