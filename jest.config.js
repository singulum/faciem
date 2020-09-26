module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  collectCoverageFrom: [
    '{components,lib,pages}/**/*.{js,jsx,ts,tsx}',
    '!pages/api/__coverage__.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/.storybook/**/*.{js,jsx,ts,tsx}',
    '!**/tests/**/*.{js,jsx,ts,tsx}',
  ],
  coverageReporters: ['json', 'lcov', 'text'],
}
