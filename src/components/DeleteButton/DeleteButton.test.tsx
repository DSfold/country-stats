import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table } from "../Table/Table";

describe("testing Table render", () => {
  test("testing table row render", () => {
    const table = render(<Table />);
    const tableRow = table.getAllByRole("tableRow");

    expect(1).toBeDefined();
  });
});
