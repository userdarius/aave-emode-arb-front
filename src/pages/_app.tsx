import { EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import type { AppProps } from "next/app";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { ThemeProvider } from "degen";
import "degen/styles";
import { chains, client, walletConnectProjectId } from "../wagmi";
import "../styles/globals.css";

const ethereumClient = new EthereumClient(client, chains);

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <ThemeProvider>
      <WagmiConfig client={client}>
        {mounted && <Component {...pageProps} />}
        <Web3Modal
          projectId={walletConnectProjectId}
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>
    </ThemeProvider>
  );
}

export default App;
