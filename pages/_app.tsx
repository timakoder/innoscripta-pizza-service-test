import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import '../styles/global.scss';
import { AppProps } from 'next/app';
import { GlobalContext } from '../components/utils/context'
import { isMobile } from '../components/utils';
import store from '../components/store';
import { debounce } from '../components/utils';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [mobile, setMobile] = useState(false);

  const windowSizeChangeListener = useCallback(
    debounce(500)(() => {
      if (isMobile() !== mobile) {
        setMobile(isMobile());
      }
    }),
    [mobile]
  );

  useEffect(() => {
    windowSizeChangeListener();

    window.addEventListener('resize', windowSizeChangeListener);

    return () => window.removeEventListener('resize', windowSizeChangeListener);
  }, [mobile]);

  return <Provider store={store}>
    <GlobalContext.Provider value={{ isMobile: mobile }}>
      <Component {...pageProps}/>
    </GlobalContext.Provider>
  </Provider>
}

export default App;