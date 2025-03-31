import Editor from "./editor";
import { createDocumentStory } from "document-model-libs/utils";

import * as AppointmentBookingModule from "../../document-models/appointment-booking";

const { meta, CreateDocumentStory: AppointmentBooking } = createDocumentStory(
  Editor,
  AppointmentBookingModule.reducer,
  AppointmentBookingModule.utils.createDocument(),
);
export { AppointmentBooking };

export default { ...meta, title: "Appointment Booking Phdm" };
