export type Lang = 'es' | 'en';

export const site = {
  url: import.meta.env.SITE.replace(/\/$/, ''),
  name: 'Buca Digital Works',
  legal: 'Buca Digital Works SAS',
  email: 'bucapps.dev@gmail.com',
  founder: 'Gabriel Santana',
  founderUrl: 'https://gabrielsantana.mx',
  linkedin: 'https://www.linkedin.com/in/carlossp-dev/',
  github: 'https://github.com/CarlosSantana94',
  city: 'Guadalajara, MX',
  coords: '20.67° N · 103.35° W',
};

export interface Project {
  slug: string;
  title: string;
  tag: string;
  card: string;
  lede: string;
  facts: [string, string][];
  url?: string;
  urlLabel?: string;
  metrics?: [string, string][];
  challenge: string;
  solution: string;
  features: { title: string; items: string[] }[];
  decisions?: string[];
  stack: string[];
  status: string;
  media?: 'sango';
}

const es = {
  lang: 'es' as Lang,
  locale: 'es_MX',
  path: '/',
  altPath: '/en/',
  altLabel: 'EN',
  altName: 'English',
  projectBase: '/proyectos/',
  meta: {
    title: 'Buca Digital Works · Estudio de software en Guadalajara',
    description:
      'Estudio de software en Guadalajara. Diseñamos, construimos y operamos plataformas SaaS, apps móviles, sitios y chatbots de WhatsApp. Creadores de notex.clinic.',
  },
  nav: { services: 'Servicios', work: 'Proyectos', process: 'Proceso', studio: 'Estudio', contact: 'Contacto', cta: 'Cotizar proyecto' },
  skip: 'Saltar al contenido',
  hero: {
    eyebrow: 'Estudio de software · Guadalajara, MX',
    line1: 'Software',
    line2: 'que se usa.',
    lede: 'Diseñamos, construimos y operamos producto digital para negocios en México.',
    body: 'Un estudio pequeño, a propósito. Pocos proyectos a la vez, llevados de la idea a producción por la misma persona que escribe el código y responde cuando algo falla.',
    ctaWork: 'Ver proyectos',
    ctaContact: 'Cotizar proyecto',
    status: [
      ['En producción', '4 productos'],
      ['Base', 'Guadalajara · remoto'],
      ['Fundador', 'Gabriel Santana'],
    ] as [string, string][],
  },
  services: {
    index: '01',
    title: 'Servicios',
    intro: 'Cuatro cosas que hacemos bien, siempre conectadas a un backend propio y pensadas para durar.',
    items: [
      {
        title: 'Producto SaaS',
        body: 'Plataformas multi-tenant con cuentas, roles, pagos, notificaciones y cumplimiento normativo. El mismo nivel de ingeniería que sostiene a notex.clinic.',
        examples: ['notex'],
      },
      {
        title: 'Apps móviles',
        body: 'Android nativo o híbrido con Ionic. Diseñamos los flujos, construimos el backend y publicamos en la tienda.',
        examples: ['sango', 'sam-movil'],
      },
      {
        title: 'Sitios y automatización',
        body: 'Sitios rápidos con SEO real, en uno o dos idiomas, y chatbots conectados a WhatsApp Business que atienden por ti.',
        examples: ['mariana-tyo', 'mariana-santana'],
      },
      {
        title: 'Backend e integraciones',
        body: 'APIs en Java con Spring Boot o en TypeScript, pagos con Stripe, IA, migración de datos legados y despliegue en AWS o GCP.',
        examples: ['notex', 'sam-movil'],
      },
    ],
  },
  work: {
    index: '02',
    title: 'Proyectos',
    intro: 'Producto propio y trabajo para clientes. Cada uno tiene su caso completo con lo que hace y cómo está construido.',
    caseLink: 'Ver caso completo',
    caseShort: 'Ver caso',
    visit: 'Visitar sitio',
    videoLabel: 'Demo de la app de SANGO: pedido, panel de administración y entrega',
  },
  process: {
    index: '03',
    title: 'Proceso',
    intro: 'Sin sorpresas: sabes qué se construye, cuándo y cuánto cuesta antes de empezar.',
    steps: [
      ['Entender', 'Una llamada y un documento corto con el problema, los usuarios, el alcance y el precio.'],
      ['Diseñar', 'Flujos y pantallas antes de escribir código. Tú los apruebas y los ajustamos juntos.'],
      ['Construir', 'Avances cada semana en un ambiente de prueba que puedes usar desde el primer sprint.'],
      ['Operar', 'Despliegue, monitoreo, respaldos y mejoras después del lanzamiento. El proyecto no termina el día que sale.'],
    ] as [string, string][],
  },
  principles: {
    title: 'Cómo construimos',
    items: [
      ['Seguro por omisión', 'Aislamiento de datos en la base de datos, rutas cerradas hasta que alguien las abre y 2FA donde importa.'],
      ['Probado de punta a punta', 'Pruebas E2E en CI que recorren los flujos reales antes de cada release.'],
      ['Decisiones documentadas', 'Cada decisión técnica queda escrita en un ADR, para que el sistema se entienda solo.'],
      ['IA con revisión humana', 'Usamos agentes de IA para construir más rápido y la IA en producto siempre propone, nunca decide sola.'],
    ] as [string, string][],
  },
  studio: {
    index: '04',
    title: 'Estudio',
    body: [
      'Detrás de Buca está Gabriel Santana, ingeniero en computación por la Universidad de Guadalajara y Senior Fullstack Developer con nueve años construyendo backend para banca, farmacéutica y seguridad de identidades.',
      'En Buca aplica ese mismo rigor a productos más cercanos: consultorios, clubes deportivos, tintorerías y creativos. Trato directo con quien construye, sin capas intermedias.',
    ],
    link: 'Conoce a Gabriel',
  },
  contact: {
    index: '05',
    title: 'Cuéntanos tu proyecto.',
    body: '¿Tienes una idea, un sistema que ya no da más o un proceso que se hace a mano? Escríbenos y te respondemos en menos de 48 horas.',
    copy: 'Copiar',
    copied: 'Copiado',
    email: 'Escribir un correo',
  },
  case: {
    label: 'Caso de estudio',
    back: 'Todos los proyectos',
    challenge: 'El reto',
    solution: 'La solución',
    features: 'Qué hace',
    decisions: 'Decisiones técnicas',
    stack: 'Stack',
    gallery: 'Recorrido',
    next: 'Siguiente proyecto',
    cta: '¿Algo parecido para tu negocio?',
  },
  footer: { built: 'Diseñado y construido en Guadalajara con Astro.' },
  projects: [
    {
      slug: 'notex',
      title: 'notex.clinic',
      tag: 'Producto propio · SaaS de salud',
      card: 'Expediente clínico electrónico para médicos y clínicas en México: notas, recetas, agenda pública, portal del paciente e IA clínica. Lo diseñamos, lo construimos y lo operamos.',
      lede: 'Expediente clínico electrónico en la nube para médicos, consultorios y clínicas en México, diseñado para la NOM-004 y la NOM-024.',
      facts: [
        ['Tipo', 'Producto propio'],
        ['Industria', 'Salud'],
        ['Plataforma', 'Web + PWA'],
        ['Modelo', 'SaaS por suscripción'],
        ['Rol', 'Producto, diseño, desarrollo y operación'],
      ],
      url: 'https://notex.clinic',
      urlLabel: 'Visitar notex.clinic',
      metrics: [
        ['92', 'tablas en Postgres'],
        ['124', 'políticas de Row-Level Security'],
        ['41', 'triggers de inmutabilidad'],
        ['424', 'releases en 3 meses'],
        ['58', 'pruebas E2E en CI'],
        ['150', 'ADRs documentados'],
      ],
      challenge:
        'Los médicos en México siguen entre papel, hojas de cálculo y sistemas pensados para hospitales. Necesitan un expediente que cumpla la norma, que no se pueda alterar después de firmar y que no les robe tiempo de consulta.',
      solution:
        'Una sola plataforma para todo el consultorio: expediente por especialidad, recetas con membrete, agenda con reservas en línea, portal del paciente, recepción y métricas, con IA que redacta y el médico aprueba.',
      features: [
        {
          title: 'Expediente clínico',
          items: [
            'Notas firmadas inmutables: se corrigen con adendas, nunca se editan',
            'Secciones por especialidad que aparecen solo cuando aplican',
            'Plantillas para padecimientos comunes',
            'Interconsultas formales con otros especialistas',
            'Bitácora de quién abrió, exportó o cambió cada expediente',
          ],
        },
        {
          title: 'Herramientas por especialidad',
          items: [
            'Ginecología: control prenatal con semanas de gestación y fecha probable de parto',
            'Pediatría: percentiles OMS y dosis por peso confirmadas por el médico',
            'Medicina interna: control de crónicos contra las metas de cada paciente',
            'Psiquiatría: PHQ-9 y GAD-7 con puntaje e interpretación automática',
            'Geriatría, cirugía, ortopedia y alergología',
          ],
        },
        {
          title: 'Recetas y documentos',
          items: [
            'Recetas en PDF con folio, cédula y firma',
            'Membretes personalizables, varios por médico',
            'Resúmenes clínicos, cartas, consentimientos y solicitudes de estudio',
            'Diseño que imprime bien en blanco y negro',
          ],
        },
        {
          title: 'Agenda y reservas',
          items: [
            'Vista por semana, quincena o mes con colores por tipo de cita',
            'Página pública de reservas sin que el paciente cree cuenta',
            'Servicios con duración, anticipación y consultorio propios',
            'Confirmación y recordatorio por WhatsApp 24 horas antes',
            'App instalable con notificaciones push',
          ],
        },
        {
          title: 'Portal del paciente',
          items: [
            'Acceso sin contraseña con enlace seguro de un solo uso',
            'Confirmar citas y descargar recetas y documentos',
            'Firmar consentimientos informados desde el celular',
          ],
        },
        {
          title: 'IA clínica',
          items: [
            'Dictado de consulta que arma la nota SOAP en tiempo real',
            'Sugerencias de CIE-10 y diagnósticos diferenciales',
            'Lectura de laboratorios desde foto o PDF',
            'Migración de expedientes viejos con IA y revisión paciente por paciente',
            'El médico aprueba todo; el audio se procesa y se descarta',
          ],
        },
        {
          title: 'Equipo y recepción',
          items: [
            'Cuentas de recepción y enfermería sin acceso al contenido clínico',
            'Modo institución para compartir expedientes en una clínica',
            'Notas de venta y cobro desde recepción',
            'Métricas de consultas, ingresos, inasistencias y diagnósticos frecuentes',
          ],
        },
        {
          title: 'Seguridad y cumplimiento',
          items: [
            'NOM-004-SSA3-2012, NOM-024-SSA3-2012 y LFPDPPP',
            'Cifrado en tránsito y en reposo, archivos en S3 con acceso firmado temporal',
            '2FA con TOTP y verificación de cédula profesional',
            'Aislamiento de datos aplicado en la base de datos, no solo en la interfaz',
          ],
        },
      ],
      decisions: [
        'Multi-tenant con RLS y dos conexiones a Postgres: una privilegiada y otra restringida para los datos del médico.',
        'Las notas firmadas, los consentimientos y la bitácora no se pueden modificar ni a nivel del motor de base de datos.',
        'Middleware privado por omisión: una ruta nueva sin configurar queda cerrada.',
        'Los documentos firmados guardan una copia fija de sus datos, así un cambio posterior no altera lo que ya se firmó.',
      ],
      stack: ['Next.js 15', 'TypeScript', 'Postgres', 'Drizzle', 'Gemini', 'Stripe', 'AWS S3', 'Playwright', 'Web Push'],
      status: 'En producción',
    },
    {
      slug: 'sango',
      title: 'SANGO Tintorerías',
      tag: 'Cliente · App móvil + panel',
      card: 'App de pedidos para clientes, panel de administración y flujo de reparto para una cadena de tintorerías en Zapopan.',
      lede: 'Tintorería a domicilio de punta a punta: el cliente pide desde su celular, la sucursal mueve el pedido en un tablero y el chofer lo entrega en la puerta.',
      facts: [
        ['Cliente', 'Tintorerías Electrónicas SANGO'],
        ['Industria', 'Servicios · lavandería'],
        ['Plataforma', 'iOS, Android y web'],
        ['Estado', 'Por publicar'],
        ['Rol', 'Diseño de flujos, app, backend y panel'],
      ],
      challenge:
        'Los pedidos llegaban por teléfono y WhatsApp, sin un registro claro de qué prendas se recogían, cuándo se entregaban ni qué chofer las llevaba.',
      solution:
        'Una app que guía al cliente en cinco pasos y un panel que convierte cada pedido en una tarjeta que avanza de recolección a entrega, con chofer asignado y seguimiento en vivo.',
      features: [
        {
          title: 'App del cliente',
          items: [
            'Elige el servicio: tintorería, planchado, lavandería, blancos y hogar o teñido',
            'Agrega prendas con precio por pieza y total en vivo',
            'Elige fecha de recolección y de entrega',
            'Confirma dirección y paga con tarjeta o en efectivo',
            'Sigue el pedido en tiempo real con notificaciones',
            'Califica la entrega al recibir su ropa',
          ],
        },
        {
          title: 'Panel de administración',
          items: [
            'Tablero por etapa: recolectar, en sucursal, terminado y entregando',
            'Detalle de cada orden con prendas, fechas, dirección y forma de pago',
            'Asignación de chofer por orden',
            'Gestión de choferes y rutas',
          ],
        },
        {
          title: 'Reparto',
          items: [
            'El chofer ve sus recolecciones y entregas del día',
            'Cierra la orden en la puerta del cliente',
            'Recolección a domicilio y envío gratis en todos los pedidos',
          ],
        },
      ],
      stack: ['Ionic', 'Spring Boot', 'AWS', 'Push notifications'],
      status: 'Por publicar',
      media: 'sango',
    },
    {
      slug: 'sam-movil',
      title: 'SAM Móvil',
      tag: 'Cliente · Android',
      card: 'App Android para los socios de clubes deportivos y sociales en Guadalajara, construida desde cero: del backend a Google Play.',
      lede: 'La app de los socios: los servicios y beneficios del club en el bolsillo, y un canal directo entre el club y sus miembros.',
      facts: [
        ['Cliente', 'Grupo SAM'],
        ['Industria', 'Clubes deportivos y sociales'],
        ['Plataforma', 'Android'],
        ['Estado', 'En Google Play'],
        ['Rol', 'Desarrollo completo, backend y publicación'],
      ],
      url: 'https://play.google.com/store/apps/details?id=bucapps.samovil&hl=es_MX',
      urlLabel: 'Ver en Google Play',
      metrics: [
        ['1000+', 'descargas en Google Play'],
        ['300+', 'socios activos'],
      ],
      challenge:
        'Los clubes se comunicaban con sus socios por canales sueltos, y los servicios del club no tenían un lugar propio fuera de la recepción.',
      solution:
        'Una app nativa con acceso para socios y un backend compartido que atiende a varios clubes a la vez, cada uno con su información.',
      features: [
        {
          title: 'Para el socio',
          items: [
            'Acceso con su cuenta de socio',
            'Servicios y beneficios del club en un solo lugar',
            'Avisos y comunicación directa con el club',
          ],
        },
        {
          title: 'Para el club',
          items: [
            'Un mismo backend para varios clubes de Guadalajara',
            'Publicación y mantenimiento continuo en Google Play',
          ],
        },
        {
          title: 'Ingeniería',
          items: [
            'Android nativo en Java, construido desde cero',
            'API en Spring Boot desplegada en AWS EC2',
            'Autenticación con Firebase Auth',
          ],
        },
      ],
      stack: ['Android · Java', 'Spring Boot', 'Firebase Auth', 'AWS EC2'],
      status: 'En producción',
    },
    {
      slug: 'mariana-tyo',
      title: 'marianatyo.com',
      tag: 'Cliente · Sitio + chatbot de WhatsApp',
      card: 'Sitio profesional bilingüe para una traumatóloga y ortopedista en Guadalajara, con un chatbot conectado a WhatsApp Business.',
      lede: 'El sitio de la Dra. Mariana Fernández, especialista en traumatología, ortopedia y cirugía de columna, más un asistente que atiende a sus pacientes por WhatsApp.',
      facts: [
        ['Cliente', 'Dra. Mariana Fernández Jiménez'],
        ['Industria', 'Salud · ortopedia'],
        ['Plataforma', 'Web + WhatsApp Business'],
        ['Estado', 'En producción'],
        ['Rol', 'Diseño, desarrollo y automatización'],
      ],
      url: 'https://marianatyo.com/',
      urlLabel: 'Visitar marianatyo.com',
      challenge:
        'Una especialista con agenda llena necesitaba aparecer cuando un paciente busca su padecimiento en Google y responder por WhatsApp sin estar pegada al teléfono.',
      solution:
        'Un sitio por servicio, con contenido educativo y SEO local, y un chatbot en WhatsApp Business que contesta las preguntas frecuentes y lleva al paciente a agendar.',
      features: [
        {
          title: 'Sitio',
          items: [
            'Una página por servicio: columna, fracturas, lesiones deportivas, mínima invasión y viscosuplementación',
            'Blog educativo sobre padecimientos comunes',
            'Preguntas frecuentes, ubicación y horarios',
            'Versión completa en inglés',
            'SEO local para Guadalajara',
          ],
        },
        {
          title: 'WhatsApp',
          items: [
            'Chatbot conectado a la API de WhatsApp Business',
            'Responde en automático a los pacientes a cualquier hora',
            'Botones de WhatsApp en todo el sitio para agendar o preguntar',
          ],
        },
      ],
      stack: ['Web', 'SEO', 'WhatsApp Business API', 'Automatización'],
      status: 'En producción',
    },
    {
      slug: 'mariana-santana',
      title: 'marianaasantana.com',
      tag: 'Cliente · Portafolio creativo',
      card: 'Book digital de una directora de arte para cine, videoclips y publicidad: el trabajo va al frente y la interfaz se aparta.',
      lede: 'El portafolio de Mariana Santana, directora de arte. Cada set tiene una historia por contar, y el sitio está hecho para que se vea.',
      facts: [
        ['Cliente', 'Mariana Santana'],
        ['Industria', 'Cine y publicidad'],
        ['Plataforma', 'Web'],
        ['Estado', 'En producción'],
        ['Rol', 'Diseño y desarrollo'],
      ],
      url: 'https://marianaasantana.com/',
      urlLabel: 'Visitar marianaasantana.com',
      challenge:
        'Un portafolio de dirección de arte vive de imágenes grandes. La interfaz tenía que desaparecer sin que el sitio se sintiera vacío.',
      solution:
        'Un diseño editorial con categorías claras, mucho aire y tipografía sobria, para que cada proyecto se lea como una pieza.',
      features: [
        {
          title: 'Portafolio',
          items: [
            'Proyectos por categoría: videoclips, comerciales, narrativo y stage',
            'Galería por proyecto con las imágenes al frente',
            'Secciones de perfil y contacto, con enlace a Instagram',
          ],
        },
      ],
      stack: ['Web', 'Diseño editorial'],
      status: 'En producción',
    },
  ] as Project[],
};

