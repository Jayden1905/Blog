import "../styles/globals.css";
import { ReactNode } from "react";
import StateProvider from "./(component)/context/ContextProvider";
import NavBar from "./(component)/NavBar/NavBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className="bg-primary">
        <StateProvider>
          <NavBar />
          <main>{children}</main>
        </StateProvider>
      </body>
    </html>
  );
}
