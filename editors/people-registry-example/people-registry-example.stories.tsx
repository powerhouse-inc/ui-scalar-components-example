import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as PeopleRegistryExampleModule from "../../document-models/people-registry-example";

const { meta, CreateDocumentStory: PeopleRegistryExample } =
  createDocumentStory(
    Editor,
    PeopleRegistryExampleModule.reducer,
    PeopleRegistryExampleModule.utils.createDocument(),
  );
export { PeopleRegistryExample };

export default { ...meta, title: "People Registry Example" };
