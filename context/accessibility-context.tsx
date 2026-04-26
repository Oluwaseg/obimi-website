'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityState {
  highContrast: boolean;
  textScale: number; // 1, 1.1, 1.2, 1.3, 1.4, 1.5
  readableFont: boolean;
  disableAnimations: boolean;
  highlightLinks: boolean;
  markTitles: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  toggleHighContrast: () => void;
  setTextScale: (scale: number) => void;
  toggleReadableFont: () => void;
  toggleDisableAnimations: () => void;
  toggleHighlightLinks: () => void;
  toggleMarkTitles: () => void;
  resetAll: () => void;
}

const DEFAULT_STATE: AccessibilityState = {
  highContrast: false,
  textScale: 1,
  readableFont: false,
  disableAnimations: false,
  highlightLinks: false,
  markTitles: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AccessibilityState>(DEFAULT_STATE);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('obimi-accessibility-settings');
    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse accessibility settings', e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage and apply classes to html element
  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem('obimi-accessibility-settings', JSON.stringify(state));

    const root = document.documentElement;
    
    // High Contrast
    if (state.highContrast) root.classList.add('acc-high-contrast');
    else root.classList.remove('acc-high-contrast');

    // Readable Font
    if (state.readableFont) root.classList.add('acc-readable-font');
    else root.classList.remove('acc-readable-font');

    // Disable Animations
    if (state.disableAnimations) root.classList.add('acc-disable-animations');
    else root.classList.remove('acc-disable-animations');

    // Highlight Links
    if (state.highlightLinks) root.classList.add('acc-highlight-links');
    else root.classList.remove('acc-highlight-links');

    // Mark Titles
    if (state.markTitles) root.classList.add('acc-mark-titles');
    else root.classList.remove('acc-mark-titles');

    // Text Scale
    root.style.setProperty('--acc-text-scale', state.textScale.toString());
    if (state.textScale > 1) root.classList.add('acc-scaled-text');
    else root.classList.remove('acc-scaled-text');

  }, [state, isInitialized]);

  const toggleHighContrast = () => setState(prev => ({ ...prev, highContrast: !prev.highContrast }));
  const setTextScale = (scale: number) => setState(prev => ({ ...prev, textScale: scale }));
  const toggleReadableFont = () => setState(prev => ({ ...prev, readableFont: !prev.readableFont }));
  const toggleDisableAnimations = () => setState(prev => ({ ...prev, disableAnimations: !prev.disableAnimations }));
  const toggleHighlightLinks = () => setState(prev => ({ ...prev, highlightLinks: !prev.highlightLinks }));
  const toggleMarkTitles = () => setState(prev => ({ ...prev, markTitles: !prev.markTitles }));
  const resetAll = () => setState(DEFAULT_STATE);

  return (
    <AccessibilityContext.Provider
      value={{
        ...state,
        toggleHighContrast,
        setTextScale,
        toggleReadableFont,
        toggleDisableAnimations,
        toggleHighlightLinks,
        toggleMarkTitles,
        resetAll,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
