import { render, screen } from "@/app/test-utils";
import Home from "@/app/page";

describe("Home", () => {
  it("hi 라는 문구가 있어야 한다.", async () => {
    render(await Home());

    const el = screen.getByText("hi");

    expect(el).toBeInTheDocument();
  });
});
