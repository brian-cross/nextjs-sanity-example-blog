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
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          title: "Alt Text",
          name: "altText",
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
      type: "text",
    },
    {
      title: "Rich Text",
      name: "richText",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Authors",
      name: "authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "author" },
        },
      ],
    },
  ],
};
