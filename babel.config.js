module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@vue/app",
      {
        useBuiltIns: "entry"
      }
    ]
  ],
  env: {
    test: {
      presets: [["env", { targets: { node: "current" } }]],
      plugins: ["require-context-hook"]
    }
  }
};
