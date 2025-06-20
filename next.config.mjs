import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);

initOpenNextCloudflareForDev();
