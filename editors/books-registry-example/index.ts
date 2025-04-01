import type { EditorModule } from "document-model";
import Editor from "./editor.js";
import type { BooksRegistryExampleDocument } from "../../document-models/books-registry-example/gen/index.js";

export const module: EditorModule<BooksRegistryExampleDocument> = {
  Component: Editor,
  documentTypes: ["powerhouse/ui-example"],
  config: {
    id: "BooksRegistryExample",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
