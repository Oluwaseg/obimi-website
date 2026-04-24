import AOSInitializer from '@/lib/aos-init';
import { cn } from '@/lib/utils';
import { Fredoka, Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn(fredoka.variable, manrope.variable)}>
      <body className='antialiased font-sans'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {/*  <Suspense fallback={<FullPageLoader />}> */}
          <AOSInitializer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
