/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'none';
  script-src 'self' 'unsafe-eval';
  frame-ancestors 'none';
  style-src 'unsafe-inline';
  font-src 'self';
  img-src 'self' https://via.placeholder.com data:;
  connect-src 'self' https://jsonplaceholder.typicode.com/;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
  },
  compiler: {
    reactRemoveProperties: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
