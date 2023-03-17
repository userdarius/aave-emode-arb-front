import { Web3Button } from "@web3modal/react";
import { Heading, Box } from "degen";

export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <Heading align="center"> Surge Finance </Heading>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        padding="3"
      >
        <Web3Button />
      </Box>
    </div>
  );
}
