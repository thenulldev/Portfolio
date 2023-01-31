export async function getUsersRunners() {
  const data: Runners = await fetch(
    "https://torch.thenull.dev/v1/github/runners",
    {
      method: "POST",
    }
  ).then((r) => r.json());
  return data;
}

export interface Runners {
  data: Data;
  success: boolean;
}

export interface Data {
  runners: Runner[];
  total_count: number;
}

export interface Runner {
  busy: boolean;
  id: number;
  labels: Label[];
  name: string;
  os: string;
  status: string;
}

export interface Label {
  id: number;
  name: string;
  type: string;
}
