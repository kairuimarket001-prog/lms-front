import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

import { getScopedI18n } from '@/app/locales/server'

import AuthButton from '../AuthButton'
import { DarkThemeToggle } from '../DarkThemeToggle'

const Header = async () => {
    const t = await getScopedI18n('header')

    return (
        <nav className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
            <div className="hidden lg:block w-full">
                <div className="w-full flex relative justify-between px-4 py-2 rounded-full transition duration-200 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-gray-800">

                    <div className="flex flex-row gap-2 items-center">
                        <Link
                            href="/"
                            className="font-normal flex space-x-2 items-center text-sm mr-4 px-2 py-1 relative z-20"
                        >
                            <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900 dark:text-white text-base">
                                    Stock AI Dojo
                                </span>
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                    ストックAI知習塾
                                </span>
                            </div>
                        </Link>
                        <div className="flex items-center gap-1.5 ml-4">
                            <Link
                                className={'flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-200 font-medium transition-colors'}
                                href="/courses"
                            >{t('courses')}</Link>
                            <Link
                                className={'flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-200 font-medium transition-colors'}
                                href="/pricing"
                            >{t('pricing')}</Link>
                            <Link
                                className={'flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-200 font-medium transition-colors'}
                                href="/about"
                            >{t('about')}</Link>
                            <Link
                                className={'flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-200 font-medium transition-colors'}
                                href="/contact"
                            >{t('contact')}</Link>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <DarkThemeToggle />
                        <AuthButton />
                    </div>
                </div>
            </div>

            <div className="flex h-full w-full items-center lg:hidden">
                <div className="flex justify-between items-center w-full rounded-full px-2.5 py-1.5 transition duration-200 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg border border-gray-200 dark:border-gray-800">
                    <Link
                        href="/"
                        className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                    >
                        <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">
                            Stock AI Dojo
                        </span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <DarkThemeToggle />
                        <AuthButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
