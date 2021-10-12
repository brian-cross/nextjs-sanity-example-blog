import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

export default {
  title: "Page",
  name: "page",
  type: "document",
  icon: DescriptionRoundedIcon,
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "heading",
      },
    },
  ],
};
