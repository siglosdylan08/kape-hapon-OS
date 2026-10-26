import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";
import HealthPage from "./health/page";

describe("public foundation pages", () => {
  it("identifies the product and links to health without claiming operational readiness", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: /different branches/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view application health/i })).toHaveAttribute("href", "/health");
    expect(screen.getByText(/operational modules are not enabled/i)).toBeInTheDocument();
  });
  it("explains that database connectivity is not checked", () => {
    render(<HealthPage />);
    expect(screen.getByRole("heading", { level: 1, name: "Application health" })).toBeInTheDocument();
    expect(screen.getByText(/not checked/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/");
  });
});
