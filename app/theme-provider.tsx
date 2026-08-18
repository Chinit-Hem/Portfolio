'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const defaultValue: ThemeContextType = {
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => {},
};

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark' || value === 'system';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeState, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedTheme = localStorage.getItem('theme');
    const initialTheme: Theme = isTheme(savedTheme) ? savedTheme : 'system';

    setThemeState(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const currentTheme = localStorage.getItem('theme');
      if (!isTheme(currentTheme) || currentTheme === 'system') {
        applyTheme('system');
      }
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const resolved = newTheme === 'system' ? systemTheme : newTheme;

    if (resolved === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
    setResolvedTheme(resolved);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  // Return children without context during SSR to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme: themeState, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return defaultValue;
  }
  return context;
}
