import components from './components'
import views from './views'

export default {
    header: {
        title: 'Stock AI Dojo',
        brand: 'ストックAI知習塾',
        contact: 'Contact',
        about: 'About',
        pricing: 'Pricing',
        courses: 'Courses',
        blog: 'Blog',
        login: 'Login',
        home: 'Home',
        register: 'Sign Up',
        dashboard: 'Dashboard'
    },
    footer: {
        brand: {
            name: 'Stock AI Dojo',
            tagline: 'ストックAI知習塾 - Learn the Future of Investing',
            description: 'Next-generation stock investment education platform powered by AI. Dramatically improve your investment knowledge.'
        },
        product: {
            title: 'Product',
            courses: 'Courses',
            pricing: 'Pricing',
            aiTutor: 'AI Tutor',
            certifications: 'Certifications'
        },
        company: {
            title: 'Company',
            about: 'About Us',
            careers: 'Careers',
            news: 'News',
            contact: 'Contact'
        },
        resources: {
            title: 'Resources',
            blog: 'Blog',
            help: 'Help Center',
            tutorials: 'Tutorials',
            apiDocs: 'API Docs'
        },
        legal: {
            title: 'Legal',
            terms: 'Terms of Service',
            privacy: 'Privacy Policy',
            commercialLaw: 'Commercial Law',
            disclaimer: 'Disclaimer'
        },
        contact: {
            title: 'Contact',
            email: 'support@stockaidojo.jp',
            phone: '+81-3-1234-5678',
            address: 'Tokyo, Japan'
        },
        social: {
            title: 'Follow Us',
            twitter: 'Twitter',
            facebook: 'Facebook',
            linkedin: 'LinkedIn',
            youtube: 'YouTube'
        },
        newsletter: {
            title: 'Newsletter',
            description: 'Subscribe for the latest updates and offers.',
            placeholder: 'Enter your email',
            subscribe: 'Subscribe',
            disclaimer: 'We will not share your email with anyone else.'
        },
        bottom: {
            copyright: '© 2024 Stock AI Dojo (ストックAI知習塾). All rights reserved.',
            madeWith: 'Built with AI technology',
            disclaimer: 'Investment involves risks. Please make investment decisions at your own discretion.'
        },
        quickLinks: 'Quick Links',
        store: 'Store',
        plans: 'Plans'
    },
    ...views,
    ...components
} as const
