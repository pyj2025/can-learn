import type { AppProps } from 'next/app';
// import Header from '@/components/header';
import Header from '@/components/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {}, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Component {...pageProps} />
      </main>
    </>
  );
}
