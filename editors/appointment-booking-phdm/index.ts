import { ExtendedEditor, EditorContextProps } from "document-model-libs";
import Editor from "./editor";
import {
  AppointmentBookingState,
  AppointmentBookingAction,
  AppointmentBookingLocalState,
} from "../../document-models/appointment-booking";

export const module: ExtendedEditor<
  AppointmentBookingState,
  AppointmentBookingAction,
  AppointmentBookingLocalState,
  EditorContextProps
> = {
  Component: Editor,
  documentTypes: ["powerhouse/form-appintment"],
  config: {
    id: "editor-id",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
