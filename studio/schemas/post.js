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
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Body",
      name: "body",
      type: "text",
    },
    {
      title: "Authors",
      name: "authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "person" },
        },
      ],
    },
  ],
};
