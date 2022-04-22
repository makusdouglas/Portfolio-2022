import { Flex } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { GithubserviceStarted } from "../core/main";
import { GithubRepoDTO } from "../interfaces/github/githubRepo.dto";
import { GitHubUserDTO } from "../interfaces/github/githubUser.dto";
import { HomeTemplate } from "../src/templates/Home";

interface HomeProps {
  user: GitHubUserDTO;
  projects: GithubRepoDTO[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (ctx) => {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const githubUser = await GithubserviceStarted.getUser(GITHUB_USERNAME ?? "");
  const githubRepos = await GithubserviceStarted.getLastProjects(
    GITHUB_USERNAME ?? "",
    {
      type: "owner",
      sort: "created",
      per_page: 5,
      page: 1,
    }
  );

  return {
    props: {
      user: githubUser,
      projects: githubRepos,
    },
  };
};
const Home: NextPage<HomeProps> = ({ user, projects }) => {
  return (
    <Flex flex={1} minH="calc(100vh - 100px)">
      <Head>
        <title>Portifolio</title>
        <meta name="description" content="Home page of my portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate user={user} projects={projects} />
    </Flex>
  );
};

export default Home;
