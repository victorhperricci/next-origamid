import { getCookie } from "@/actions/get-cookie";
import ServerFetch from "@/components/serverFetch";
import { ShowCookie } from "@/components/showCookie";

export default async function Home() {
  const hasCookie = (await getCookie("token")) !== null;

  return (
    <main>
      <h1>Homeee</h1>
      {/* <Access /> */}
      <ServerFetch />
      {hasCookie && <ShowCookie />}
    </main>
  );
}
