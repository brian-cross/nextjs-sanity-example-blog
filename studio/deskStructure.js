import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "./lib/resolveProductionUrl";
import PanoramaRoundedIcon from "@mui/icons-material/PanoramaRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "post")
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: doc => resolveProductionUrl(doc),
        })
        .title("Preview"),
    ]);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Hero")
        .icon(PanoramaRoundedIcon)
        .child(
          S.document().title("Hero").schemaType("hero").documentId("hero")
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          !["hero", "post", "author", "tag"].includes(listItem.getId())
      ),
      S.listItem()
        .title("Blog")
        .icon(FolderRoundedIcon)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Posts")
                .icon(ArticleRoundedIcon)
                .child(S.documentTypeList("post").title("Blog Posts").child()),
              S.listItem()
                .title("Author")
                .icon(PersonRoundedIcon)
                .child(S.documentTypeList("author").title("Authors").child()),
              S.listItem()
                .title("Tags")
                .icon(TagRoundedIcon)
                .child(S.documentTypeList("tag").title("Tags").child()),
            ])
        ),
    ]);
