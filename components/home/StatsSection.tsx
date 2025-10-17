import { Award, BookOpen, TrendingUp, Users } from 'lucide-react'

import { getScopedI18n } from '@/app/locales/server'

export default async function StatsSection() {
    const t = await getScopedI18n('home.hero.stats')

    const stats = [
        { icon: Users, value: '10,000+', label: t('students'), color: 'text-blue-600' },
        { icon: BookOpen, value: '50+', label: t('courses'), color: 'text-green-600' },
        { icon: TrendingUp, value: '98%', label: t('satisfaction'), color: 'text-purple-600' },
        { icon: Award, value: '5,000+', label: t('certifications'), color: 'text-orange-600' }
    ]

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4">
                                    <Icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
