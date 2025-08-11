/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it.skip("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /ola/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
