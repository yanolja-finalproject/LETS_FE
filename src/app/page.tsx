import getHi from "@/api/home/getHi";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import BottomNav from "./_component/BottomNav";
import Count from "./_component/Count";
import SayHi from "./_component/SayHi";

const Home = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["hi"], queryFn: getHi });
  const dehydrateState = dehydrate(queryClient);

  return (
    <section>
      <h1>메인 페이지</h1>
      <HydrationBoundary state={dehydrateState}>
        <SayHi />
      </HydrationBoundary>
      <Count />
      <BottomNav />
    </section>
  );
};

export default Home;
