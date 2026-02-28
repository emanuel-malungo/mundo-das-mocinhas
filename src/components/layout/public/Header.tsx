"use client";

import Link from "next/link";
import Image from "next/image";
import { HiSearch, HiHeart, HiShoppingBag, HiUser, HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import icon from "@/assets/images/mocinhas2.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Loja", href: "/loja" },
    { label: "Novidades", href: "/novidades" },
    { label: "Promoções", href: "/promocoes" },
    { label: "Lojas", href: "/lojas" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* Main Navbar */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-all">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                <Image
                  src={icon}
                  alt="O Mundo das Mocinhas"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="hidden lg:block text-xl font-extrabold tracking-tight bg-linear-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent bg-[length:200%_auto] hover:bg-[100%_0] transition-all duration-500">
                Mundo das Mocinhas
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-foreground/60 hover:text-primary transition-all relative group py-2"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                aria-label="Buscar"
                className="p-2 sm:p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-foreground/60 transition-all active:scale-90"
              >
                <HiSearch className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </button>
              <button
                aria-label="Favoritos"
                className="hidden sm:flex p-2 sm:p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-foreground/60 transition-all relative active:scale-90"
              >
                <HiHeart className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  3
                </span>
              </button>
              <button
                aria-label="Carrinho"
                className="p-2 sm:p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-foreground/60 transition-all relative active:scale-90"
              >
                <HiShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  2
                </span>
              </button>
              <button
                aria-label="Conta"
                className="hidden sm:flex p-2 sm:p-2.5 rounded-xl hover:bg-primary/10 hover:text-primary text-foreground/60 transition-all active:scale-90"
              >
                <HiUser className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </button>

              <div className="w-[1px] h-6 bg-border-light mx-1 lg:hidden" />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
                className={`lg:hidden p-2 rounded-xl transition-all active:scale-90 z-[60] relative ${isMenuOpen ? 'text-white' : 'hover:bg-primary/10 text-foreground'}`}
              >
                {isMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`
            lg:hidden fixed top-0 left-0 right-0 bg-primary shadow-2xl transition-all duration-500 ease-in-out overflow-hidden z-50
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          `}>
            <div className="container mx-auto px-4 py-6 pt-20">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <li
                    key={link.href}
                    style={{ transitionDelay: isMenuOpen ? `${idx * 50}ms` : '0ms' }}
                    className={`transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between py-4 px-5 rounded-xl text-base font-bold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                      {link.label}
                      <span className="w-2 h-2 rounded-full bg-white/30" />
                    </Link>
                  </li>
                ))}
                <li
                  style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
                  className={`mt-6 pt-6 border-t border-white/20 transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <Link
                    href="/conta"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-4 px-5 rounded-xl text-base font-bold text-primary bg-white hover:bg-white/90 shadow-lg transition-all active:scale-[0.98]"
                  >
                    <HiUser className="w-5 h-5" />
                    Minha Conta
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}