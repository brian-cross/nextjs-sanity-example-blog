// import { FaRegImage } from "react-icons/fa";

export default {
  title: "Hero",
  name: "hero",
  type: "document",
  // icon: FaRegImage,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Tag Line",
      name: "tagLine",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
