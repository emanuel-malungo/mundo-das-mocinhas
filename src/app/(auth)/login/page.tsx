"use client";

import Link from "next/link";
import { HiMail, HiLockClosed, HiEye, HiEyeOff, HiArrowRight } from "react-icons/hi";
import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-700">
            <div className="space-y-2">
                <h1 className="text-3xl font-black text-gray-950 tracking-tight">
                    Bem-vinda de <span className="text-primary italic">volta</span> 💕
                </h1>
                <p className="text-gray-400 font-medium">
                    Acesse sua conta para continuar sua jornada de brilho.
                </p>
            </div>

            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-primary/60 px-1">
                        E-mail ou Usuário
                    </label>
                    <div className="relative group">
                        <HiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full pl-14 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between px-1">
                        <label className="text-xs font-black uppercase tracking-widest text-primary/60">
                            Senha
                        </label>
                        <Link href="/forgot-password" title="Esqueci a senha" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                            Esqueci a senha
                        </Link>
                    </div>
                    <div className="relative group">
                        <HiLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors w-5 h-5" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full pl-14 pr-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all font-medium"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-primary transition-colors"
                        >
                            {showPassword ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-[#F84BB8] hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                    Entrar Agora <HiArrowRight className="w-5 h-5" />
                </button>
            </form>

            <div className="pt-8 border-t border-gray-50 text-center space-y-4">
                <p className="text-sm text-gray-400 font-medium">
                    Ainda não tem uma conta?
                </p>
                <Link
                    href="/signup"
                    className="inline-block px-10 py-3 bg-white border border-gray-100 text-foreground font-black text-xs uppercase tracking-widest rounded-xl hover:bg-gray-50 hover:border-primary/20 transition-all"
                >
                    Criar minha conta 💕
                </Link>
            </div>
        </div>
    );
}
