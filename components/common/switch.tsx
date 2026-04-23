'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

export function Switch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='
      group
        relative flex items-center justify-center
        w-9 h-9 rounded-lg
        transition-all duration-200
      '
    >
      <Sun
        className={`
    absolute h-4 w-4 transition-all duration-300
    ${
      isDark
        ? 'opacity-100 rotate-0 text-accent group-hover:scale-110 group-hover:brightness-110'
        : 'opacity-0 rotate-90'
    }
  `}
      />

      <Moon
        className={`
    absolute h-4 w-4 transition-all duration-300
    ${
      isDark
        ? 'opacity-0 -rotate-90'
        : 'opacity-100 rotate-0 text-primary group-hover:scale-110 group-hover:brightness-110'
    }
  `}
      />

      <span className='sr-only'>Toggle theme</span>
    </button>
  );
}
