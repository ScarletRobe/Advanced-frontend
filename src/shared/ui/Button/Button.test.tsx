import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("Test render", () => {
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
