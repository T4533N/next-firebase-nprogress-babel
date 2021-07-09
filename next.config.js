// const nextTranslate = require("next-translate");

// bundle analyzer
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// const { locales, defaultLocale } = require("./i18n");

const config = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && isServer) {
      // generate sitemap on the server side
      require("./scripts/generate-sitemap");
    }

    // replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },

  // see: https://nextjs.org/docs/advanced-features/i18n-routing
  // i18n: {
  //   locales, // languages that need to be supported
  //   defaultLocale,
  // },

  pageExtensions: ["ts", "tsx", "mdx", "jsx", "js"],
  target: "serverless",
  reactStrictMode: true,
  serverless: true,
  poweredByHeader: false,
};

// module.exports = withBundleAnalyzer(nextTranslate(config));
module.exports = withBundleAnalyzer(config);
