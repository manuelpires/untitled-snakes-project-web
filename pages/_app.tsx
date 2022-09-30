import type { AppProps } from "next/app";
import { Web3Provider } from "components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <Web3Provider>
    <Component {...pageProps} />
    <ToastContainer theme="dark" closeOnClick={false} />
  </Web3Provider>
);

export default App;
