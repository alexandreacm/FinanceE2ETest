/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["node_modules/(?!(react-native" + ")/)"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  testPathIgnorePatterns: [
    "<rootDir>/ios",
    "<rootDir>/android",
    "<rootDir>/node_modules",
  ],
};
