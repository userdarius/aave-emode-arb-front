import React from "react";
import { Craft } from "./Craft";
import { Unwind } from "./Unwind";
import { FieldSet, Input, Box, Card, Text, Skeleton } from "degen";
import { useContractRead } from "wagmi";
import TradingViewWidget from "./Charts.jsx";

export function Stats() {
  return (
    <Box
      alignSelf="center"
      padding="4"
      alignItems="center"
      gap="5"
      justifyContent="center"
      display="flex"
    >
      <Card padding="4" shadow>
        <Box>
          <TradingViewWidget />
        </Box>
      </Card>
      <Card padding="4" shadow>
        <Box padding="2">
          <Text align="left">Collateral in : </Text>
          <Skeleton loading>Hello World</Skeleton>
        </Box>
        <Box padding="2">
          <Text align="left">StETH price : </Text>
          <Skeleton loading>Hello World</Skeleton>
        </Box>
        <Box padding="2">
          <Text align="left">rETH price : </Text>
          <Skeleton loading>Hello World</Skeleton>
        </Box>
        <Box padding="2">
          <Text align="left">Entry price : </Text>
          <Skeleton loading>Hello World</Skeleton>
        </Box>
        <Box padding="2">
          <Text align="left">Liquidation price : </Text>
          <Skeleton loading>Hello World</Skeleton>
        </Box>
      </Card>
    </Box>
  );
}
