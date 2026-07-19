// Export statique → déployable sur GitHub Pages (site coété par l'IA).
// En CI (Pages), le site est servi sous /openwebpublic ; en local, à la racine.
const repo = 'openwebpublic';
const onCI = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: onCI ? `/${repo}` : '',
  assetPrefix: onCI ? `/${repo}/` : '',
};

export default nextConfig;
