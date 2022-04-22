import {
  Avatar,
  Badge,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  useBreakpoint,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useMemo } from "react";
import { StringUtils } from "../../../core/utils/stringUtils";
import { GitHubUserDTO } from "../../../interfaces/github/githubUser.dto";
import { DefaultCard } from "../../components/Cards/DefaultCard";
import {} from "@chakra-ui/icons";
import { FiLinkedin } from "react-icons/fi";
import { MdMyLocation, MdWorkOutline } from "react-icons/md";
import { userInfo } from "../../../utils/userInfo";
import { GithubRepoDTO } from "../../../interfaces/github/githubRepo.dto";
import { ProjectsList } from "../../features/Projects";
import { Experiences } from "../../features/Experiences";
import { Techs } from "../../features/Techs";

type Props = {
  user: GitHubUserDTO;
  projects?: GithubRepoDTO[];
};
export const HomeTemplate = ({ user, projects }: Props) => {
  const { firstName, lastName, middleNameInitials } = useMemo(
    () => StringUtils.splitName(user.name),
    [user.name]
  );

  if (!user)
    return (
      <Center flex="1" minH="100%">
        <Heading>404</Heading>
      </Center>
    );

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      flex={1}
      m={{ base: 4, sm: 6 }}
      gap={4}
    >
      <VStack as="aside" gap={2} flex={{ base: "1", lg: "none" }}>
        <DefaultCard p={6} width="100%">
          <VStack>
            <Avatar
              size={"full"}
              maxW={60}
              name={user.name}
              src={user.avatar_url}
              borderWidth="3px"
              borderStyle="solid"
              borderColor="ACCENT_COLOR"
            />
            <Heading
              as="h3"
              size="md"
              textTransform="capitalize"
              color="PRIMARY_COLOR"
            >{`${firstName} ${middleNameInitials} ${lastName}`}</Heading>
            <Badge colorScheme="green">{userInfo.position}</Badge>
            <Text
              color="PRIMARY_COLOR"
              fontSize="sm"
              fontWeight="light"
              textAlign="justify"
              maxW="280px"
            >
              {user.bio}
            </Text>
          </VStack>
        </DefaultCard>

        <DefaultCard p={6} width="100%">
          <VStack align="flex-start" rowGap={3}>
            <HStack rowGap={2}>
              <Icon as={MdMyLocation} color="PRIMARY_COLOR" boxSize="7" />
              <Badge>{userInfo.location.city}</Badge>
              <Badge>{userInfo.location.state}</Badge>
              <Badge>{userInfo.location.country}</Badge>
            </HStack>
            <HStack rowGap={2} align="center">
              <Icon as={MdWorkOutline} color="PRIMARY_COLOR" boxSize="7" />
              <Link
                as="a"
                href={userInfo.workplaceWebSite}
                color="PRIMARY_COLOR"
                fontSize="sm"
                target="_blank"
              >
                {userInfo.workAt}
              </Link>
            </HStack>
            {Object.entries(userInfo.social).map(([key, value]) => (
              <HStack key={key} rowGap={2} align="center">
                <Icon as={value.icon} color="PRIMARY_COLOR" boxSize="7" />
                <Link
                  as="a"
                  href={value.link}
                  color="PRIMARY_COLOR"
                  fontSize="sm"
                  target="_blank"
                >
                  {value.userName}
                </Link>
              </HStack>
            ))}
          </VStack>
        </DefaultCard>

        <Techs />
      </VStack>

      <VStack as="main" flex={1}>
        <DefaultCard p={6} width="100%">
          <HStack justify="space-between">
            <Heading as="h3" size="md" color="PRIMARY_COLOR">
              Latest Projects
            </Heading>
            <NextLink href={"#"} passHref>
              <Link>See all</Link>
            </NextLink>
          </HStack>
        </DefaultCard>

        <ProjectsList projects={projects ?? []} />
      </VStack>
    </Flex>
  );
};
