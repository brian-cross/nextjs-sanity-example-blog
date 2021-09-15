const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-09-14",
  token: process.env.SANITY_TOKEN,
  useCdn: true,
});

export default client;
