import { Web3Button } from "@web3modal/react";
import { Heading, Box } from "degen";

export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="4"
      gap="4"
    >
      <Heading>Surge Finance</Heading>
      <Web3Button />
    </Box>
  );
}
