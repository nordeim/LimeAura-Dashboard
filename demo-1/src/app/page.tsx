'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-bg-main via-bg-main to-surface-soft overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      {/* Navigation */}
      <nav className="relative z-40 border-b border-border-subtle/30 bg-surface-primary/40 backdrop-blur-md sticky top-0">
        <div className="max-w-[1440px] mx-auto px-page py-lg flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <div className="h-8 w-8 rounded-pill bg-gradient-to-br from-accent-primary to-accent-primary-hover flex items-center justify-center shadow-accent-soft">
              <Sparkles className="h-5 w-5 text-text-on-accent" />
            </div>
            <span className="text-heading-3 text-text-primary font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">LimeAura</span>
          </div>
          <div className="flex items-center gap-md">
            <Link href="/examples/dashboard">
              <Button variant="primary" size="default">
                Dashboard
                <ArrowRight className="ml-sm h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-[80px] md:py-[120px] lg:py-[140px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-page relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxxl items-center">
            {/* Hero Content */}
            <div className="space-y-lg">
              <div className="inline-flex items-center gap-sm">
                <div className="h-2 w-2 rounded-full bg-accent-primary animate-pulse"></div>
                <span className="text-label font-medium text-accent-primary uppercase tracking-widest">Welcome to LimeAura</span>
              </div>
              
              <div className="space-y-md">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text-primary">
                  Design System for the
                  <br />
                  <span className="bg-gradient-to-r from-accent-primary via-accent-primary to-accent-secondary bg-clip-text text-transparent">
                    Modern Web
                  </span>
                </h1>
                <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                  A comprehensive design system built with Next.js 14, TypeScript, and Tailwind CSS. Create stunning, accessible, and performant interfaces with beautifully crafted components and design tokens.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-md pt-lg">
                <Link href="/examples/dashboard" className="group">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Explore Components
                      <ArrowRight className="ml-sm h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-xxxl pt-lg border-t border-border-subtle/50">
                <div>
                  <p className="text-heading-2 text-text-primary font-bold">15+</p>
                  <p className="text-body text-text-secondary">Components</p>
                </div>
                <div>
                  <p className="text-heading-2 text-text-primary font-bold">100%</p>
                  <p className="text-body text-text-secondary">Type Safe</p>
                </div>
                <div>
                  <p className="text-heading-2 text-text-primary font-bold">∞</p>
                  <p className="text-body text-text-secondary">Customizable</p>
                </div>
              </div>
            </div>

            {/* Hero Visual - Animated Component Showcase */}
            <div className="relative h-[500px] hidden lg:flex items-center justify-center">
              {/* Background gradient card */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-accent-primary/5 rounded-3xl blur-2xl"></div>
              
              {/* Animated cards floating */}
              <div className="relative w-full h-full">
                {/* Card 1 - Top Left */}
                <div className="absolute top-0 left-0 w-48 h-32 bg-gradient-to-br from-accent-primary to-accent-primary-soft rounded-2xl shadow-floating p-lg" style={{animation: 'float 6s ease-in-out infinite'}}>
                  <div className="flex items-center gap-sm mb-md">
                    <div className="h-3 w-3 rounded-full bg-accent-primary-hover"></div>
                    <div className="h-3 w-12 rounded-full bg-accent-primary-hover/50"></div>
                  </div>
                  <div className="space-y-xs">
                    <div className="h-2 w-full rounded bg-accent-primary-hover/40"></div>
                    <div className="h-2 w-2/3 rounded bg-accent-primary-hover/40"></div>
                  </div>
                </div>

                {/* Card 2 - Bottom Right */}
                <div className="absolute bottom-0 right-0 w-48 h-32 bg-gradient-to-br from-accent-secondary to-accent-secondary/70 rounded-2xl shadow-floating p-lg" style={{animation: 'float 8s ease-in-out infinite', animationDirection: 'reverse'}}>
                  <div className="flex items-center gap-sm mb-md">
                    <Zap className="h-5 w-5 text-text-on-accent" />
                    <span className="text-label font-semibold text-text-on-accent">Fast</span>
                  </div>
                  <p className="text-body text-text-on-accent/80">Lightning quick performance</p>
                </div>

                {/* Card 3 - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-40 bg-gradient-to-br from-surface-primary to-surface-soft rounded-2xl shadow-card p-lg border border-border-subtle/50">
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-md">
                    <Sparkles className="h-12 w-12 text-accent-primary" />
                    <h3 className="text-heading-3 text-text-primary font-bold">Design System</h3>
                    <p className="text-label text-text-secondary">Beautiful components</p>
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-[60px] md:py-[80px] bg-surface-primary">
        <div className="max-w-[1440px] mx-auto px-page">
          <div className="text-center mb-xxxl">
            <h2 className="text-heading-1 text-text-primary mb-md">
              Built for Modern Teams
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need to build beautiful, accessible, and performant applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xxl">
            {/* Feature 1 */}
            <Card interactive>
              <CardContent>
                <div className="flex items-start gap-md mb-lg">
                  <div className="h-10 w-10 rounded-pill bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-heading-3 text-text-primary mb-sm">Performance First</h3>
                    <p className="text-body text-text-secondary">
                      Optimized components with zero runtime overhead. CSS-in-JS utilities and Tailwind CSS for lightning-fast builds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card interactive>
              <CardContent>
                <div className="flex items-start gap-md mb-lg">
                  <div className="h-10 w-10 rounded-pill bg-accent-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-accent-secondary" />
                  </div>
                  <div>
                    <h3 className="text-heading-3 text-text-primary mb-sm">Accessible</h3>
                    <p className="text-body text-text-secondary">
                      Built with accessibility in mind. ARIA labels, keyboard navigation, and screen reader support included.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card interactive>
              <CardContent>
                <div className="flex items-start gap-md mb-lg">
                  <div className="h-10 w-10 rounded-pill bg-accent-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-accent-yellow" />
                  </div>
                  <div>
                    <h3 className="text-heading-3 text-text-primary mb-sm">Type Safe</h3>
                    <p className="text-body text-text-secondary">
                      Full TypeScript support with strict type checking. Intellisense and type safety across the entire codebase.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Tokens Showcase */}
      <section className="relative py-xxxl overflow-hidden bg-gradient-to-b from-surface-soft/50 to-surface-primary/30">
        <div className="max-w-[1440px] mx-auto px-page">
          <div className="text-center mb-xxxl">
            <p className="text-label text-accent-primary uppercase tracking-widest mb-md">Design Foundation</p>
            <h2 className="text-heading-1 text-text-primary mb-md">
              Thoughtfully Crafted
              <br />
              <span className="text-text-secondary">Color Tokens</span>
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Our vibrant color palette is designed to work harmoniously across all components and use cases.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-lg">
            {/* Lime Token */}
            <div className="group">
              <div className="relative h-32 rounded-xl bg-gradient-to-br from-accent-primary to-accent-primary-soft shadow-card group-hover:shadow-floating transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="mt-md text-center">
                <p className="text-label font-semibold text-text-primary">Lime</p>
                <p className="text-xxs text-text-tertiary mt-xs">#D6F25F</p>
              </div>
            </div>

            {/* Primary Token */}
            <div className="group">
              <div className="relative h-32 rounded-xl bg-gradient-to-br from-accent-purple to-accent-purple-dark shadow-card group-hover:shadow-floating transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="mt-md text-center">
                <p className="text-label font-semibold text-text-primary">Purple</p>
                <p className="text-xxs text-text-tertiary mt-xs">#7B3EFF</p>
              </div>
            </div>

            {/* Secondary Token */}
            <div className="group">
              <div className="relative h-32 rounded-xl bg-gradient-to-br from-accent-secondary to-accent-secondary/70 shadow-card group-hover:shadow-floating transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="mt-md text-center">
                <p className="text-label font-semibold text-text-primary">Teal</p>
                <p className="text-xxs text-text-tertiary mt-xs">#00C6AE</p>
              </div>
            </div>

            {/* Yellow Token */}
            <div className="group">
              <div className="relative h-32 rounded-xl bg-gradient-to-br from-accent-yellow to-accent-yellow-soft shadow-card group-hover:shadow-floating transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="mt-md text-center">
                <p className="text-label font-semibold text-text-primary">Yellow</p>
                <p className="text-xxs text-text-tertiary mt-xs">#FFB020</p>
              </div>
            </div>

            {/* Success Token */}
            <div className="group">
              <div className="relative h-32 rounded-xl bg-gradient-to-br from-semantic-success to-semantic-success-soft shadow-card group-hover:shadow-floating transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="mt-md text-center">
                <p className="text-label font-semibold text-text-primary">Success</p>
                <p className="text-xxs text-text-tertiary mt-xs">#00B578</p>
              </div>
            </div>

            {/* Danger Token */}
            <div className="group">
              <div className="relative h-32 rounded-xl bg-gradient-to-br from-semantic-danger to-semantic-danger-soft shadow-card group-hover:shadow-floating transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="mt-md text-center">
                <p className="text-label font-semibold text-text-primary">Danger</p>
                <p className="text-xxs text-text-tertiary mt-xs">#FF4D4F</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="py-[60px] md:py-[80px]">
        <div className="max-w-[1440px] mx-auto px-page">
          <div className="text-center mb-xxxl">
            <h2 className="text-heading-1 text-text-primary mb-md">
              Comprehensive Component Library
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              15+ production-ready components with consistent design and behavior
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
            {[
              { name: 'Button', emoji: '🔘' },
              { name: 'Card', emoji: '📋' },
              { name: 'Avatar', emoji: '👤' },
              { name: 'Badge', emoji: '🏷️' },
              { name: 'Toggle', emoji: '⚡' },
              { name: 'Progress', emoji: '📊' },
              { name: 'Tag', emoji: '🏷️' },
              { name: 'Notification', emoji: '🔔' },
            ].map((component, idx) => (
              <div key={component.name} className="group relative" style={{animationDelay: `${idx * 0.05}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10"></div>
                <Card variant="compact" interactive className="relative">
                  <CardContent className="flex flex-col items-center justify-center min-h-[120px] gap-md group-hover:scale-105 transition-transform duration-300">
                    <span className="text-5xl">{component.emoji}</span>
                    <span className="text-body font-medium text-text-primary text-center group-hover:text-accent-primary transition-colors duration-300">
                      {component.name}
                    </span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-xxxl relative overflow-hidden">
        {/* Background gradient circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-secondary/10 to-accent-primary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1440px] mx-auto px-page relative z-10">
          <div className="relative">
            {/* Gradient border container */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary rounded-3xl p-[2px]">
              <div className="absolute inset-0 bg-surface-primary rounded-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative bg-surface-primary rounded-3xl px-page py-xxxl text-center space-y-lg">
              <h2 className="text-heading-1 text-text-primary">
                Ready to build something
                <br />
                <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
                  extraordinary?
                </span>
              </h2>
              <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
                Explore our interactive component dashboard and see LimeAura design system in action. Discover the power of a well-crafted design foundation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-md pt-lg">
                <Link href="/examples/dashboard">
                  <Button variant="primary" size="lg" className="relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      Explore Dashboard
                      <ArrowRight className="ml-sm h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <Button variant="secondary" size="lg">
                  Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-border-subtle bg-surface-soft/50 py-xxxl">
        <div className="max-w-[1440px] mx-auto px-page">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-xxxl mb-xxxl">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-sm mb-md">
                <div className="h-6 w-6 rounded-pill bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-text-on-accent" />
                </div>
                <span className="text-heading-3 font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                  LimeAura
                </span>
              </div>
              <p className="text-body text-text-secondary">
                Design system built for modern, ambitious products.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-label font-semibold text-text-primary mb-md uppercase tracking-wider">Product</h4>
              <ul className="space-y-sm">
                {['Components', 'Design Tokens', 'Documentation', 'Pricing'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-body text-text-secondary hover:text-accent-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-label font-semibold text-text-primary mb-md uppercase tracking-wider">Resources</h4>
              <ul className="space-y-sm">
                {['Blog', 'Changelog', 'Community', 'Support'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-body text-text-secondary hover:text-accent-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-label font-semibold text-text-primary mb-md uppercase tracking-wider">Company</h4>
              <ul className="space-y-sm">
                {['About', 'Careers', 'Team', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-body text-text-secondary hover:text-accent-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-label font-semibold text-text-primary mb-md uppercase tracking-wider">Legal</h4>
              <ul className="space-y-sm">
                {['Privacy', 'Terms', 'License', 'Cookies'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-body text-text-secondary hover:text-accent-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-border-subtle/50 pt-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-md">
              <p className="text-label text-text-tertiary">
                © 2024 LimeAura. Built with Next.js 14, TypeScript & Tailwind CSS.
              </p>
              <div className="text-label text-text-tertiary">
                v1.0.0 — Crafted with ✨ for modern builders
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
