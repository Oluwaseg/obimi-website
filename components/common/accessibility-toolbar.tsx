'use client';

import { Button } from '@/components/ui/button';
import { useAccessibility } from '@/context/accessibility-context';
import {
  Accessibility,
  Heading,
  Link as LinkIcon,
  Minus,
  Plus,
  RotateCcw,
  Sun,
  Type,
  X,
  ZapOff,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AccessibilityToolbar() {
  const {
    highContrast,
    toggleHighContrast,
    textScale,
    setTextScale,
    readableFont,
    toggleReadableFont,
    disableAnimations,
    toggleDisableAnimations,
    highlightLinks,
    toggleHighlightLinks,
    markTitles,
    toggleMarkTitles,
    resetAll,
  } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleTextScale = (delta: number) => {
    const newScale = Math.min(2, Math.max(1, textScale + delta));
    setTextScale(Number(newScale.toFixed(1)));
  };

  const toggles = [
    {
      label: 'High Contrast',
      active: highContrast,
      onClick: toggleHighContrast,
      icon: <Sun className='w-4 h-4' />,
    },
    {
      label: 'Disable Animations',
      active: disableAnimations,
      onClick: toggleDisableAnimations,
      icon: <ZapOff className='w-4 h-4' />,
    },
    {
      label: 'Readable Font',
      active: readableFont,
      onClick: toggleReadableFont,
      icon: <Type className='w-4 h-4' />,
    },
    {
      label: 'Highlight Links',
      active: highlightLinks,
      onClick: toggleHighlightLinks,
      icon: <LinkIcon className='w-4 h-4' />,
    },
    {
      label: 'Mark Titles',
      active: markTitles,
      onClick: toggleMarkTitles,
      icon: <Heading className='w-4 h-4' />,
    },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='fixed bottom-8 right-8 z-[60] flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-accent'
        aria-label='Open accessibility toolbar'
        aria-expanded={isOpen}
      >
        <Accessibility
          className={`w-7 h-7 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Toolbar Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-24 right-8 z-[59] w-96 bg-card border border-border shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col max-h-[80vh] ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className='bg-background text-foreground p-6 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-accent/20 rounded-full'>
              <Accessibility className='w-5 h-5' />
            </div>
            <div>
              <h2 className='font-heading font-bold text-lg'>Accessibility</h2>
              <p className='text-xs'>Customize your experience</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='cursor-pointer p-2 hover:bg-primary/20 rounded-full transition-colors'
            aria-label='Close toolbar'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Content */}
        <div className='flex-1 overflow-y-auto p-5 space-y-6'>
          {/* Text Scaling Control */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <Type className='w-4 h-4 text-primary' />
              <label className='text-sm font-semibold text-foreground'>
                Text Size
              </label>
              <span className='ml-auto text-xs font-mono bg-accent/20 text-accent px-2 py-1 rounded-lg font-bold'>
                {Math.round(textScale * 100)}%
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <Button
                variant='outline'
                size='sm'
                className='h-9 w-9 p-0'
                onClick={() => handleTextScale(-0.1)}
                disabled={textScale <= 1}
              >
                <Minus className='w-4 h-4' />
              </Button>
              <div className='flex-1 h-2 bg-muted rounded-full overflow-hidden'>
                <div
                  className='h-full bg-gradient-to-r from-primary to-accent transition-all duration-200'
                  style={{ width: `${((textScale - 1) / 1) * 100}%` }}
                />
              </div>
              <Button
                variant='outline'
                size='sm'
                className='h-9 w-9 p-0'
                onClick={() => handleTextScale(0.1)}
                disabled={textScale >= 2}
              >
                <Plus className='w-4 h-4' />
              </Button>
            </div>
          </div>

          {/* Separator */}
          <div className='h-px bg-border' />

          {/* Toggles Grid */}
          <div className='space-y-2'>
            <p className='text-xs font-semibold text-muted-foreground uppercase tracking-wider'>
              Settings
            </p>
            {toggles.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 group ${
                  item.active
                    ? 'bg-primary/10 border-primary/50 text-foreground'
                    : 'bg-muted/40 border-border hover:border-primary/30'
                }`}
              >
                <div className='flex items-center gap-3'>
                  <div
                    className={`p-2 rounded-full transition-all duration-200 ${
                      item.active
                        ? 'bg-primary text-primary-foreground scale-110'
                        : 'bg-border group-hover:bg-primary/20'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className='text-sm font-medium text-foreground'>
                    {item.label}
                  </span>
                </div>
                <div
                  className={`flex items-center transition-all duration-300 ${item.active ? 'text-accent' : 'text-muted-foreground'}`}
                >
                  {item.active && (
                    <span className='text-xs font-bold mr-2'>ON</span>
                  )}
                  <div
                    className={`w-11 h-6 rounded-full relative transition-all duration-300 ${
                      item.active ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center ${
                        item.active ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Reset Button */}
          <Button
            variant='outline'
            className='w-full text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/30 gap-2 mt-2'
            onClick={resetAll}
          >
            <RotateCcw className='w-4 h-4' /> Reset All Settings
          </Button>
        </div>

        {/* Footer */}
        <div className='p-4 border-t border-border bg-muted/30 text-center'>
          <p className='text-[11px] text-muted-foreground font-semibold tracking-wide'>
            ✨ Empowering Every Parent with Obimi
          </p>
        </div>
      </div>
    </>
  );
}
