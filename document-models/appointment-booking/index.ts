/**
 * This is a scaffold file meant for customization.
 * Delete the file and run the code generator again to have it reset
 */

import { actions as BaseActions, DocumentModel } from "document-model/document";
import {
  actions as AppointmentBookingActions,
  AppointmentBooking,
} from "./gen";
import { reducer } from "./gen/reducer";
import { documentModel } from "./gen/document-model";
import genUtils from "./gen/utils";
import * as customUtils from "./src/utils";
import {
  AppointmentBookingState,
  AppointmentBookingAction,
  AppointmentBookingLocalState,
} from "./gen/types";

const Document = AppointmentBooking;
const utils = { ...genUtils, ...customUtils };
const actions = { ...BaseActions, ...AppointmentBookingActions };

export const module: DocumentModel<
  AppointmentBookingState,
  AppointmentBookingAction,
  AppointmentBookingLocalState
> = {
  Document,
  reducer,
  actions,
  utils,
  documentModel,
};

export { AppointmentBooking, Document, reducer, actions, utils, documentModel };

export * from "./gen/types";
export * from "./src/utils";
