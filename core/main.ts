import { Api } from "./lib/api";
import { GithubService } from "./services/github.service";

const GithubserviceStarted = new GithubService(Api);

export { GithubserviceStarted };
