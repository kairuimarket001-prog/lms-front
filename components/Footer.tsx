import Link from 'next/link'
import { Facebook, Linkedin, Mail, MapPin, Phone, TrendingUp, Twitter, Youtube } from 'lucide-react'

import { getScopedI18n } from '@/app/locales/server'

import { Button } from './ui/button'
import { Input } from './ui/input'

export default async function Footer() {
    const t = await getScopedI18n('footer')
    return (
        <footer className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {t('brand.name')}
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {t('brand.tagline')}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {t('brand.description')}
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Twitter className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Facebook className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                <Youtube className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                            {t('product.title')}
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/courses" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('product.courses')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('product.pricing')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/ai-tutor" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('product.aiTutor')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/certifications" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('product.certifications')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                            {t('company.title')}
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('company.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('company.careers')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('company.news')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('company.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                            {t('legal.title')}
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('legal.terms')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('legal.privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/commercial-law" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('legal.commercialLaw')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {t('legal.disclaimer')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
                    <div className="max-w-md">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            {t('newsletter.title')}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {t('newsletter.description')}
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder={t('newsletter.placeholder')}
                                className="flex-1"
                            />
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                {t('newsletter.subscribe')}
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                            {t('newsletter.disclaimer')}
                        </p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-500">Email</p>
                                <a href={`mailto:${t('contact.email')}`} className="text-sm text-gray-900 dark:text-white hover:text-blue-600">
                                    {t('contact.email')}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-500">Phone</p>
                                <a href={`tel:${t('contact.phone')}`} className="text-sm text-gray-900 dark:text-white hover:text-green-600">
                                    {t('contact.phone')}
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-500">Address</p>
                                <p className="text-sm text-gray-900 dark:text-white">
                                    {t('contact.address')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {t('bottom.copyright')}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                {t('bottom.madeWith')}
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                                {t('bottom.disclaimer')}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                stockaidojo.jp
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
