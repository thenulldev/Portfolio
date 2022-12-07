export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  type: string;
  site_admin: boolean;
}

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: Owner;
  private: boolean;
  description: string;
  fork: boolean;
  url: string;
  homepage: string;
  language?: any;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  pushed_at: Date;
  created_at: Date;
  updated_at: Date;
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
