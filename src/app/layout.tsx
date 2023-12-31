import type { Metadata } from "next";
import MSWProvider from "./_component/MSWProvider";
import RQProvider from "./_component/RQProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let's",
  icons: {
    icon: "/mainLogo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <MSWProvider />
        <RQProvider>
          <main>{children}</main>
        </RQProvider>
      </body>
    </html>
  );
};

export default RootLayout;
