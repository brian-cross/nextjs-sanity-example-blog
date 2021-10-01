import BlockContent from "@sanity/block-content-to-react";

export default function PostBody({ content }) {
  return (
    <>
      {content && (
        <BlockContent
          projectId={process.env.SANITY_PROJECT_ID}
          dataset={process.env.SANITY_DATASET}
          blocks={content}
        />
      )}
    </>
  );
}
