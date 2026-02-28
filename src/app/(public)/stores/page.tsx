"use client";

import Header from "@/components/layout/public/Header";
import Footer from "@/components/layout/public/Footer";
import Image from "next/image";
import Link from "next/link";
import { HiLocationMarker, HiClock, HiPhone, HiArrowRight, HiDesktopComputer, HiLightningBolt, HiStar } from "react-icons/hi";

export default function StoresPage() {
    const stores = [
        {
            city: "Luanda",
            mall: "Belas Shopping",
            address: "Piso 1, Loja 42, Talatona",
            hours: "Segunda a Sábado: 09h às 21h",
            sunday: "Domingo: 10h às 20h",
            phone: "+244 923 000 000",
            image: "/hero-model.png", // Placeholder
        },
        {
            city: "Benguela",
            mall: "Centro da Cidade",
            address: "Av. Aires de Almeida Santos, n. 85",
            hours: "Segunda a Sábado: 08h às 18h",
            sunday: "Domingo: Fechado",
            phone: "+244 931 000 000",
            image: "/hero-model.png", // Placeholder
        }
    ];

    return (
        <div className="min-h-screen bg-white text-foreground">
            <Header />

            <main className="pt-24">
                {/* 🌸 1️⃣ HERO SECTION */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-white to-white -z-10" />
                    <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest animate-in fade-in slide-in-from-bottom duration-700">
                            <HiStar className="w-4 h-4" />
                            Presença Física & Digital
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-100">
                            Onde o nosso brilho <br />
                            <span className="text-primary italic">encontra você</span> 💕
                        </h1>

                        <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                            Descubra nossas unidades físicas em Luanda e Benguela. Unimos a experiência do toque com a tecnologia do design digital.
                        </p>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-1/2 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-0 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse delay-700" />
                </section>

                {/* 🏢 2️⃣ STORE CARDS */}
                <section className="py-20 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {stores.map((store, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-[3rem] border border-gray-100 overflow-hidden shadow-xl shadow-gray-200/40 hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={store.image}
                                        alt={store.city}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-6 left-8">
                                        <h2 className="text-3xl font-black text-white">{store.city}</h2>
                                        <p className="text-white/80 font-bold">{store.mall}</p>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10 space-y-8">
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-primary">
                                                <HiLocationMarker className="w-5 h-5" />
                                                <span className="text-xs font-black uppercase tracking-widest">Localização</span>
                                            </div>
                                            <p className="font-medium text-foreground/70 leading-relaxed">
                                                {store.address}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-primary">
                                                <HiClock className="w-5 h-5" />
                                                <span className="text-xs font-black uppercase tracking-widest">Horário</span>
                                            </div>
                                            <div className="text-sm font-medium text-foreground/70 space-y-1">
                                                <p>{store.hours}</p>
                                                <p>{store.sunday}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-50">
                                        <Link
                                            href={`tel:${store.phone.replace(/\s+/g, '')}`}
                                            className="flex-1 px-8 py-4 bg-gray-50 text-foreground font-bold rounded-2xl border border-gray-100 hover:bg-white hover:border-primary transition-all flex items-center justify-center gap-3"
                                        >
                                            <HiPhone className="w-5 h-5" />
                                            Ligar para Loja
                                        </Link>
                                        <button className="flex-1 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:bg-[#F84BB8] transition-all flex items-center justify-center gap-2">
                                            Ver no Mapa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 🖥️ 3️⃣ DIGITAL SIGNAGE EXPERIENCE (The Concept) */}
                <section className="py-32 bg-gray-950 relative overflow-hidden">
                    {/* Tech Background pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #FD66C3 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-xs">
                                    <span className="w-10 h-px bg-primary" />
                                    In-Store Experience
                                </div>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                                    O futuro da <br />
                                    <span className="text-primary">moda é digital.</span>
                                </h2>
                                <p className="text-white/40 text-lg font-medium leading-relaxed max-w-lg">
                                    Nas nossas lojas físicas, a comunicação ganha vida. Totens interativos e painéis dinâmicos garantem que você receba as tendências em tempo real.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <HiDesktopComputer className="w-10 h-10 text-primary" />
                                    <h4 className="font-bold text-white">Design Hierárquico</h4>
                                    <p className="text-sm text-white/30">Informação clara, atrativa e organizada para cada segundo do seu olhar.</p>
                                </div>
                                <div className="space-y-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <HiLightningBolt className="w-10 h-10 text-primary" />
                                    <h4 className="font-bold text-white">Atualização Dinâmica</h4>
                                    <p className="text-sm text-white/30">Promoções e novidades que mudam ao longo do dia, direto para as telas.</p>
                                </div>
                            </div>

                            <blockquote className="border-l-4 border-primary pl-6 py-2 italic font-medium text-white/60 text-lg">
                                "O trabalho do nosso designer de telas vai além da estética; ele garante que a sua experiência de compra seja moderna, clara e impactante."
                            </blockquote>
                        </div>

                        {/* Visual Mockup of a store screen */}
                        <div className="relative aspect-9/16 max-w-sm mx-auto animate-in zoom-in duration-1000 shadow-[0_0_100px_rgba(253,102,195,0.2)]">
                            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
                            <div className="relative h-full w-full bg-white rounded-[2.5rem] border-[12px] border-gray-900 overflow-hidden shadow-2xl flex flex-col">
                                {/* Mock Digital Screen Content */}
                                <div className="relative h-2/3">
                                    <Image src="/hero-model.png" alt="Screen model" fill className="object-cover" />
                                    <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                                    <div className="absolute bottom-8 left-8 space-y-2">
                                        <h3 className="text-4xl font-black text-white italic">FLASH <br /> SALE</h3>
                                        <div className="px-4 py-1 bg-white text-primary text-xs font-black rounded-full inline-block">ATÉ 50% OFF</div>
                                    </div>
                                </div>
                                <div className="flex-1 bg-white p-8 flex flex-col justify-center text-center space-y-4">
                                    <p className="text-xs text-primary font-black uppercase tracking-[0.2em]">Exclusivo em Benguela</p>
                                    <h4 className="text-2xl font-black text-gray-950 uppercase tracking-tighter">Coleção de Verão</h4>
                                    <div className="w-12 h-1 bg-primary mx-auto" />
                                    <p className="text-gray-400 font-bold text-sm">Disponível agora <br /> no setor de vestidos.</p>
                                </div>
                                {/* Digital pulse indicator */}
                                <div className="absolute top-6 right-6 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded">Live</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 💖 5️⃣ FINAL CTA */}
                <section className="py-24 bg-primary overflow-hidden relative">
                    <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white italic">
                            Sinta o Brilho de Perto ✨
                        </h2>
                        <p className="text-white/80 font-bold max-w-xl mx-auto">
                            Visite uma de nossas lojas hoje e receba uma consultoria exclusiva com as nossas mocinhas.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/products"
                                className="px-12 py-5 bg-white text-primary font-black rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                            >
                                Ver Coleção Online <HiArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Visual background element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[20vw] font-black italic select-none pointer-events-none whitespace-nowrap">
                        MUNDO DAS MOCINHAS
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
