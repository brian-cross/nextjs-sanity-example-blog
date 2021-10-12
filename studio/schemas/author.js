export default {
  title: "Author",
  name: "author",
  type: "document",
  fieldsets: [
    {
      name: "social",
      title: "Social Media Handles",
    },
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Avatar",
      name: "avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Bio",
      name: "bio",
      type: "text",
    },
  ],
};
