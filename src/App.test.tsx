import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("testing Table render", () => {
  test("testing table row render", () => {
    const app = render(<App />);
    const table = app.getAllByRole("table");

    expect(table).toBeDefined();
  });
});
