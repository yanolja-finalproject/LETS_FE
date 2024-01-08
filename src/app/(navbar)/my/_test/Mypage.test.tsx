import { render, screen } from "@/app/test-utils";
import Signin from "../../../my/page";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));
describe("Signin", () => {
  it("로그인 페이지 라는 문구가 있어야 한다.", async () => {
    render(<Signin />);

    const el = screen.getByText("로그인 페이지");

    expect(el).toBeInTheDocument();
  });
});
