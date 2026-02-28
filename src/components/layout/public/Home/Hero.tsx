import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden pt-20">
            {/* Background linear */}
            <div className="absolute inset-0 bg-linear-to-b from-white via-[#FFF5FB] to-white -z-10" />

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />

            {/* Sparkles/Brilhos */}
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-ping" />
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping delay-1000" />
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/20 rounded-full animate-ping delay-500" />

            <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="flex flex-col items-start text-left space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Nova Coleção
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                        Brilhe do <br />
                        <span className="text-primary relative inline-block">
                            seu jeito
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" fill="none" strokeWidth="2" />
                            </svg>
                        </span>
                        {" "}💕
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed font-medium">
                        Descubra tendências, cuidados e o brilho único que realça a sua essência. Moda feminina pensada para a mulher moderna e confiante.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link
                            href="/loja"
                            className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/25 hover:bg-[#F84BB8] hover:-translate-y-1 active:scale-95 transition-all duration-300"
                        >
                            Começar a Brilhar
                        </Link>
                        <Link
                            href="/novidades"
                            className="px-8 py-4 border-2 border-primary/20 text-primary font-bold rounded-2xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                        >
                            Explorar Novidades
                        </Link>
                    </div>

                    {/* Mini Stats/Trust */}
                    <div className="flex items-center gap-8 pt-8 border-t border-primary/10 w-full sm:w-auto">
                        <div>
                            <div className="text-2xl font-bold text-foreground">15k+</div>
                            <div className="text-xs text-foreground/50 font-bold uppercase tracking-widest">Mocinhas Felizes</div>
                        </div>
                        <div className="w-[1px] h-10 bg-primary/10" />
                        <div>
                            <div className="text-2xl font-bold text-foreground">500+</div>
                            <div className="text-xs text-foreground/50 font-bold uppercase tracking-widest">Estilos Novos</div>
                        </div>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[70vh] w-full animate-in fade-in zoom-in duration-1000 delay-300">
                    <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-[2rem] sm:rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
                    <div className="relative h-full w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white">
                        <Image
                            src="/hero-model.png"
                            alt="Modelo moderna representando O Mundo das Mocinhas"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        {/* Soft pink overlay on image edges */}
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Floating Badge on Image */}
                    <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-primary/10 hidden md:block animate-bounce-slow">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                                <span className="text-2xl font-bold">💎</span>
                            </div>
                            <div>
                                <div className="font-bold text-foreground">Qualidade Premium</div>
                                <div className="text-sm text-foreground/60">Selecionado para você</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}