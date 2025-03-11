import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  PeopleRegistryExampleState,
  PeopleRegistryExampleAction,
  PeopleRegistryExampleLocalState,
} from "../../document-models/people-registry-example";

export const module: ExtendedEditor<
  PeopleRegistryExampleState,
  PeopleRegistryExampleAction,
  PeopleRegistryExampleLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["powerhouse/form-examples"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
