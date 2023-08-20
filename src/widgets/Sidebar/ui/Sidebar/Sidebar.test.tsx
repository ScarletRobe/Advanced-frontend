import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("Test render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("Test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    const sidebarBtn = screen.getByTestId("sidebar_toggle");
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(sidebarBtn);
    expect(sidebar).toHaveClass("collapsed");
  });
});
