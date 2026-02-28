import Header from "@/components/layout/public/Header";
import Footer from "@/components/layout/public/Footer";
import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* <Header /> */}

            <main className="flex-1 flex items-center justify-center py-20 px-4 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-700" />
                </div>

                <div className="container mx-auto max-w-6xl">
                    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-primary/5 overflow-hidden grid lg:grid-cols-2">

                        {/* Left Side: Visual/Branding */}
                        <div className="hidden lg:block relative bg-[#FFF5FB]">
                            <div className="absolute inset-0 p-16 flex flex-col justify-between z-10">
                                <div className="space-y-4">
                                    <span className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/20">
                                        Seja Bem-vinda ✨
                                    </span>
                                    <h2 className="text-4xl font-black text-gray-950 leading-tight">
                                        Mais que uma loja, <br />
                                        <span className="text-primary italic">um estilo de vida.</span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-gray-500 font-medium max-w-xs">
                                        Junte-se a nossa comunidade e receba ofertas exclusivas, novidades em primeira mão e dicas de estilo.
                                    </p>
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                                <Image src="/hero-model.png" alt="User" width={40} height={40} className="object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                                            +1k
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 right-0 w-full h-2/3 pointer-events-none opacity-40">
                                <Image
                                    src="/hero-model.png"
                                    alt="Decorative model"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </div>

                        {/* Right Side: Form Content */}
                        <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
{/* 
            <Footer /> */}
        </div>
    );
}
