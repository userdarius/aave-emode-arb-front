import React from "react";
import { Craft } from "./Craft";
import { Unwind } from "./Unwind";
import { FieldSet, Input, Box, Card } from "degen";

export function Dashboard() {
  return (
    <Box
      alignSelf="center"
      padding="4"
      display="flex"
      gap="5"
      justifyContent="center"
    >
      <Card padding="4" shadow>
        <Craft />
      </Card>
      <Card padding="4" shadow>
        <Unwind />
      </Card>
    </Box>
  );
}
