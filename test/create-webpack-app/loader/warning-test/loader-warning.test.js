"use strict";

const { createPathDependentUtils } = require("../../test.utils");

const { run } = createPathDependentUtils("webpack-cli");

describe("loader warning test", () => {
  it("should not ignore loader's warning and exit with a non zero exit code", async () => {
    const { stdout, exitCode } = await run(__dirname, [], false);

    expect(stdout).toContain("[1 warning]");
    expect(stdout).toContain("This is a warning");
    expect(exitCode).toBe(0);
  });
});
