import * as React from "react";
import { Box, Button } from "degen";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export function Unwind() {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "CONTRACT_ADDRESS",
    abi: [
      {
        name: "unwind",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: [],
      },
    ],
    functionName: "unwind",
  });

  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <Box padding="3" justifyContent="flex-start">
        <Button
          justify-content="center"
          disabled={!write || isLoading}
          onClick={() => write()}
        >
          {isLoading ? "Unwinding Position..." : "Unwind Position"}
        </Button>
      </Box>
      <Box padding="3">
        {isSuccess && (
          <div>
            Successfully unwinded your position!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}
      </Box>
    </div>
  );
}
