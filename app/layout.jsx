import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { Suspense } from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share IA Prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <Provider>
            <div className="main">
              <div className="gradient"></div>
            </div>

            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
