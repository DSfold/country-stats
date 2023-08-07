import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const baseUrl = "https://countriesnow.space/api/v0.1/";

const handlers = [
  rest.get(`${baseUrl}/countries/flag/images`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
