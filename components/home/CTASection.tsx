import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function CTASection() {
    return (
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    今日から投資教育を始めましょう
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    AIパーソナルチューターと共に、あなたの投資スキルを次のレベルへ
                </p>
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                    <Link href="/auth/signup">
                        無料で始める
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <p className="text-sm text-blue-100 mt-4">
                    クレジットカード不要
                </p>
            </div>
        </section>
    )
}
