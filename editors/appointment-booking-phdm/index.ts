import type { EditorModule } from "document-model";
import Editor from "./editor.js";
import type { AppointmentBookingDocument } from "../../document-models/appointment-booking/gen/index.js";

export const module: EditorModule<AppointmentBookingDocument> = {
  Component: Editor,
  documentTypes: ["powerhouse/form-appintment"],
  config: {
    id: "AppointmentBookingPhdm",
    disableExternalControls: true,
    documentToolbarEnabled: true,
    showSwitchboardLink: true,
  },
};

export default module;
