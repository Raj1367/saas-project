/** @type {import('next').NextConfig} */
/** @type {import('webpack').Configuration} */
const nextConfig = {
  webpack( config:any) {
    // Find the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(
      (rule:any) => rule.test instanceof RegExp && String(rule.test).includes("svg")
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
};

export default nextConfig;
