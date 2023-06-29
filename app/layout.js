import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
    title: "Go India Advisors",
    description: "The connection that matters",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <main className="app flex flex-col">
                    <Nav />
                    <div className="flex-grow flex flex-col">{children}</div>
                </main>
            </body>
        </html>
    );
}
