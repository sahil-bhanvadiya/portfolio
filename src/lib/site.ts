export const SITE_URL = "https://sahilbhanvadiya.vercel.app";
export const SITE_NAME = "Sahil Bhanvadiya Portfolio";
export const AUTHOR_NAME = "Sahil Bhanvadiya";
export const TWITTER_HANDLE = "@sahil_bhanvadia";
export const DEFAULT_OG_IMAGE = "/og-image.png";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
