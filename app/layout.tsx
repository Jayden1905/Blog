"use client";
import "../styles/globals.css";
import { ReactNode } from "react";
import StateProvider from "../components/context/ContextProvider";
import NavBar from "../components/NavBar/NavBar";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="bg-primary">
        <AnimatePresence>
          <AnimateSharedLayout>
            <div id="top" className="scroll-smooth bg-primary">
              <StateProvider>
                <ScrollTop />
                <NavBar />
                <main>{children}</main>
              </StateProvider>
            </div>
          </AnimateSharedLayout>
        </AnimatePresence>
      </body>
    </html>
  );
}
