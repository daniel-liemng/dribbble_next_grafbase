import { Footer, Navbar } from '@/components';
import '../styles/globals.css';

export const metadata = {
  title: 'Dribbble',
  description: 'Showcase and discover remarkable developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
