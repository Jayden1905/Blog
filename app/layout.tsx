import { ReactNode } from "react";
import StateProvider from "../context/ContextProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <StateProvider>
          <main>
            <nav></nav>
            {children}
          </main>
        </StateProvider>
      </body>
    </html>
  );
}
