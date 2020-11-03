export default {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageReporters: ["lcov"],
  roots: ["<rootDir>/src/"],
  collectCoverage: true,
};
