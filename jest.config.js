/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/src/**/**.test.ts"],
    passWithNoTests: true,
    verbose: true,
};
