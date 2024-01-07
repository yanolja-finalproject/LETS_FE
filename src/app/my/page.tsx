import BottomNav from "../_component/common/BottomNav";
import UpcomingPackages from "./_component/UpcomingPackages";
import UserInfo from "./_component/UserInfo";
import DefaultHeader from "../_component/common/DefaultHeader";
import ReservationTabContent from "./_component/ReservationTabContent";
import MyReviewTabContent from "./_component/MyReviewTabContent";
import TabsContainer from "../_component/common/TabsContainer";

export function generateMetadata() {
  return { title: "Let's - 마이페이지" };
}

const MyPage = async () => {
  const tabsData = [
    { name: "예약 내역", content: <ReservationTabContent /> },
    { name: "내가 쓴 리뷰", content: <MyReviewTabContent /> },
  ];

  return (
    <section className="w-full flex flex-col">
      <DefaultHeader text="마이페이지" redirectUrl="/" theme="default" />
      <UserInfo />
      <UpcomingPackages />
      <TabsContainer
        tabs={tabsData}
        tabButtonStyle={{
          defaultClass: "py-3 text-black",
          selectedClass:
            "py-3 font-black border-b border-0.5 border-solid border-black",
        }}
      />
      <BottomNav />
    </section>
  );
};

export default MyPage;
