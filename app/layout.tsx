import "../styles/globals.css";
import { ReactNode } from "react";
import StateProvider from "../component/context/ContextProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <StateProvider>
          <main className="w-screen h-screen">{children}</main>
        </StateProvider>
      </body>
    </html>
  );
}
