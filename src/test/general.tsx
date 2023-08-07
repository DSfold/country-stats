import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "@src/features/api/apiSlice";
import { render as testingRender } from "@testing-library/react";

export const render = (
  ...[element, options]: Parameters<typeof testingRender>
) =>
  testingRender(<ApiProvider api={apiSlice}>{element}</ApiProvider>, options);
