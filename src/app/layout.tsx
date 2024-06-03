import './styles/global.css';
import { ReactNode } from 'react';

/**
 * Root layout component.
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {React.ReactElement} The root layout component.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
