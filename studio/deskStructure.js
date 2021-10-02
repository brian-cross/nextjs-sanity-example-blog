import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "./lib/resolveProductionUrl";
import PanoramaRoundedIcon from "@mui/icons-material/PanoramaRounded";

export const getDefaultDocumentNode = () => {
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
        listItem => !["hero"].includes(listItem.getId())
      ),
    ]);
