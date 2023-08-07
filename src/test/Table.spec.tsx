import { describe, expect, test } from "vitest";
import { Table } from "../components/Table/Table";
import { render } from "./general";

describe("testing Table render", () => {
  test("testing table row render", () => {
    const table = render(<Table />);
    const earth = table.getByRole("earth");

    expect(earth).toBeDefined();
  });
});
