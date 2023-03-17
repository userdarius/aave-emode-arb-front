import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { Account } from "../components";
import { Dashboard } from "../components/Dashboard";
import Header from "../components/Header";
import { Stats } from "../components/Stats";
import styles from "../styles/Home.module.css";
import { Box } from "degen";

function Page() {
  return (
    <div className={styles.container}>
      <Header />
      <Box>
        <Dashboard />
      </Box>
      <Box>
        <Stats />
      </Box>
    </div>
  );
}

export default Page;
