import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
    title: "Go India Advisors",
    description: "The connection that matters",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    );
}
