import { Dispatch, SetStateAction, createContext, useState } from 'react';
import React from 'react'

export enum ThemeOptions {
  light = "light",
  dark = "dark"
}
export const ThemeContext = createContext<{
  state: ThemeOptions;
  switchTheme: Dispatch<SetStateAction<ThemeOptions>>;
}>(
  {
    state: ThemeOptions.light,
    switchTheme: () => { }
});

export const initialThemeState = ThemeOptions.light
//  write a reducer for theme

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeState, themeStateDispatch] = useState(initialThemeState);
  return (
    <div>ThemeProvider 
      <ThemeContext.Provider value={{state: themeState,switchTheme: themeStateDispatch}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}
