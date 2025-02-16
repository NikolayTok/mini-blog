import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "https://frontend-test-be.stage.thinkeasy.cz/api-json",
    output: {
      target: "./src/api/orval-client.ts",
      client: "fetch",
      mock: false,
      baseUrl: "https://frontend-test-be.stage.thinkeasy.cz/",
    },
  },
});