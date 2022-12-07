import Head from "next/head";

import { getUsersPinnedRepositories } from "./api/gql";
import { InferGetStaticPropsType } from "next/types";
import { Repos } from "./components/repos";
import { Profile } from "./components/profile";

export default function Home({
  pinned,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Stephen Freerking | The Null Dev</title>
        <meta name="description" content="30 - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-full bg-slate-900">
        <div className="container mx-auto md:p-8 md:text-left">
          <div className="flex justify-center">
            <Profile />
          </div>
          <Repos pinned={pinned} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Make a request here using any HTTP library, such as `fetch` or `axios`
  const response = await fetch("http://127.0.0.1:8080/v1/github/repos");
  // const data: Repository[] = (await response.json()).data;
  let pinned = await getUsersPinnedRepositories("Snipey");
  return {
    props: {
      pinned,
      // Return the data as a prop to be used in your page component
      // data,
    },
  };
}
