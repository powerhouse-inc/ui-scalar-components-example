/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type AppointmentBookingAppointmentBookingOperations } from "../../gen/appointment-booking/operations.js";

export const reducer: AppointmentBookingAppointmentBookingOperations = {
  addAppointmentOperation(state, action, dispatch) {
    state.bookings.push({
      ...action.input,
    });
  },
  removeAppointmentOperation(state, action, dispatch) {
    state.bookings = state.bookings.filter(
      (booking) => booking.id !== action.input.id,
    );
  },
  updateAppoinmentOperation(state, action, dispatch) {
    const booking = state.bookings.find(
      (booking) => booking.id === action.input.id,
    );
    if (!booking) {
      throw new Error(`Booking with id ${action.input.id} not found`);
    }
    if (action.input.fullName) {
      booking.fullName = action.input.fullName;
    }
    if (action.input.email) {
      booking.email = action.input.email;
    }
    if (action.input.phone) {
      booking.phone = action.input.phone;
    }
    if (action.input.appointmentDateTime) {
      booking.appointmentDateTime = action.input.appointmentDateTime;
    }
    if (action.input.appointmentDate) {
      booking.appointmentDate = action.input.appointmentDate;
    }
    if (action.input.appointmentTime) {
      booking.appointmentTime = action.input.appointmentTime;
    }
    if (action.input.fee) {
      booking.fee = action.input.fee;
    }
    if (action.input.countryCode) {
      booking.countryCode = action.input.countryCode;
    }
    if (action.input.receiveNotification) {
      booking.receiveNotification = action.input.receiveNotification;
    }
    if (action.input.currency) {
      booking.currency = action.input.currency;
    }
  },
};
