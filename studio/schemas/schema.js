import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import post from "./post";
import person from "./person";

export default createSchema({
  name: "blogSchema",
  types: schemaTypes.concat([post, person]),
});
