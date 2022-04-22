import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FiFolder, FiGitBranch, FiStar } from "react-icons/fi";
import { MdCircle } from "react-icons/md";
import { GithubRepoDTO } from "../../../interfaces/github/githubRepo.dto";
import { DefaultCard } from "../../components/Cards/DefaultCard";

type ProjectsListProps = {
  projects: GithubRepoDTO[];
};
export const ProjectsList = ({ projects }: ProjectsListProps) => {
  const columnsCount = useBreakpointValue({ base: 1, md: 2, xl: 3, "2xl": 4 });
  return (
    <Grid
      gridTemplateColumns={`repeat(${columnsCount}, 1fr)`}
      alignSelf="flex-start"
      gap={2}
      w="100%"
    >
      {projects.map((project) => (
        <GridItem key={project.id} columnGap={1} flex={1}>
          <DefaultCard p={6} flex={1} w="100%" h="100%">
            <Link href={project.svn_url} isExternal flex={1} w="100%" h="100%">
              <VStack align="flex-start" flex={1}>
                <HStack>
                  <Icon as={FiFolder} />
                  <Heading as="h4" size={"sm"}>
                    {project.name}
                  </Heading>
                </HStack>
                <HStack>{project.description}</HStack>
                <HStack justify="space-between" w="100%" mt={4}>
                  <HStack w="100%">
                    <HStack>
                      <Icon as={FiStar} />
                      <Text fontSize="md">{project.forks_count}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FiGitBranch} />
                      <Text fontSize="md">{project.open_issues_count}</Text>
                    </HStack>
                  </HStack>
                  {project.language && (
                    <HStack>
                      <Icon as={MdCircle} color="PRIMARY_COLOR" />
                      <Text fontSize="md">{project.language}</Text>
                    </HStack>
                  )}
                </HStack>
              </VStack>
            </Link>
          </DefaultCard>
        </GridItem>
      ))}
    </Grid>
  );
};
