import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Lusitana } from 'next/font/google';
// Initialize the fonts
export const inter = Inter({ subsets: ['latin'] });

export const roboto = Roboto({ 
    subsets: ['latin'], 
    weight: ['700'], // You can choose multiple weights
    style: ['normal', 'italic'], // You can choose styles
  });

  export const lusitana= Lusitana({
    subsets: ['latin'],
    weight: ['700'],
    style: ['normal'],
  })