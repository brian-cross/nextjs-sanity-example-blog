import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import author from "./author";
import post from "./post";
import tag from "./tag";

export default createSchema({
  name: "blogSchema",
  types: schemaTypes.concat([post, author, tag]),
});
