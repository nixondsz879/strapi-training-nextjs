import "../styles/globals.css";
import "../styles/grid.css";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { myAppTheme, GlobalStyle } from "../theme-new";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const globalConfig = {
  seo: {
    metaTitle: "Default Meta Title",
  },
};

export const AppContext = createContext({});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={myAppTheme}>
      <GlobalStyle />
      <AppContext.Provider value={globalConfig}>
        <SEO pageProps={pageProps} />
        <Layout>
          <Component {...pageProps} globalConfig={globalConfig} />
        </Layout>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
