import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table } from "../components/Table/Table";

describe("testing Table render", () => {
  test("testing table row render", () => {
    const table = render(<Table />);
    const earth = table.getByRole("earth");

    expect(earth).toBeDefined();
  });
});
