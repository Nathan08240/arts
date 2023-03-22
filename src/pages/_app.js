import { useEffect, useState } from 'react';
import { Router } from 'next/router';
import '../styles/globals.css';
import LoadingPage from '../components/LoadingPage';
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
      <>
        {isLoading && <LoadingPage />}
        <ResponsiveAppBar/>
        <Component {...pageProps} />
      </>
  );
}

export default App;