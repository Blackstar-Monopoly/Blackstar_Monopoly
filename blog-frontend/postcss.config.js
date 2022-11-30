module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: { config: "./tailwindcss.config.js" },
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
    autoprefixer: {},
  },
};
