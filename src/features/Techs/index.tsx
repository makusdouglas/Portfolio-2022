import { Badge, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { userInfo } from "../../../utils/userInfo";
import { DefaultCard } from "../../components/Cards/DefaultCard";

type Props = {};

export const Techs = (props: Props) => {
  return (
    <DefaultCard p={6} width="100%">
      <Heading size="md" color="PRIMARY_COLOR">
        Technologies
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={4}>
        {userInfo.techs.map((tech) => (
          <GridItem key={tech}>
            <Badge w="100%" textAlign="center" p="1" rounded="md">
              {tech}
            </Badge>
          </GridItem>
        ))}
      </Grid>
    </DefaultCard>
  );
};
