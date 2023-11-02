// App.tsx
import React, { useContext } from 'react';
import './App.css';
import { ThemeContext, ThemeOptions, } from './context/ThemeProvider';
import ClassComponent from './components/classComponent';
import FunctionalComponent from './components/functionalComponent';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider >
        <ThemeSwitcherButton />
        <ClassComponent />
        <FunctionalComponent />
      </ThemeProvider>
    </div>
  );
}

function ThemeSwitcherButton() {

  const themeContextValue = useContext(ThemeContext)
  return (
    <button onClick={() => {
      themeContextValue.switchTheme(themeContextValue.state === ThemeOptions.dark ? ThemeOptions.light : ThemeOptions.dark)
    }}>
      Change Theme
    </button>
  )
}

export default App;
