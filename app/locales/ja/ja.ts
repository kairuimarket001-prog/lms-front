import components from './components'
import views from './views'

export default {
    header: {
        title: 'ストックAI知習塾',
        brand: 'Stock AI Dojo',
        contact: 'お問い合わせ',
        about: '会社概要',
        pricing: '料金プラン',
        courses: 'コース',
        blog: 'ブログ',
        login: 'ログイン',
        home: 'ホーム',
        register: '無料登録',
        dashboard: 'ダッシュボード'
    },
    footer: {
        brand: {
            name: 'ストックAI知習塾',
            tagline: 'Stock AI Dojo - 投資の未来を学ぶ',
            description: 'AI技術を活用した次世代の株式投資教育プラットフォーム。あなたの投資知識を飛躍的に向上させます。'
        },
        product: {
            title: 'サービス',
            courses: 'コース一覧',
            pricing: '料金プラン',
            aiTutor: 'AIチューター',
            certifications: '試験・認定'
        },
        company: {
            title: '会社情報',
            about: '会社概要',
            careers: '採用情報',
            news: 'ニュース',
            contact: 'お問い合わせ'
        },
        resources: {
            title: 'リソース',
            blog: 'ブログ',
            help: 'ヘルプセンター',
            tutorials: 'チュートリアル',
            apiDocs: 'API文書'
        },
        legal: {
            title: '法的情報',
            terms: '利用規約',
            privacy: 'プライバシーポリシー',
            commercialLaw: '特定商取引法',
            disclaimer: '免責事項'
        },
        contact: {
            title: 'お問い合わせ',
            email: 'support@stockaidojo.jp',
            phone: '03-1234-5678',
            address: '東京都渋谷区神南1-2-3'
        },
        social: {
            title: 'フォローする',
            twitter: 'Twitter',
            facebook: 'Facebook',
            linkedin: 'LinkedIn',
            youtube: 'YouTube'
        },
        newsletter: {
            title: 'ニュースレター',
            description: '最新情報とお得な情報をお届けします。',
            placeholder: 'メールアドレスを入力',
            subscribe: '購読',
            disclaimer: 'メールアドレスを第三者と共有することはありません。'
        },
        bottom: {
            copyright: '© 2024 ストックAI知習塾（Stock AI Dojo）. All rights reserved.',
            madeWith: 'AI技術で構築',
            disclaimer: '投資にはリスクが伴います。投資判断は自己責任で行ってください。'
        },
        quickLinks: 'クイックリンク',
        store: 'ストア',
        plans: 'プラン'
    },
    ...views,
    ...components
} as const
