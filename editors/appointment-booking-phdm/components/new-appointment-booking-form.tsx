import {
  AppointmentBookingAction,
  actions,
} from "../../../document-models/appointment-booking";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";
import {
  Form,
  BooleanField,
  NumberField,
  StringField,
  IdField,
  CountryCodeField,
  DatePickerField,
  TimePickerField,
  DateTimeField,
} from "@powerhousedao/design-system/scalars";
import { useCallback } from "react";

interface NewAppointmentBookingFormProps {
  readonly dispatch: (action: AppointmentBookingAction) => void;
}
type NewAppointmentBookingFormData = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  appointmentDateTime: string;
  appointmentDate: string;
  appointmentTime: string;
  fee: number;
  countryCode: string;
  receiveNotification: boolean;
};

export default function NewAppointmentBookingForm({
  dispatch,
}: NewAppointmentBookingFormProps) {
  const onSubmit = useCallback((data: NewAppointmentBookingFormData) => {
    dispatch(actions.addAppointment(data));
  }, []);
  return (
    <Form
      className="max-w-[700px] w-full min-w-[300px]"
      defaultValues={{
        fullName: "",
        email: "",
        phone: "",
        appointmentDateTime: "",
        appointmentDate: "",
        appointmentTime: "",
        fee: 0,
        countryCode: "",
        receiveNotification: false,
      }}
      key={documentModelUtils.hashKey()}
      onSubmit={onSubmit}
      resetOnSuccessfulSubmit
    >
      <div className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Book an Appointment</h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Personal Information
          </h2>
          <p className="text-gray-600 mb-4">
            Please provide your contact details so we can communicate about your
            appointment.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <IdField />
            <StringField label="Full Name" name="fullName" required />
            <StringField
              label="Email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <StringField
              label="Phone"
              name="phone"
              placeholder="(123) 456-7890"
              required
            />
            <CountryCodeField
              label="Country"
              name="countryCode"
              placeholder="Select your country"
            />
            <NumberField
              label="Fee"
              name="fee"
              placeholder="100.00"
              precision={2}
            />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Appointment Details</h2>
          <p className="text-gray-600 mb-4">
            Please select your preferred date and time for the appointment. Use
            the calendar and time selector to choose the most convenient time
            for you.
          </p>

          <DateTimeField
            description="Select the exact date and time of your appointment."
            label="Primary Date & Time"
            name="appointmentDateTime"
            required
          />

          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-2">
            Alternative Date & Time
          </h3>
          <p className="text-gray-600 mb-4">
            Please select an alternative date and time in case your first
            preference is not available. This will help us find the best time
            for your appointment.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <DatePickerField
              description="Select an alternative date."
              label="Alternative Date"
              name="appointmentDate"
              required
            />
            <TimePickerField
              description="Select an alternative time."
              label="Alternative Time"
              name="appointmentTime"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
          <p className="text-gray-600 mb-4">
            Choose if you'd like to receive updates about your appointment.
          </p>
          <BooleanField
            defaultValue={false}
            description="Receive notifications about your appointment."
            isToggle
            label="Receive Notifications"
            name="receiveNotification"
          />
        </div>

        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
