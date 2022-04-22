import { Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { DefaultCotainer } from "../../components/Containers/DefaultContainer";

type Props = {};

export const HeaderFeature: NextPage<Props> = (props) => {
  return (
    <DefaultCotainer
      flex={1}
      p="15px 20px"
      pos="sticky"
      top={0}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      boxShadow="lg"
      zIndex={"banner"}
    >
      <Heading as="h2" size="lg" color="purple.100">
        Portfolio
      </Heading>
      <Flex>
        <Button as="a" cursor="pointer" href="mailto:makusdouglas@gmail.com">
          Contact me
        </Button>
      </Flex>
    </DefaultCotainer>
  );
};
