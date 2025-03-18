/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  AddAppointmentInput,
  RemoveAppointmentInput,
  UpdateAppoinmentInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/appointment-booking/creators";
import { AppointmentBookingDocument } from "../../gen/types";

describe("AppointmentBooking Operations", () => {
  let document: AppointmentBookingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addAppointment operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAppointmentInput = generateMock(
      z.AddAppointmentInputSchema(),
    );

    const updatedDocument = reducer(document, creators.addAppointment(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_APPOINTMENT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeAppointment operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveAppointmentInput = generateMock(
      z.RemoveAppointmentInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.removeAppointment(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "REMOVE_APPOINTMENT",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle updateAppoinment operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateAppoinmentInput = generateMock(
      z.UpdateAppoinmentInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateAppoinment(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_APPOINMENT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
