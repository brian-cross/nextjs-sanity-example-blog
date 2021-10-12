import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import author from "./author";
import hero from "./hero";
import page from "./page";
import post from "./post";
import tag from "./tag";

export default createSchema({
  name: "blogSchema",
  types: schemaTypes.concat([hero, page, post, author, tag]),
});
