/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Find the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test instanceof RegExp && String(rule.test).includes("svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reapply the existing rule, but only for SVG imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // Matches *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer || /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // Exclude if *.svg?url
          use: ["@svgr/webpack"],
        }
      );

      // Modify the file loader rule to ignore *.svg since we have handled it separately
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },

  // ...other config
};

export default nextConfig;