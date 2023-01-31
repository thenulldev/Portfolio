import { PinnedRepos } from "@api/gql";
import { Runners } from "@api/runners";

export interface AppProps {
  pinned: PinnedRepos;
  runners: Runners;
}
