import "@styles/globals.css";
import Nav from "@components/Nav";
import Banner from "@components/Banner";
import Image from "next/image";

export const metadata = {
    title: "Go India Advisors",
    description: "The connection that matters",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <main className="h-screen w-screen flex flex-col overflow-x-hidden">
                    <div>
                        <Nav />
                        <Banner />
                    </div>
                    <div className="relative max-h-[calc(100vh-4.75rem)] h-[calc(100vh-4.75rem)]">
                        {children}
                    </div>
                    <div className="fixed bottom-16 md:bottom-10 right-6 md:right-10">
                        <div className="bg-app-light-blue rounded-full p-3.5">
                            <Image
                                src="/assets/icons/add.svg"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-6 md:w-7 h-6 md:h-7"
                            />
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}
