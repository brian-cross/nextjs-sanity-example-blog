const previewSecret =
  "UEW2eHklPn5x3KFcCqIs7sdk2ZGmShyJ6yex5KFeeXCtWWnLSt7HJWCqtJRiKuPr4x66oVqv3ZRTD3KWf66kAfHO8svvinDt01ccSL13GayxsLX0OvLmHa0udoWKz4qp";

const remoteUrl = `https://nextjs-sanity-example-blog.vercel.app`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(document) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, document?.slug?.current ?? `/`);

  return previewUrl.toString();
}
