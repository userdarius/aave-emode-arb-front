import * as React from "react";
import { Button, Box, Range, Text, Input } from "degen";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export function Craft() {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "CONTRACT_ADDRESS",
    abi: [
      {
        name: "craft",
        type: "function",
        stateMutability: "payable",
        inputs: [],
        outputs: [],
      },
    ],
    functionName: "craft",
  });

  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <Box padding="3" justifyContent="flex-start">
        <Button disabled={!write || isLoading} onClick={() => write()}>
          {isLoading ? "Crafting..." : "Craft"}
        </Button>
        <Box padding="5">
          <Input
            label="Deposit amount"
            placeholder="420"
            type="number"
            units="ETH"
          />
        </Box>
        <Box padding="5">
          <Box padding="2">
            <Text align="left">Leverage : </Text>
          </Box>
          <Range />
        </Box>
      </Box>
      <Box padding="3">
        {isSuccess && (
          <div>
            Successfully crafted your position!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && (
          <Box padding="1">Error: {(prepareError || error)?.message}</Box>
        )}
      </Box>
    </div>
  );
}
