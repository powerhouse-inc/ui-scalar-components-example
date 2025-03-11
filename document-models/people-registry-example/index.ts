/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import {
  actions as PeopleRegistryExampleActions,
  PeopleRegistryExample,
} from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  PeopleRegistryExampleState,
  PeopleRegistryExampleAction,
  PeopleRegistryExampleLocalState,
} from "./gen/types";

const Document = PeopleRegistryExample;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...PeopleRegistryExampleActions };

export const module: DocumentModel<
  PeopleRegistryExampleState,
  PeopleRegistryExampleAction,
  PeopleRegistryExampleLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export {
  PeopleRegistryExample,
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export * from "./gen/types";
export * from "./src/utils";
