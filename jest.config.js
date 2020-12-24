module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}',
  ],
  modulePathIgnorePatterns: [
    'store/index.js',
    'src/main.js',
    'node_modules',
  ]
}