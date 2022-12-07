"use client";
import { createContext, ReactNode, useContext } from "react";
import GlobalContext from "./GlobalState";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  useStore: any;
};

const GlobalState = createContext({} as ContextProps);

export function useGlobalContext() {
  return useContext(GlobalState);
}

const { Provider, useStore } = GlobalContext({
  count: 0,
});

export default function ContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  return (
    <GlobalState.Provider value={{ useStore }}>
      <Provider>{children}</Provider>
    </GlobalState.Provider>
  );
}
