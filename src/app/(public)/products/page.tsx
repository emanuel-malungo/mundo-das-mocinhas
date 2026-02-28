"use client";

import Header from "@/components/layout/public/Header";
import Footer from "@/components/layout/public/Footer";
import Image from "next/image";
import Link from "next/link";
import { HiSearch, HiFilter, HiShoppingBag, HiHeart, HiArrowRight, HiChatAlt2, HiChevronDown, HiSparkles, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState, useMemo, useEffect } from "react";

// Mock data
const CATEGORIES = ["Todos", "Vestidos", "Conjuntos", "Acessórios", "Bolsas"];

const ADS = [
    {
        id: 1,
        title: "Coleção de Verão",
        subtitle: "Sinta o frescor da estação com nossas novas peças.",
        image: "/hero-model.png",
        cta: "Ver Agora",
        color: "bg-[#FFF5FB]"
    },
    {
        id: 2,
        title: "Brilho & Glamour",
        subtitle: "Acessórios exclusivos para iluminar seu estilo.",
        image: "/hero-model.png",
        cta: "Explorar",
        color: "bg-[#FDF2F8]"
    },
    {
        id: 3,
        title: "Ofertas da Semana",
        subtitle: "Descontos de até 40% em vestidos selecionados.",
        image: "/hero-model.png",
        cta: "Aproveitar",
        color: "bg-[#F5F3FF]"
    }
];

const PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Produto Premium ${i + 1}`,
    category: CATEGORIES[Math.floor(Math.random() * (CATEGORIES.length - 1)) + 1],
    price: 15000 + Math.floor(Math.random() * 40000),
    oldPrice: Math.random() > 0.7 ? 60000 : null,
    image: "/hero-model.png",
    tag: Math.random() > 0.8 ? "Novo" : (Math.random() > 0.8 ? "Popular" : null),
    colors: ["#FD66C3", "#000000", "#FFFFFF"],
    sizes: ["P", "M", "G"],
    stock: Math.floor(Math.random() * 20),
    description: "Desenvolvido com tecidos de altíssima qualidade para garantir conforto e durabilidade.",
}));

const ITEMS_PER_PAGE = 8;

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [sortBy, setSortBy] = useState("Recentes");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentAd, setCurrentAd] = useState(0);

    // Auto-slide logic for Hero
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentAd((prev) => (prev + 1) % ADS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(p => {
            const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        }).sort((a, b) => {
            if (sortBy === "Preço: Menor") return a.price - b.price;
            if (sortBy === "Preço: Maior") return b.price - a.price;
            return 0;
        });
    }, [activeCategory, sortBy, searchQuery]);

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchQuery, sortBy]);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-24 pb-20">

                {/* � 1️⃣ HERO SLIDER SECTION */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl shadow-primary/5">
                        {ADS.map((ad, idx) => (
                            <div
                                key={ad.id}
                                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentAd ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                                    } ${ad.color} flex items-center justify-between px-10 md:px-24`}
                            >
                                <div className="max-w-xl space-y-6 z-10">
                                    <span className="inline-block px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full animate-bounce-slow">
                                        Publicidade ✨
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-black text-gray-950 leading-tight tracking-tighter">
                                        {ad.title.split(' ')[0]} <br />
                                        <span className="text-primary italic">{ad.title.split(' ').slice(1).join(' ')}</span>
                                    </h2>
                                    <p className="text-lg text-gray-500 font-medium">
                                        {ad.subtitle}
                                    </p>
                                    <button className="px-10 py-4 bg-gray-950 text-white font-black rounded-2xl hover:bg-primary transition-all shadow-xl shadow-black/10">
                                        {ad.cta}
                                    </button>
                                </div>

                                <div className="hidden lg:block relative w-1/3 h-full scale-110 translate-y-10 group-hover:translate-y-0 transition-transform duration-1000">
                                    <Image
                                        src={ad.image}
                                        alt={ad.title}
                                        fill
                                        className="object-contain object-bottom drop-shadow-[-20px_20px_40px_rgba(0,0,0,0.1)]"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Dots */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                            {ADS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentAd(idx)}
                                    className={`h-2 transition-all duration-500 rounded-full ${idx === currentAd ? "w-10 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <button
                            onClick={() => setCurrentAd((prev) => (prev - 1 + ADS.length) % ADS.length)}
                            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
                        >
                            <HiChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => setCurrentAd((prev) => (prev + 1) % ADS.length)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
                        >
                            <HiChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </section>

                {/* 📋 FILTERS & SEARCH */}
                <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-gray-100 py-6 mb-12">
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">

                        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full lg:w-auto">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${activeCategory === cat
                                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                                            : "bg-gray-50 text-foreground/40 hover:bg-white hover:shadow-md hover:text-primary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 w-full lg:w-auto">
                            <div className="relative flex-1 lg:w-64">
                                <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Buscar estilo..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-6 py-2.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-sm font-medium"
                                />
                            </div>

                            <div className="relative group">
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-xs font-black text-foreground/60 hover:text-primary transition-all">
                                    <HiFilter className="w-4 h-4" />
                                    ORDENAR
                                    <HiChevronDown className="w-3 h-3" />
                                </button>
                                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                    {["Recentes", "Preço: Menor", "Preço: Maior"].map(opt => (
                                        <button
                                            key={opt}
                                            onClick={() => setSortBy(opt)}
                                            className="w-full px-4 py-2 text-left text-xs font-bold rounded-xl hover:bg-primary/5 hover:text-primary transition-colors"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 🎨 PRODUCT GRID (4 Columns) */}
                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {paginatedProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group relative flex flex-col bg-white rounded-[2rem] border border-gray-50 shadow-xs hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                            >
                                <div className="relative aspect-4/5 overflow-hidden bg-gray-50">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />

                                    {product.tag && (
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                                            {product.tag}
                                        </div>
                                    )}

                                    <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-xl text-foreground/20 hover:text-primary hover:bg-white shadow-sm transition-all active:scale-90 opacity-0 group-hover:opacity-100">
                                        <HiHeart className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="p-5 space-y-4 flex-1 flex flex-col">
                                    <div className="space-y-1">
                                        <span className="text-[9px] font-black text-primary/40 uppercase tracking-widest">
                                            {product.category}
                                        </span>
                                        <h3 className="text-base font-black text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1">
                                            {product.name}
                                        </h3>
                                    </div>

                                    <div className="mt-auto space-y-4">
                                        <div className="flex items-end justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-black text-primary">
                                                    {product.price.toLocaleString('pt-AO')} Kz
                                                </span>
                                                {product.oldPrice && (
                                                    <span className="text-[10px] font-bold text-foreground/20 line-through">
                                                        {product.oldPrice.toLocaleString('pt-AO')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                disabled={product.stock === 0}
                                                className="py-2.5 bg-gray-950 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-all disabled:opacity-30"
                                            >
                                                Carrinho
                                            </button>
                                            <Link
                                                href={`https://wa.me/244900000000?text=Olá, quero o ${product.name}`}
                                                target="_blank"
                                                className="py-2.5 bg-white border border-gray-100 text-foreground/40 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-primary hover:border-primary/20 transition-all flex items-center justify-center gap-1"
                                            >
                                                <HiChatAlt2 className="w-4 h-4" />
                                                Apoio
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="py-32 text-center space-y-4">
                            <div className="text-5xl text-primary/10 animate-pulse">✨</div>
                            <h2 className="text-xl font-black text-foreground">Ainda não encontramos esse brilho...</h2>
                            <p className="text-foreground/40 text-sm font-medium">Tente um termo diferente.</p>
                        </div>
                    )}

                    {/* 🔢 PAGINATION */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex items-center justify-center gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/20 transition-all disabled:opacity-20"
                            >
                                <HiChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-12 h-12 rounded-2xl text-sm font-black transition-all ${currentPage === page
                                                ? "bg-primary text-white shadow-xl shadow-primary/25"
                                                : "bg-gray-50 text-foreground/40 hover:bg-white hover:shadow-md hover:text-primary"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/20 transition-all disabled:opacity-20"
                            >
                                <HiChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </section>

            </main>

            <Footer />
        </div>
    );
}