module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}',
  ],
  modulePathIgnorePatterns: [
    'src/main.js',
    'node_modules',
  ]
}