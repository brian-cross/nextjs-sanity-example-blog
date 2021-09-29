import S from "@sanity/desk-tool/structure-builder";

export default function () {
  return S.list().title("Base").items(S.documentTypeListItems());
}
