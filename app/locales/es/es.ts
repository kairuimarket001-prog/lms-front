import components from './components'
import views from './views'
export default {
    header: {
        title: 'Stock AI Dojo',
        brand: 'ストックAI知習塾',
        contact: 'Contacto',
        about: 'Acerca de',
        pricing: 'Precios',
        courses: 'Cursos',
        blog: 'Blog',
        login: 'Iniciar sesión',
        home: 'Inicio',
        register: 'Registrarse',
        dashboard: 'Panel'
    },
    footer: {
        brand: {
            name: 'Stock AI Dojo',
            tagline: 'ストックAI知習塾 - Aprende el Futuro de la Inversión',
            description: 'Plataforma de educación en inversión de próxima generación impulsada por IA. Mejora drásticamente tu conocimiento de inversión.'
        },
        product: {
            title: 'Producto',
            courses: 'Cursos',
            pricing: 'Precios',
            aiTutor: 'Tutor IA',
            certifications: 'Certificaciones'
        },
        company: {
            title: 'Empresa',
            about: 'Acerca de',
            careers: 'Carreras',
            news: 'Noticias',
            contact: 'Contacto'
        },
        resources: {
            title: 'Recursos',
            blog: 'Blog',
            help: 'Centro de Ayuda',
            tutorials: 'Tutoriales',
            apiDocs: 'Documentación API'
        },
        legal: {
            title: 'Legal',
            terms: 'Términos de Servicio',
            privacy: 'Política de Privacidad',
            commercialLaw: 'Ley Comercial',
            disclaimer: 'Descargo de Responsabilidad'
        },
        contact: {
            title: 'Contacto',
            email: 'support@stockaidojo.jp',
            phone: '+81-3-1234-5678',
            address: 'Tokio, Japón'
        },
        social: {
            title: 'Síguenos',
            twitter: 'Twitter',
            facebook: 'Facebook',
            linkedin: 'LinkedIn',
            youtube: 'YouTube'
        },
        newsletter: {
            title: 'Boletín',
            description: 'Suscríbete para recibir las últimas actualizaciones y ofertas.',
            placeholder: 'Ingresa tu correo',
            subscribe: 'Suscribirse',
            disclaimer: 'No compartiremos tu correo electrónico con nadie más.'
        },
        bottom: {
            copyright: '© 2024 Stock AI Dojo (ストックAI知習塾). Todos los derechos reservados.',
            madeWith: 'Construido con tecnología IA',
            disclaimer: 'La inversión implica riesgos. Por favor, tome decisiones de inversión bajo su propia discreción.'
        },
        quickLinks: 'Enlaces',
        store: 'Tienda',
        plans: 'Planes'
    },
    ...views,
    ...components
} as const
