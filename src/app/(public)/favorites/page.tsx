"use client";

import Header from "@/components/layout/public/Header";
import Footer from "@/components/layout/public/Footer";
import Image from "next/image";
import Link from "next/link";
import { HiHeart, HiShoppingBag, HiTrash, HiArrowRight } from "react-icons/hi";
import { useState } from "react";

// Mock data
const INITIAL_FAVORITES = [
    { id: 1, name: "Vestido Floral Brilho", price: 24900, image: "/hero-model.png", category: "Vestidos" },
    { id: 2, name: "Conjunto Soft Care", price: 18500, image: "/hero-model.png", category: "Sets" },
    { id: 3, name: "Brincos de Pérola", price: 5500, image: "/hero-model.png", category: "Acessórios" },
    { id: 4, name: "Bolsa Elegance", price: 32000, image: "/hero-model.png", category: "Bolsas" },
];

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState(INITIAL_FAVORITES);

    const removeFavorite = (id: number) => {
        setFavorites(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-24 pb-20">
                {/* 🌸 1️⃣ HERO SUPERIOR */}
                <section className="container mx-auto px-4 mb-16 relative">
                    <div className="py-20 text-center space-y-4 relative">
                        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent -z-10 rounded-[3rem]" />

                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-4xl bg-white shadow-xl shadow-primary/10 text-primary animate-bounce-slow">
                            <HiHeart className="w-8 h-8" />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight">
                            Seus Favoritos <span className="text-primary italic">💕</span>
                        </h1>
                        <p className="text-lg text-foreground/60 font-medium max-w-xl mx-auto">
                            Produtos que você ama e quer guardar para realçar o seu brilho único.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4">
                    {favorites.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                            {favorites.map((item) => (
                                <div key={item.id} className="group relative">
                                    {/* Card Image */}
                                    <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-2">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Actions Overlay */}
                                        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <button className="w-full py-4 bg-white/90 backdrop-blur-md text-primary font-black rounded-2xl shadow-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                                                <HiShoppingBag className="w-5 h-5" />
                                                No Carrinho
                                            </button>
                                        </div>

                                        {/* Remove Action */}
                                        <button
                                            onClick={() => removeFavorite(item.id)}
                                            className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-2xl text-primary hover:bg-primary hover:text-white shadow-lg transition-all"
                                        >
                                            <HiHeart className="w-6 h-6" />
                                        </button>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 px-4 py-1.5 bg-gray-900/10 backdrop-blur-md text-gray-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                                            {item.category}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="mt-6 space-y-1 text-center">
                                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors truncate px-2">
                                            {item.name}
                                        </h3>
                                        <div className="text-lg font-black text-primary">
                                            {item.price.toLocaleString('pt-AO')} Kz
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* 🌸 5️⃣ MENSAGEM EMOCIONAL (Vazio) */
                        <div className="max-w-2xl mx-auto py-20 text-center space-y-10">
                            <div className="relative inline-block">
                                <div className="w-40 h-40 bg-[#FFF5FB] rounded-full flex items-center justify-center text-7xl mx-auto animate-pulse">
                                    ✨
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary text-3xl transform rotate-12">
                                    💕
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl font-extrabold text-foreground">
                                    Você ainda não adicionou nenhum favorito <span className="text-primary italic">💖</span>
                                </h2>
                                <p className="text-foreground/60 font-medium max-w-sm mx-auto leading-relaxed">
                                    Explore a loja, apaixone-se por nossas peças e encontre o seu brilho especial.
                                </p>
                            </div>

                            <Link
                                href="/loja"
                                className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-white font-extrabold rounded-2xl shadow-2xl shadow-primary/20 hover:bg-[#F84BB8] hover:scale-105 active:scale-95 transition-all"
                            >
                                Explorar Produtos <HiArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    )}
                </section>

                {/* 🎁 Bottom Inspirational Section */}
                {favorites.length > 0 && (
                    <section className="container mx-auto px-4 mt-32 pt-20 border-t border-primary/10">
                        <div className="bg-gray-900 rounded-[3rem] p-12 relative overflow-hidden">
                            {/* Sparkle background */}
                            <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-ping" />
                            <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary/30 rounded-full animate-ping delay-500" />

                            <div className="relative z-10 text-center space-y-6">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                                    Preparada para brilhar de <br />
                                    <span className="text-primary italic">um jeito único?</span>
                                </h2>
                                <p className="text-white/40 font-medium max-w-md mx-auto">
                                    Aproveite seus favoritos e garanta as peças que vão transformar seu visual hoje mesmo.
                                </p>
                                <Link
                                    href="/cart"
                                    className="inline-flex px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-[#F84BB8] transition-all"
                                >
                                    Ver meu Carrinho
                                </Link>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}
