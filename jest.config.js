module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/interface.{ts,tsx}',
    '!**/styles.{ts,tsx}',
    '!**/styles/**',
    '!**/_app.tsx',
    '!**/_document.tsx',
    '!**/pages/**'
  ],
  roots: ['<rootDir>/test', '<rootDir>/src']
}