export type Content = typeof es;

const en: Content = {
  lang: 'en',
  locale: 'en_US',
  path: '/en/',
  altPath: '/',
  altLabel: 'ES',
  altName: 'Español',
  projectBase: '/en/projects/',
  meta: {
    title: 'Buca Digital Works · Software studio in Guadalajara, Mexico',
    description:
      'Software studio in Guadalajara, Mexico. We design, build and run SaaS platforms, mobile apps, websites and WhatsApp chatbots. Makers of notex.clinic.',
  },
  nav: { services: 'Services', work: 'Work', process: 'Process', studio: 'Studio', contact: 'Contact', cta: 'Start a project' },
  skip: 'Skip to content',
  hero: {
    eyebrow: 'Software studio · Guadalajara, MX',
    line1: 'Software',
    line2: 'that ships.',
    lede: 'We design, build and run digital products for businesses in Mexico.',
    body: 'A small studio, on purpose. Few projects at a time, taken from idea to production by the same person who writes the code and answers when something breaks.',
    ctaWork: 'See the work',
    ctaContact: 'Start a project',
    status: [
      ['Live', '4 products'],
      ['Based in', 'Guadalajara · remote'],
      ['Founder', 'Gabriel Santana'],
    ],
  },
  services: {
    index: '01',
    title: 'Services',
    intro: 'Four things we do well, always backed by a real backend and built to last.',
    items: [
      {
        title: 'SaaS products',
        body: 'Multi-tenant platforms with accounts, roles, payments, notifications and regulatory compliance. The same engineering that runs notex.clinic.',
        examples: ['notex'],
      },
      {
        title: 'Mobile apps',
        body: 'Native Android or hybrid with Ionic. We design the flows, build the backend and ship to the store.',
        examples: ['sango', 'sam-movil'],
      },
      {
        title: 'Websites & automation',
        body: 'Fast websites with real SEO, in one or two languages, plus chatbots wired into WhatsApp Business that answer for you.',
        examples: ['mariana-tyo', 'mariana-santana'],
      },
      {
        title: 'Backend & integrations',
        body: 'Java and Spring Boot or TypeScript APIs, Stripe payments, AI, legacy data migration and deployment on AWS or GCP.',
        examples: ['notex', 'sam-movil'],
      },
    ],
  },
  work: {
    index: '02',
    title: 'Work',
    intro: 'Our own product and client work. Each one has a full case study with what it does and how it is built.',
    caseLink: 'Read the case study',
    caseShort: 'Case study',
    visit: 'Visit site',
    videoLabel: 'SANGO app demo: ordering, admin panel and delivery',
  },
  process: {
    index: '03',
    title: 'Process',
    intro: 'No surprises: you know what gets built, when, and what it costs before we start.',
    steps: [
      ['Understand', 'One call and a short document covering the problem, the users, the scope and the price.'],
      ['Design', 'Flows and screens before any code. You approve them and we refine them together.'],
      ['Build', 'Weekly progress on a staging environment you can use from the first sprint.'],
      ['Run', 'Deployment, monitoring, backups and improvements after launch. The project does not end on release day.'],
    ],
  },
  principles: {
    title: 'How we build',
    items: [
      ['Secure by default', 'Data isolation enforced in the database, routes closed until someone opens them, and 2FA where it matters.'],
      ['Tested end to end', 'E2E tests in CI that walk through real flows before every release.'],
      ['Documented decisions', 'Every technical decision is written down as an ADR, so the system explains itself.'],
      ['AI with a human in the loop', 'We use AI agents to build faster, and in-product AI always proposes and never decides alone.'],
    ],
  },
  studio: {
    index: '04',
    title: 'Studio',
    body: [
      'Buca is run by Gabriel Santana, a computer engineer from Universidad de Guadalajara and Senior Fullstack Developer with nine years building backends for banking, pharma and identity security.',
      'At Buca he brings that same rigor to products closer to home: medical practices, sports clubs, dry cleaners and creatives. You work directly with the person building it, with no layers in between.',
    ],
    link: 'Meet Gabriel',
  },
  contact: {
    index: '05',
    title: 'Tell us about your project.',
    body: 'An idea, a system that has hit its limits, or a process still done by hand? Write to us and we will reply within 48 hours.',
    copy: 'Copy',
    copied: 'Copied',
    email: 'Send an email',
  },
  case: {
    label: 'Case study',
    back: 'All work',
    challenge: 'The challenge',
    solution: 'The solution',
    features: 'What it does',
    decisions: 'Technical decisions',
    stack: 'Stack',
    gallery: 'Walkthrough',
    next: 'Next project',
    cta: 'Want something like this for your business?',
  },
  footer: { built: 'Designed and built in Guadalajara with Astro.' },
  projects: [
    {
      slug: 'notex',
      title: 'notex.clinic',
      tag: 'Own product · Health SaaS',
      card: 'Electronic medical records for doctors and clinics in Mexico: notes, prescriptions, public booking, patient portal and clinical AI. We designed it, built it and run it.',
      lede: 'Cloud electronic medical records for doctors, practices and clinics in Mexico, built for the NOM-004 and NOM-024 health-records standards.',
      facts: [
        ['Type', 'Own product'],
        ['Industry', 'Healthcare'],
        ['Platform', 'Web + PWA'],
        ['Model', 'Subscription SaaS'],
        ['Role', 'Product, design, engineering and operations'],
      ],
      url: 'https://notex.clinic',
      urlLabel: 'Visit notex.clinic',
      metrics: [
        ['92', 'Postgres tables'],
        ['124', 'row-level security policies'],
        ['41', 'immutability triggers'],
        ['424', 'releases in 3 months'],
        ['58', 'E2E tests in CI'],
        ['150', 'documented ADRs'],
      ],
      challenge:
        'Doctors in Mexico still juggle paper, spreadsheets and systems built for hospitals. They need records that meet the standard, cannot be altered after signing, and do not eat into consultation time.',
      solution:
        'One platform for the whole practice: specialty-aware records, branded prescriptions, online booking, a patient portal, front desk and metrics, with AI that drafts and the doctor approves.',
      features: [
        {
          title: 'Clinical records',
          items: [
            'Immutable signed notes: corrected with addenda, never edited',
            'Specialty sections that appear only when they apply',
            'Templates for common conditions',
            'Formal referrals to other specialists',
            'Audit log of who opened, exported or changed each record',
          ],
        },
        {
          title: 'Specialty tools',
          items: [
            'Gynecology: prenatal tracking with gestational age and due date',
            'Pediatrics: WHO percentiles and weight-based dosing the doctor confirms',
            'Internal medicine: chronic disease control against each patient’s targets',
            'Psychiatry: PHQ-9 and GAD-7 scored and interpreted automatically',
            'Geriatrics, surgery, orthopedics and allergology',
          ],
        },
        {
          title: 'Prescriptions & documents',
          items: [
            'PDF prescriptions with folio, license number and signature',
            'Custom letterheads, several per doctor',
            'Clinical summaries, letters, consent forms and lab requests',
            'Layouts that print cleanly in black and white',
          ],
        },
        {
          title: 'Scheduling & booking',
          items: [
            'Week, fortnight or month views, color-coded by appointment type',
            'Public booking page, no patient account needed',
            'Services with their own duration, lead time and room',
            'WhatsApp confirmation and a reminder 24 hours before',
            'Installable app with push notifications',
          ],
        },
        {
          title: 'Patient portal',
          items: [
            'Passwordless access through a secure single-use link',
            'Confirm appointments and download prescriptions and documents',
            'Sign informed consent from a phone',
          ],
        },
        {
          title: 'Clinical AI',
          items: [
            'Consultation dictation that builds a SOAP note in real time',
            'ICD-10 suggestions and differential diagnoses',
            'Lab results read from a photo or PDF',
            'AI-assisted migration of old records, reviewed patient by patient',
            'The doctor approves everything; audio is processed and discarded',
          ],
        },
        {
          title: 'Team & front desk',
          items: [
            'Reception and nursing accounts with no access to clinical content',
            'Institution mode to share records inside a clinic',
            'Sales notes and payments from the front desk',
            'Metrics for visits, revenue, no-shows and top diagnoses',
          ],
        },
        {
          title: 'Security & compliance',
          items: [
            'NOM-004-SSA3-2012, NOM-024-SSA3-2012 and Mexico’s LFPDPPP',
            'Encryption in transit and at rest, files on S3 with temporary signed access',
            'TOTP 2FA and professional license verification',
            'Data isolation enforced in the database, not just the UI',
          ],
        },
      ],
      decisions: [
        'Multi-tenant with RLS and two Postgres connections: one privileged, one restricted to the doctor’s own data.',
        'Signed notes, consent forms and the audit log cannot be modified, enforced by the database engine itself.',
        'Private-by-default middleware: a new route that nobody configured stays closed.',
        'Signed documents snapshot their data, so a later change never alters what was already signed.',
      ],
      stack: ['Next.js 15', 'TypeScript', 'Postgres', 'Drizzle', 'Gemini', 'Stripe', 'AWS S3', 'Playwright', 'Web Push'],
      status: 'Live',
    },
    {
      slug: 'sango',
      title: 'SANGO Dry Cleaners',
      tag: 'Client · Mobile app + admin',
      card: 'Customer ordering app, admin panel and delivery flow for a dry-cleaning chain in Zapopan.',
      lede: 'Door-to-door dry cleaning end to end: customers order from their phone, the store moves each order on a board, and the driver delivers it at the door.',
      facts: [
        ['Client', 'Tintorerías Electrónicas SANGO'],
        ['Industry', 'Services · laundry'],
        ['Platform', 'iOS, Android and web'],
        ['Status', 'Launching soon'],
        ['Role', 'Flow design, app, backend and admin panel'],
      ],
      challenge:
        'Orders came in by phone and WhatsApp, with no clear record of which garments were picked up, when they were due, or which driver had them.',
      solution:
        'An app that walks customers through five steps and a panel that turns every order into a card moving from pickup to delivery, with an assigned driver and live tracking.',
      features: [
        {
          title: 'Customer app',
          items: [
            'Pick a service: dry cleaning, ironing, laundry, home linens or dyeing',
            'Add garments with per-item pricing and a live total',
            'Choose pickup and delivery dates',
            'Confirm the address and pay by card or cash',
            'Track the order in real time with notifications',
            'Rate the delivery on arrival',
          ],
        },
        {
          title: 'Admin panel',
          items: [
            'Board by stage: to pick up, in store, done and out for delivery',
            'Order detail with garments, dates, address and payment method',
            'Driver assignment per order',
            'Driver and route management',
          ],
        },
        {
          title: 'Delivery',
          items: [
            'Drivers see the day’s pickups and drop-offs',
            'They close the order at the customer’s door',
            'Home pickup and free delivery on every order',
          ],
        },
      ],
      stack: ['Ionic', 'Spring Boot', 'AWS', 'Push notifications'],
      status: 'Launching soon',
      media: 'sango',
    },
    {
      slug: 'sam-movil',
      title: 'SAM Móvil',
      tag: 'Client · Android',
      card: 'Android app for members of sports and social clubs in Guadalajara, built from scratch: from the backend to Google Play.',
      lede: 'The members’ app: the club’s services and benefits in your pocket, and a direct line between the club and its members.',
      facts: [
        ['Client', 'Grupo SAM'],
        ['Industry', 'Sports & social clubs'],
        ['Platform', 'Android'],
        ['Status', 'On Google Play'],
        ['Role', 'Full build, backend and release'],
      ],
      url: 'https://play.google.com/store/apps/details?id=bucapps.samovil&hl=en',
      urlLabel: 'View on Google Play',
      metrics: [
        ['1000+', 'Google Play downloads'],
        ['300+', 'active members'],
      ],
      challenge:
        'Clubs reached their members through scattered channels, and club services had no home outside the front desk.',
      solution:
        'A native app with member sign-in and a shared backend that serves several clubs at once, each with its own information.',
      features: [
        {
          title: 'For members',
          items: [
            'Sign in with their member account',
            'Club services and benefits in one place',
            'Announcements and a direct line to the club',
          ],
        },
        {
          title: 'For the club',
          items: [
            'One backend serving several Guadalajara clubs',
            'Ongoing releases and maintenance on Google Play',
          ],
        },
        {
          title: 'Engineering',
          items: [
            'Native Android in Java, built from scratch',
            'Spring Boot API deployed on AWS EC2',
            'Authentication with Firebase Auth',
          ],
        },
      ],
      stack: ['Android · Java', 'Spring Boot', 'Firebase Auth', 'AWS EC2'],
      status: 'Live',
    },
    {
      slug: 'mariana-tyo',
      title: 'marianatyo.com',
      tag: 'Client · Website + WhatsApp chatbot',
      card: 'Bilingual professional website for an orthopedic surgeon in Guadalajara, with a chatbot wired into WhatsApp Business.',
      lede: 'The website of Dr. Mariana Fernández, specialist in trauma, orthopedics and spine surgery, plus an assistant that answers her patients on WhatsApp.',
      facts: [
        ['Client', 'Dr. Mariana Fernández Jiménez'],
        ['Industry', 'Healthcare · orthopedics'],
        ['Platform', 'Web + WhatsApp Business'],
        ['Status', 'Live'],
        ['Role', 'Design, development and automation'],
      ],
      url: 'https://marianatyo.com/',
      urlLabel: 'Visit marianatyo.com',
      challenge:
        'A specialist with a full schedule needed to show up when patients search for their condition on Google, and to answer WhatsApp without being glued to the phone.',
      solution:
        'One page per service, with educational content and local SEO, plus a WhatsApp Business chatbot that answers common questions and points patients to booking.',
      features: [
        {
          title: 'Website',
          items: [
            'One page per service: spine, fractures, sports injuries, minimally invasive surgery and viscosupplementation',
            'Educational blog on common conditions',
            'FAQ, location and office hours',
            'Full English version',
            'Local SEO for Guadalajara',
          ],
        },
        {
          title: 'WhatsApp',
          items: [
            'Chatbot connected to the WhatsApp Business API',
            'Answers patients automatically at any hour',
            'WhatsApp buttons across the site to book or ask',
          ],
        },
      ],
      stack: ['Web', 'SEO', 'WhatsApp Business API', 'Automation'],
      status: 'Live',
    },
    {
      slug: 'mariana-santana',
      title: 'marianaasantana.com',
      tag: 'Client · Creative portfolio',
      card: 'Digital book for an art director working in film, music videos and advertising: the work leads and the interface steps aside.',
      lede: 'The portfolio of Mariana Santana, art director. Every set has a story to tell, and the site is built to show it.',
      facts: [
        ['Client', 'Mariana Santana'],
        ['Industry', 'Film & advertising'],
        ['Platform', 'Web'],
        ['Status', 'Live'],
        ['Role', 'Design and development'],
      ],
      url: 'https://marianaasantana.com/',
      urlLabel: 'Visit marianaasantana.com',
      challenge:
        'An art direction portfolio lives on large images. The interface had to disappear without the site feeling empty.',
      solution:
        'An editorial layout with clear categories, generous space and restrained type, so each project reads as a piece of its own.',
      features: [
        {
          title: 'Portfolio',
          items: [
            'Projects by category: music videos, commercials, narrative and stage',
            'Per-project galleries with the images up front',
            'About and contact sections, linked to Instagram',
          ],
        },
      ],
      stack: ['Web', 'Editorial design'],
      status: 'Live',
    },
  ],
};

export const content: Record<Lang, Content> = { es, en };

export const projectPath = (t: Content, slug: string) => `${t.projectBase}${slug}/`;
export const altProjectPath = (t: Content, slug: string) => `${content[t.lang === 'es' ? 'en' : 'es'].projectBase}${slug}/`;
