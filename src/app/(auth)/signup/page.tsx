"use client";

import Link from "next/link";
import { HiUser, HiMail, HiLockClosed, HiPhone, HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { useState } from "react";

export default function SignupPage() {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="text-center space-y-8 animate-in zoom-in duration-700">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto animate-bounce-slow">
                    <HiCheckCircle className="w-16 h-16" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-3xl font-black text-gray-950">Conta Criada! 💕</h2>
                    <p className="text-gray-400 font-medium">
                        Seja bem-vinda ao mundo do brilho. <br />
                        Enviamos um e-mail de confirmação para você.
                    </p>
                </div>

                <Link
                    href="/login"
                    className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-[#F84BB8] hover:scale-105 active:scale-95 transition-all"
                >
                    Acessar Minha Conta <HiArrowRight className="w-5 h-5" />
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700">
            <div className="space-y-2">
                <h1 className="text-3xl font-black text-gray-950 tracking-tight">
                    Crie seu <span className="text-primary italic">Brilho</span> ✨
                </h1>
                <p className="text-gray-400 font-medium text-sm">
                    Cadastre-se para aproveitar ofertas e novidades exclusivas.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 px-1">
                        Nome Completo
                    </label>
                    <div className="relative group">
                        <HiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            type="text"
                            required
                            placeholder="Maria das Mocinhas"
                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 px-1">
                        E-mail
                    </label>
                    <div className="relative group">
                        <HiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            type="email"
                            required
                            placeholder="seu@email.com"
                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 px-1">
                        Senha
                    </label>
                    <div className="relative group">
                        <HiLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 px-1">
                        Confirmar Senha
                    </label>
                    <div className="relative group">
                        <HiLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            type="password"
                            required
                            placeholder="••••••••"
                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-2 sm:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/60 px-1">
                        Telefone (Opcional)
                    </label>
                    <div className="relative group">
                        <HiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            type="tel"
                            placeholder="+244 923 000 000"
                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 py-4">
                    <button
                        type="submit"
                        className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-[#F84BB8] hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                    >
                        Cadastrar Agora <HiArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </form>

            <div className="border-t border-gray-50 pt-8 text-center">
                <p className="text-sm text-gray-400 font-medium">
                    Já faz parte do nosso mundo? <br />
                    <Link href="/login" className="text-primary font-black hover:underline px-2">
                        Fazer Login 💕
                    </Link>
                </p>
            </div>
        </div>
    );
}
