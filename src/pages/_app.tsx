import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { Tooltip } from '../components/Tooltip';
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />

      <Tooltip place="top" type="dark" effect="solid" />
    </ThemeProvider>
  );
}
