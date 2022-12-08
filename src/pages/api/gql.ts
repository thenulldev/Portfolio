export async function getUsersPinnedRepositories(username: string) {
  const query = `
    {
      user(login: "${username}") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name,
                description,
                stargazerCount,
                forkCount,
                primaryLanguage {
                  name,
                  color
                },
                pushedAt,
                url
              }
            }
          }
        }
      }
    }
  `;

  let token = process.env.GH_PAT;
  const data: Root = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
    }),
    headers: {
      authorization: `token ${token}`,
      "user-agent": "NullDev-Frontend",
      "content-type": "application/json",
    },
  }).then((r) => r.json());
  // console.log(data);
  return data.data.user.pinnedItems.edges.map((item) => ({
    name: item.node.name,
    description: item.node.description,
    stargazerCount: item.node.stargazerCount,
    forkCount: item.node.forkCount,
    primaryLanguage: item.node.primaryLanguage,
    pushedAt: item.node.pushedAt,
    url: item.node.url,
  }));
}

export interface Root {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  pinnedItems: PinnedItems;
}

export interface PinnedItems {
  totalCount: number;
  edges: Edge[];
}

export interface Edge {
  node: Repo;
}

export interface Repo {
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: PrimaryLanguage;
  pushedAt: string;
  url: string;
}

export interface PrimaryLanguage {
  name: string;
  color: string;
}
