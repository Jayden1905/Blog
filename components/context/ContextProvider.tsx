"use client";

import { createContext, ReactNode, useContext } from "react";
import GlobalContext from "./GlobalState";

type InitialStateProps = {
  windowDimension: {
    width: number;
    height: number;
  };
};

const initialState = {
  windowDimension: {
    width: 1025,
    height: 0,
  },
};

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  useStore: <SelectorOutput>(
    selector: (store: InitialStateProps) => SelectorOutput
  ) => [SelectorOutput, (value: Partial<InitialStateProps>) => void];
};

const GlobalState = createContext({} as ContextProps);
export function useGlobalContext() {
  return useContext(GlobalState);
}

const { Provider, useStore } = GlobalContext(initialState as InitialStateProps);

export default function ContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  return (
    <GlobalState.Provider value={{ useStore }}>
      <Provider>{children}</Provider>
    </GlobalState.Provider>
  );
}
