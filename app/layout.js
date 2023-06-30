import "@styles/globals.css";
import Nav from "@components/Nav";
import Banner from "@components/Banner";

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
                </main>
            </body>
        </html>
    );
}
