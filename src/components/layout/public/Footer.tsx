"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiChevronDown, HiLocationMarker, HiMail } from "react-icons/hi";
import { useState } from "react";
import icon from "@/assets/images/mocinhas2.png";

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const footerLinks = {
        loja: [
            { label: "Loja", href: "/loja" },
            { label: "Novidades", href: "/novidades" },
            { label: "Promoções", href: "/promocoes" },
            { label: "Mais Vendidos", href: "/mais-vendidos" },
            { label: "Categorias", href: "/categorias" },
        ],
        atendimento: [
            { label: "WhatsApp", href: "https://wa.me/244900000000" },
            { label: "Email", href: "mailto:oi@mocinhas.com" },
            { label: "Página de Contacto", href: "/contact" },
            { label: "FAQ", href: "/contact#faq" },
        ],
    };

    return (
        <footer className="w-full">
            {/* 🌸 1️⃣ BLOCO SUPERIOR — CHAMADA EMOCIONAL */}
            {/* <div className="bg-primary py-8 md:py-12 relative overflow-hidden group">
              
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
                    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-700" />
                </div>

                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center relative z-10">
                    <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
                        Brilhe todos os dias com confiança 💕
                    </h2>
                    <Link
                        href="/loja"
                        className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black hover:-translate-y-1 active:scale-95 transition-all duration-300 shadow-xl shadow-black/20"
                    >
                        Explorar Loja
                    </Link>
                </div>
            </div> */}

            {/* 💌 4️⃣ NEWSLETTER INTEGRADA */}
            <div className="bg-[#FFF5FB] py-16">
                <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
                            Receba novidades, promoções e tendências 💖
                        </h3>
                        <p className="text-foreground/60 font-medium">Inscreva-se na nossa newsletter e não perca nenhum brilho.</p>
                    </div>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 px-6 py-4 bg-white border border-primary/10 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-medium"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black active:scale-95 transition-all"
                        >
                            Inscrever
                        </button>
                    </form>
                </div>
            </div>

            {/* 🖤 2️⃣ FOOTER PRINCIPAL */}
            <div className="bg-white pt-20 pb-12 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                        {/* 🏷️ COLUNA 1 — Marca */}
                        <div className="space-y-6">
                            <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 origin-left">
                                <div className="relative w-12 h-12">
                                    <Image src={icon} alt="Logo" fill className="object-contain" />
                                </div>
                                <span className="text-xl font-black text-foreground tracking-tighter">
                                    Mundo das Mocinhas
                                </span>
                            </Link>
                            <p className="text-foreground/60 font-medium leading-relaxed max-w-xs">
                                O mundo das mocinhas é a loja oficial das mocinhas modernas. Brilhos, cuidados e tendências para realçar sua essência.
                            </p>
                            <div className="flex items-center gap-4">
                                {[
                                    { icon: <FaInstagram />, href: "#", color: "hover:text-pink-600" },
                                    { icon: <FaTiktok />, href: "#", color: "hover:text-black" },
                                    { icon: <FaWhatsapp />, href: "#", color: "hover:text-green-500" },
                                ].map((social, i) => (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        className={`p-3 rounded-xl bg-gray-50 text-foreground/40 text-xl transition-all hover:bg-white hover:shadow-lg ${social.color}`}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* 🛍️ COLUNA 2 — Loja */}
                        <div className="hidden md:block space-y-6">
                            <h4 className="text-lg font-bold text-foreground">Loja</h4>
                            <ul className="space-y-4">
                                {footerLinks.loja.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-foreground/60 font-medium hover:text-primary transition-all relative group"
                                        >
                                            {link.label}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 📍 COLUNA 3 — Lojas Físicas */}
                        <div className="hidden md:block space-y-6">
                            <h4 className="text-lg font-bold text-foreground">Nossas Lojas</h4>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                        <HiLocationMarker className="w-4 h-4" />
                                        Luanda
                                    </div>
                                    <p className="text-xs text-foreground/60 font-medium">
                                        Belas Shopping, Talatona<br />
                                        SEG - SÁB | 09H - 21H
                                    </p>
                                    <button className="text-[10px] font-black text-primary uppercase hover:underline">
                                        Ver localização
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                                        <HiLocationMarker className="w-4 h-4" />
                                        Benguela
                                    </div>
                                    <p className="text-xs text-foreground/60 font-medium">
                                        Av. Aires de Almeida Santos<br />
                                        SEG - SÁB | 08H - 18H
                                    </p>
                                    <button className="text-[10px] font-black text-primary uppercase hover:underline">
                                        Ver localização
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 📞 COLUNA 4 — Atendimento */}
                        <div className="hidden md:block space-y-6">
                            <h4 className="text-lg font-bold text-foreground">Atendimento</h4>
                            <ul className="space-y-4">
                                {footerLinks.atendimento.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-foreground/60 font-medium hover:text-primary transition-all relative group"
                                        >
                                            {link.label}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                                <p className="text-xs text-primary font-bold">Atendimento rápido e personalizado.</p>
                            </div>
                        </div>

                        {/* MOBILE ACCORDIONS */}
                        <div className="md:hidden space-y-4">
                            {/* Loja Accordion */}
                            <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('loja')}
                                    className="w-full px-6 py-4 flex items-center justify-between font-bold text-foreground bg-gray-50/50"
                                >
                                    Loja
                                    <HiChevronDown className={`w-5 h-5 transition-transform ${openSection === 'loja' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openSection === 'loja' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <ul className="px-6 py-4 space-y-4">
                                        {footerLinks.loja.map((link) => (
                                            <li key={link.href}><Link href={link.href} className="text-foreground/60 font-medium">{link.label}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Lojas Accordion */}
                            <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('lojas')}
                                    className="w-full px-6 py-4 flex items-center justify-between font-bold text-foreground bg-gray-50/50"
                                >
                                    Nossas Lojas
                                    <HiChevronDown className={`w-5 h-5 transition-transform ${openSection === 'lojas' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openSection === 'lojas' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-6 py-4 space-y-6">
                                        <div className="space-y-1">
                                            <div className="font-bold text-primary text-xs uppercase">Luanda</div>
                                            <p className="text-xs text-foreground/60">Belas Shopping, Talatona</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-bold text-primary text-xs uppercase">Benguela</div>
                                            <p className="text-xs text-foreground/60">Av. Aires de Almeida Santos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Atendimento Accordion */}
                            <div className="border border-gray-100 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('atendimento')}
                                    className="w-full px-6 py-4 flex items-center justify-between font-bold text-foreground bg-gray-50/50"
                                >
                                    Atendimento
                                    <HiChevronDown className={`w-5 h-5 transition-transform ${openSection === 'atendimento' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openSection === 'atendimento' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <ul className="px-6 py-4 space-y-4">
                                        {footerLinks.atendimento.map((link) => (
                                            <li key={link.href}><Link href={link.href} className="text-foreground/60 font-medium">{link.label}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 📜 3️⃣ LINHA INFERIOR LEGAL */}
                    <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-foreground/40 text-sm font-medium text-center md:text-left">
                            © 2026 O mundo das mocinhas. Todos os direitos reservados.
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {["Política de Privacidade", "Termos e Condições", "Política de Trocas"].map((item, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="text-xs font-bold text-foreground/40 hover:text-primary transition-colors uppercase tracking-wider"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
