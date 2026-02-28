"use client";

import Header from "@/components/layout/public/Header";
import Footer from "@/components/layout/public/Footer";
import Image from "next/image";
import Link from "next/link";
import { HiMinus, HiPlus, HiTrash, HiArrowRight, HiShoppingBag, HiHeart } from "react-icons/hi";
import { useState } from "react";

// Mock data
const INITIAL_CART = [
    {
        id: 1,
        name: "Vestido Floral Brilho",
        description: "Tamanho M | Rosa Pastel",
        price: 24900,
        quantity: 1,
        image: "/hero-model.png", // Using existing image as placeholder
        stock: 5,
    },
    {
        id: 2,
        name: "Conjunto Soft Care",
        description: "Tamanho Único | Branco",
        price: 18500,
        quantity: 2,
        image: "/hero-model.png", // Using existing image as placeholder
        stock: 10,
    }
];

const SUGGESTIONS = [
    { id: 3, name: "Brincos de Pérola", price: 5500, image: "/hero-model.png" },
    { id: 4, name: "Bolsa Elegance", price: 32000, image: "/hero-model.png" },
    { id: 5, name: "Presilha de Brilho", price: 3500, image: "/hero-model.png" },
    { id: 6, name: "Cinto Glamour", price: 8900, image: "/hero-model.png" },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(INITIAL_CART);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, Math.min(item.stock, item.quantity + delta));
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const removeItem = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 50000 ? 0 : 2500;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-24 pb-20">
                {/* 🌸 1️⃣ HERO DISCRETO */}
                <section className="container mx-auto px-4 mb-12">
                    <div className="py-10 border-b border-primary/10">
                        <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-2">
                            Seu Carrinho <span className="text-primary italic">💕</span>
                        </h1>
                        <p className="text-foreground/60 font-medium">
                            Revise seus produtos antes de finalizar.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* 🛍️ 3️⃣ LISTA DE PRODUTOS (Esquerda) */}
                        <div className="lg:col-span-8 space-y-6">
                            {cartItems.length > 0 ? (
                                <>
                                    <div className="bg-primary/5 px-6 py-3 rounded-2xl border border-primary/10 flex items-center gap-3">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                        </span>
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider">
                                            Estoque limitado para alguns itens.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className="group bg-white p-4 sm:p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr_auto] gap-6 items-center"
                                            >
                                                {/* Imagem */}
                                                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-50">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>

                                                {/* Informações */}
                                                <div className="space-y-2">
                                                    <div>
                                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                                            {item.name}
                                                        </h3>
                                                        <p className="text-sm text-foreground/40 font-medium">{item.description}</p>
                                                    </div>
                                                    <div className="text-primary font-black">
                                                        {item.price.toLocaleString('pt-AO')} Kz
                                                    </div>

                                                    {/* Mobile Quantity Control (hidden on SM+) */}
                                                    <div className="flex sm:hidden items-center gap-4 pt-2">
                                                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="p-2 hover:text-primary transition-colors active:scale-90"
                                                            >
                                                                <HiMinus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="p-2 hover:text-primary transition-colors active:scale-90"
                                                            >
                                                                <HiPlus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                                                        >
                                                            <HiTrash className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Desktop Controls (hidden on Mobile) */}
                                                <div className="hidden sm:flex flex-col items-end gap-4 h-full">
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="p-2 text-gray-200 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                    >
                                                        <HiTrash className="w-5 h-5" />
                                                    </button>

                                                    <div className="mt-auto flex items-center gap-6">
                                                        <div className="flex items-center bg-white rounded-2xl p-1 border border-gray-200 shadow-sm">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="p-2.5 rounded-xl hover:bg-primary/5 hover:text-primary transition-all active:scale-90"
                                                            >
                                                                <HiMinus className="w-4 h-4" />
                                                            </button>
                                                            <span className="w-10 text-center font-extrabold">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="p-2.5 rounded-xl hover:bg-primary/5 hover:text-primary transition-all active:scale-90"
                                                            >
                                                                <HiPlus className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                        <div className="text-xl font-black text-primary min-w-[120px] text-right">
                                                            {(item.price * item.quantity).toLocaleString('pt-AO')} Kz
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Actions Below List */}
                                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <Link
                                            href="/loja"
                                            className="text-foreground/40 font-bold hover:text-primary transition-colors flex items-center gap-2"
                                        >
                                            ← Continuar Comprando
                                        </Link>
                                        <button
                                            onClick={() => setCartItems([])}
                                            className="text-xs font-black uppercase text-foreground/20 hover:text-red-500 transition-colors tracking-widest"
                                        >
                                            Limpar Carrinho
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="bg-[#FFF5FB]/50 rounded-[3rem] p-16 text-center space-y-6 border-2 border-dashed border-primary/10">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary text-5xl mx-auto shadow-xl shadow-primary/10">
                                        🛍️
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold text-foreground">Seu carrinho está vazio</h2>
                                        <p className="text-foreground/60 font-medium max-w-xs mx-auto">
                                            Explore nossa loja e encontre as peças perfeitas para brilhar.
                                        </p>
                                    </div>
                                    <Link
                                        href="/loja"
                                        className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-[#F84BB8] transition-all shadow-xl shadow-primary/20"
                                    >
                                        Ir para a Loja
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* 💳 4️⃣ RESUMO DA COMPRA (Direita) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-28">
                            <div className="bg-[#FFF5FB] p-8 rounded-[2.5rem] border border-primary/10 shadow-xl shadow-gray-200/20 space-y-8">
                                <h3 className="text-xl font-bold text-foreground border-b border-primary/10 pb-4">Resumo da Compra</h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between font-medium text-foreground/60 text-sm">
                                        <span>Subtotal</span>
                                        <span>{subtotal.toLocaleString('pt-AO')} Kz</span>
                                    </div>
                                    <div className="flex justify-between font-medium text-foreground/60 text-sm">
                                        <span>Taxa de Entrega</span>
                                        <span>{shipping === 0 ? "Grátis" : `${shipping.toLocaleString('pt-AO')} Kz`}</span>
                                    </div>

                                    <div className="pt-6 border-t border-primary/10 flex justify-between items-end">
                                        <div className="space-y-1">
                                            <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Total do Pedido</span>
                                            <div className="text-3xl font-black text-primary">
                                                {total.toLocaleString('pt-AO')} Kz
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Link
                                        href="/checkout"
                                        className="w-full py-5 bg-primary text-white font-extrabold rounded-2xl shadow-xl shadow-primary/25 hover:bg-[#F84BB8] hover:-translate-y-1 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                                    >
                                        Finalizar Pedido <HiArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="/loja"
                                        className="w-full py-5 bg-white text-primary border-2 border-primary/20 font-extrabold rounded-2xl hover:bg-primary/5 transition-all text-center block"
                                    >
                                        Escolher mais peças
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-white/50 rounded-2xl border border-white">
                                    <div className="w-10 h-10 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                                        <HiShoppingBag className="w-5 h-5" />
                                    </div>
                                    <p className="text-[10px] font-bold text-foreground/60 leading-tight">
                                        Compra segura & <br />
                                        Proteção de dados garantida
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 🎁 5️⃣ BLOCO DIFERENCIAL — Sugestão Inteligente */}
                <section className="container mx-auto px-4 mt-24">
                    <div className="mb-10 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                            Você também pode gostar <span className="text-primary">💖</span>
                        </h2>
                        <Link href="/loja" className="text-primary font-bold text-sm hover:underline">Ver tudo</Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {SUGGESTIONS.map((prod) => (
                            <div key={prod.id} className="group cursor-pointer">
                                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 mb-4">
                                    <Image
                                        src={prod.image}
                                        alt={prod.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-xl text-foreground/20 hover:text-primary transition-all opacity-0 group-hover:opacity-100">
                                        <HiHeart className="w-5 h-5" />
                                    </button>
                                </div>
                                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors truncate">{prod.name}</h4>
                                <p className="text-primary font-black text-sm">{prod.price.toLocaleString('pt-AO')} Kz</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
