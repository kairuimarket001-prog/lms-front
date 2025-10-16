# Stock AI Dojo (ストックAI知習塾) - 完整迁移指南

## 概述
本文档提供将 LMS 平台改造为"ストックAI知習塾"（Stock AI Dojo）AI 股票教育平台的完整步骤。

## 已完成的修改

### 1. ✅ 国际化配置
- **文件**: `middleware.ts`
- **修改**: 已添加日语支持，默认语言设置为日语

### 2. ✅ 日语翻译文件
已创建以下文件：
- `app/locales/ja/ja.ts` - 主翻译文件
- `app/locales/ja/components.ts` - 组件翻译
- `app/locales/ja/views.ts` - 视图翻译

### 3. ✅ 英语翻译更新
- **文件**: `app/locales/en/en.ts` 和 `app/locales/en/views.ts`
- **更改**: 主题从通用 LMS 改为股票投资教育

### 4. ✅ 西班牙语翻译更新
- **文件**: `app/locales/es/es.ts`
- **更改**: 更新为股票教育主题

### 5. ✅ Footer 组件
- **文件**: `components/Footer.tsx`
- **完成**: 全新的专业页脚，包含：
  - 品牌信息（Stock AI Dojo / ストックAI知習塾）
  - 产品链接
  - 公司信息
  - 资源链接
  - 法律信息
  - 联系方式（support@stockaidojo.jp）
  - 社交媒体链接
  - 新闻订阅
  - 投资风险免责声明

### 6. ✅ Header 组件
- **文件**: `components/home/Header.tsx`
- **完成**: 更新为股票教育主题，包含新 logo 和导航

### 7. ✅ 首页结构
- **文件**: `app/[locale]/page.tsx`
- **完成**: 更新为新的组件结构

---

## 需要手动完成的修改

### 步骤 1: 更新 HeroSection 组件

**文件**: `components/home/HeroSection.tsx`

完全替换文件内容为：

```typescript
import { getScopedI18n } from '@/app/locales/server'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Brain, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default async function HeroSection() {
    const t = await getScopedI18n('home.hero')

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-32 pb-20">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute top-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-8">
                        <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
                            <Brain className="w-4 h-4" />
                            {t('badge')}
                        </Badge>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {t('title')}
                                </span>
                            </h1>
                            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                                {t('subtitle')}
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {t('description')}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600">
                                <Link href="/auth/signup">
                                    {t('primaryCTA')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                                <Link href="/store">
                                    {t('secondaryCTA')}
                                </Link>
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    10,000+ {t('stats.students')}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-blue-600" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    98% {t('stats.satisfaction')}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Brain className="w-5 h-5 text-purple-600" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    AI Personal Tutor
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right side mockup */}
                    <div className="relative lg:h-[600px] hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl transform rotate-3" />
                        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 space-y-6">
                            <div className="space-y-4">
                                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        📊 今日の株価動向を教えてください
                                    </p>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">
                                        🤖 本日の日経平均株価は...
                                    </p>
                                    <div className="mt-2 bg-white dark:bg-gray-700 rounded-lg p-3">
                                        <div className="flex items-center justify-between text-xs">
                                            <span>日経225</span>
                                            <span className="text-green-600 font-semibold">+2.3%</span>
                                        </div>
                                        <div className="mt-1 h-16 flex items-end gap-1">
                                            {[40, 55, 48, 65, 58, 70, 75].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t"
                                                    style={{ height: `${height}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                                        <Brain className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-xs font-semibold">AI Tutor</p>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-4">
                                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                                        <BarChart3 className="w-6 h-6 text-white" />
                                    </div>
                                    <p className="text-xs font-semibold">Market Analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
```

继续创建完整文档...
