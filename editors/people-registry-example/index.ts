import type { EditorModule } from "document-model";
import Editor from "./editor.js";
import type { PeopleRegistryExampleDocument } from "../../document-models/people-registry-example/gen/index.js";

export const module: EditorModule<PeopleRegistryExampleDocument> = {
  Component: Editor,
  documentTypes: ["powerhouse/form-examples"],
  config: {
    id: "PeopleRegistryExample",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
