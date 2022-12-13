"use client";
import "../styles/globals.css";
import { ReactNode } from "react";
import StateProvider from "./(component)/context/ContextProvider";
import NavBar from "./(component)/NavBar/NavBar";
import ScrollTop from "./(component)/ScrollTop/ScrollTop";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <AnimatePresence mode="wait">
        <AnimateSharedLayout>
          <body id="top" className="scroll-smooth bg-primary">
            <StateProvider>
              <ScrollTop />
              <NavBar />
              <main>{children}</main>
            </StateProvider>
          </body>
        </AnimateSharedLayout>
      </AnimatePresence>
    </html>
  );
}
