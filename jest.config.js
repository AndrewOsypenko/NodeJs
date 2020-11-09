export default {
    testEnvironment: 'node',
    setupFiles: ["dotenv/config"],
    transform: {
        '.js': 'jest-esm-transformer',
    }
};