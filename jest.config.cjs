module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    moduleNameMapping: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.(ts|tsx)$": ["ts-jest", {
            useESM: true,
        }],
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/index.ts"],
    testMatch: ["<rootDir>/src/**/__tests__/**/*.{ts,tsx}", "<rootDir>/src/**/*.(test|spec).{ts,tsx}"],
}