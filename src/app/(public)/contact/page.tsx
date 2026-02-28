"use client";

import Header from "@/components/layout/public/Header";
import Footer from "@/components/layout/public/Footer";
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiChevronDown } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

    const faqs = [
        {
            question: "Como acompanhar minha encomenda?",
            answer: "Após a confirmação do pagamento, você receberá um código de rastreio por e-mail e WhatsApp para acompanhar cada passo da sua entrega."
        },
        {
            question: "Quanto tempo demora a entrega?",
            answer: "O prazo de entrega varia de acordo com a sua localização. Para Luanda, a entrega é feita em até 24h. Para outras províncias, entre 2 a 5 dias úteis."
        },
        {
            question: "Posso levantar na loja?",
            answer: "Sim! Você pode escolher a opção 'Levantamento em Loja' no checkout e retirar seu pedido em nossas unidades de Luanda ou Benguela."
        },
        {
            question: "Quais métodos de pagamento aceitam?",
            answer: "Aceitamos transferências bancárias, pagamentos via multicaixa express e cartões de débito em nossas lojas físicas."
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("loading");
        // Simulating API call
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-16 sm:pt-20">
                {/* 🌸 1️⃣ HERO SECTION */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-b from-white via-[#FFF5FB] to-white -z-10" />

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />

                    <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
                        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary animate-bounce-slow">
                            <HiMail className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
                            Estamos aqui para <span className="text-primary italic">você</span> 💕
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-medium">
                            Fale conosco, tire dúvidas ou acompanhe sua encomenda. Nossa equipe está pronta para te atender com todo carinho.
                        </p>
                    </div>
                </section>

                {/* 🧩 2️⃣ BLOCO PRINCIPAL — CONTATO RÁPIDO & FORMULÁRIO */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* 📍 COLUNA 1 — Informações de Contacto */}
                            <div className="space-y-8">
                                {/* Card WhatsApp */}
                                <div className="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-primary/5 hover:border-primary/20 transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                            <FaWhatsapp className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground">WhatsApp</h3>
                                                <p className="text-foreground/60 font-medium">Atendimento rápido e direto.</p>
                                            </div>
                                            <Link
                                                href="https://wa.me/244900000000"
                                                target="_blank"
                                                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-[#F84BB8] hover:-translate-y-1 active:scale-95 transition-all duration-300"
                                            >
                                                Falar no WhatsApp
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Grid Lojas */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Luanda */}
                                    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 space-y-4">
                                        <div className="flex items-center gap-3 text-primary font-bold">
                                            <HiLocationMarker className="w-5 h-5" />
                                            Luanda
                                        </div>
                                        <div className="text-sm text-foreground/70 font-medium leading-relaxed">
                                            Belas Shopping, Loja 42<br />
                                            Talatona, Luanda
                                        </div>
                                        <div className="pt-2 border-t border-gray-50 text-xs font-bold text-foreground/40 uppercase tracking-wider">
                                            SEG - SÁB | 09H - 21H
                                        </div>
                                        <button className="w-full py-2.5 text-primary bg-primary/5 font-bold rounded-xl hover:bg-primary/10 transition-colors">
                                            Ver no mapa
                                        </button>
                                    </div>

                                    {/* Benguela */}
                                    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 space-y-4">
                                        <div className="flex items-center gap-3 text-primary font-bold">
                                            <HiLocationMarker className="w-5 h-5" />
                                            Benguela
                                        </div>
                                        <div className="text-sm text-foreground/70 font-medium leading-relaxed">
                                            Av. Aires de Almeida Santos<br />
                                            Centro, Benguela
                                        </div>
                                        <div className="pt-2 border-t border-gray-50 text-xs font-bold text-foreground/40 uppercase tracking-wider">
                                            SEG - SÁB | 08H - 18H
                                        </div>
                                        <button className="w-full py-2.5 text-primary bg-primary/5 font-bold rounded-xl hover:bg-primary/10 transition-colors">
                                            Ver no mapa
                                        </button>
                                    </div>
                                </div>

                                {/* Email & Horário */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <HiMail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">E-mail</div>
                                            <div className="font-bold text-foreground truncate">oi@mocinhas.com</div>
                                            <div className="text-[10px] text-primary font-bold">Responde em até 24h</div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                                            <HiClock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Atendimento</div>
                                            <div className="font-bold text-foreground">Segunda a Sábado</div>
                                            <div className="text-[10px] text-foreground/40 font-bold uppercase">08h às 18h</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ✉️ 3️⃣ COLUNA 2 — FORMULÁRIO DE CONTACTO */}
                            <div className="bg-[#FFF5FB]/50 p-8 md:p-10 rounded-[3rem] border border-primary/10">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-extrabold text-foreground mb-2">Envie uma mensagem</h2>
                                    <p className="text-foreground/60 font-medium">Alguma dúvida ou sugestão? Estamos ouvindo!</p>
                                </div>

                                {formStatus === "success" ? (
                                    <div className="bg-white p-10 rounded-[2rem] text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto text-4xl">
                                            💖
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">Mensagem enviada!</h3>
                                        <p className="text-foreground/70 font-medium">
                                            Obrigada por entrar em contacto. Responderemos o mais breve possível.
                                        </p>
                                        <button
                                            onClick={() => setFormStatus("idle")}
                                            className="text-primary font-bold hover:underline"
                                        >
                                            Enviar outra mensagem
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-foreground/60 ml-1">Nome Completo</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Ex: Maria Silva"
                                                className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium placeholder:text-foreground/20"
                                            />
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-foreground/60 ml-1">Telefone</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="+244 900 000 000"
                                                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium placeholder:text-foreground/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-foreground/60 ml-1">E-mail (opcional)</label>
                                                <input
                                                    type="email"
                                                    placeholder="seu@email.com"
                                                    className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium placeholder:text-foreground/20"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-foreground/60 ml-1">Assunto</label>
                                            <select className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium text-foreground appearance-none">
                                                <option>Dúvida sobre produto</option>
                                                <option>Acompanhar encomenda</option>
                                                <option>Sugestões ou Elogios</option>
                                                <option>Reclamação</option>
                                                <option>Outros</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-foreground/60 ml-1">Mensagem</label>
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Como podemos te ajudar?"
                                                className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium placeholder:text-foreground/20 resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === "loading"}
                                            className="w-full py-5 bg-primary text-white font-extrabold rounded-2xl shadow-xl shadow-primary/25 hover:bg-[#F84BB8] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                                        >
                                            {formStatus === "loading" ? "Enviando..." : "Enviar Mensagem 💌"}
                                        </button>
                                    </form>
                                )}
                            </div>

                        </div>
                    </div>
                </section>

                {/* 🗺️ 4️⃣ MAPA ESTILIZADO (Visual Representation) */}
                <section className="py-12 bg-white container mx-auto px-4">
                    <div className="relative w-full h-[400px] bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 group">
                        {/* Mock map background */}
                        <div className="absolute inset-0 bg-[#f9fbfd] opacity-50" style={{
                            backgroundImage: `radial-gradient(#FD66C3 0.5px, transparent 0.5px)`,
                            backgroundSize: '24px 24px'
                        }} />

                        {/* Luanda Pin */}
                        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-150" />
                                <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-primary/20 flex flex-col items-center">
                                    <HiLocationMarker className="w-8 h-8 text-primary" />
                                    <span className="text-[10px] font-black uppercase text-primary mt-1">Luanda</span>
                                </div>
                            </div>
                        </div>

                        {/* Benguela Pin */}
                        <div className="absolute bottom-1/4 right-1/3 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-500 delay-150">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping scale-150 delay-700" />
                                <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-primary/20 flex flex-col items-center">
                                    <HiLocationMarker className="w-8 h-8 text-primary" />
                                    <span className="text-[10px] font-black uppercase text-primary mt-1">Benguela</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-bold text-foreground/40 border border-gray-100 uppercase tracking-widest">
                                Mapa Interativo das Nossas Lojas
                            </span>
                        </div>
                    </div>
                </section>

                {/* 💬 5️⃣ BLOCO FAQ RÁPIDO */}
                <section className="py-24 bg-[#FFF5FB]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Dúvidas Frequentes</h2>
                            <p className="text-foreground/60 font-medium">Tudo o que você precisa saber sobre o Mundo das Mocinhas</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl overflow-hidden border border-primary/5 shadow-sm"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                    >
                                        <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                                            {faq.question}
                                        </span>
                                        <HiChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                    </button>
                                    <div className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                                        <p className="px-8 pb-8 text-foreground/70 font-medium leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            {/* Mobile Fix WhatsApp Button */}
            <Link
                href="https://wa.me/244900000000"
                className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-2xl shadow-primary/40 hover:scale-110 active:scale-90 transition-all flex items-center justify-center lg:hidden"
            >
                <FaWhatsapp className="w-8 h-8" />
            </Link>
        </div>
    );
}