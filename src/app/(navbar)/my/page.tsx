import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import TabsContainer from "@/app/_component/common/layout/TabsContainer";
import BottomNav from "@/app/_component/common/layout/BottomNav";
import ReservationTabContent from "./_component/ReservationTabContent";
import MyReviewTabContent from "./_component/MyReviewTabContent";
import UserInfo from "./_component/UserInfo";
import UpcomingPackages from "./_component/UpcomingPackages";

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
      <DefaultHeader
        text="마이페이지"
        redirectUrl="/"
        theme="default"
        iconSrc="/icons/dotMenuIcon.svg"
        iconUrl="/my/menu"
        iconAlt="메뉴 아이콘"
      />
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
