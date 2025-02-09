import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share IA Prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
