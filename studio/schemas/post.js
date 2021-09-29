export default {
  title: "Blog Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "URL Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Published Date",
      name: "publishedDate",
      type: "datetime",
    },
    {
      title: "Main Image",
      name: "mainImage",
      type: "image",
      fields: [
        {
          title: "Alt Text",
          name: "altText",
          description: "Important for SEO and accessibility",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: { type: "author" },
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "tag" },
        },
      ],
    },
  ],
};
