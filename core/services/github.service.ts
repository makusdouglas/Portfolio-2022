import { GithubRepoDTO } from "../../interfaces/github/githubRepo.dto";
import { GitHubUserDTO } from "../../interfaces/github/githubUser.dto";
import { IApi } from "../lib/api";

export class GithubService {
  private GITHUB_BASEURL?: string;
  constructor(private api: IApi) {
    this.GITHUB_BASEURL = process.env.GITHUB_BASEURL;
  }

  async getUser(userName: string) {
    return this.api<GitHubUserDTO>(`${this.GITHUB_BASEURL}/users/${userName}`);
  }

  async getLastProjects(
    userName: string,
    searchParams?: { [key: string]: any }
  ) {
    const search = searchParams ? this.preparaSearchParams(searchParams) : null;
    return this.api<GithubRepoDTO[]>(
      `${this.GITHUB_BASEURL}/users/${userName}/repos${search}`
    );
  }

  preparaSearchParams(searchParams: { [key: string]: any }) {
    const params = Object.entries(searchParams);
    let joinedparams = params.map((p) => p.join("=")).join("&");
    if (joinedparams) joinedparams = `?${joinedparams}`;

    return encodeURI(joinedparams.trim());
  }
}
