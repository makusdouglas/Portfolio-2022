import { Badge } from "@chakra-ui/react";
import React from "react";
import { DefaultCard } from "../../components/Cards/DefaultCard";

type Props = {};

export const Experiences = (props: Props) => {
  return (
    <DefaultCard p={6} width="100%">
      <Badge>Java</Badge>
    </DefaultCard>
  );
};
