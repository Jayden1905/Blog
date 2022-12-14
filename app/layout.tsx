import "../styles/globals.css";
import { ReactNode } from "react";
import StateProvider from "../components/context/ContextProvider";
import NavBar from "../components/NavBar/NavBar";
import ScrollTop from "../components/ScrollTop/ScrollTop";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body id="top" className="scroll-smooth bg-primary">
        <StateProvider>
          <ScrollTop />
          <NavBar />
          <main>{children}</main>
        </StateProvider>
      </body>
    </html>
  );
}
