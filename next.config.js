/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

const ContentSecurityPolicy = `
  default-src 'self'; 
  script-src 'self' ${isProd ? "" : "'unsafe-eval'"};
  frame-ancestors 'none';
  style-src 'self' 'unsafe-inline' https://phenomenal-bubblegum-0db0bd.netlify.app;
  font-src 'self';
  img-src 'self' https://via.placeholder.com data:;
  connect-src 'self' https://jsonplaceholder.typicode.com/;
  form-action 'none';
  base-uri 'none';"
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
    formats: ["image/avif", "image/webp"],
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
  async redirects() {
    return [
      {
        source: "/photos",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
