import type { Config } from "jest"

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: ["**/*.test.ts?(x)"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.jest.json",
        },
    },
}

export default config
