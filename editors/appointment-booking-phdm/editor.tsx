import type { EditorProps } from "document-model";
import {
  type AppointmentBookingDocument,
  actions,
} from "../../document-models/appointment-booking/gen/index.js";
import NewAppointmentBookingForm from "./components/new-appointment-booking-form.js";
import AppointmentList from "./components/appoinmet-list.js";
import { useCallback } from "react";

export type IProps = EditorProps<AppointmentBookingDocument>;

export default function Editor(props: IProps) {
  const dispatch = props.dispatch;
  const handleDelete = useCallback(
    (id: string) => {
      if (window.confirm("Are you sure you want to delete this appointment?")) {
        dispatch(actions.removeAppointment({ id }));
      }
    },
    [dispatch],
  );
  const onUpdateDate = useCallback(
    (id: string, date: string) => {
      dispatch(actions.updateAppoinment({ id, appointmentDate: date }));
    },
    [dispatch],
  );
  const onUpdateTime = useCallback(
    (id: string, time: string) => {
      dispatch(actions.updateAppoinment({ id, appointmentTime: time }));
    },
    [dispatch],
  );

  const onUpdateName = useCallback(
    (id: string, name: string) => {
      dispatch(actions.updateAppoinment({ id, fullName: name }));
    },
    [dispatch],
  );
  const onUpdateDateTime = useCallback(
    (id: string, datetime: string) => {
      dispatch(actions.updateAppoinment({ id, appointmentDateTime: datetime }));
    },
    [dispatch],
  );
  const onUpdateCurrencyCode = useCallback(
    (id: string, currencyCode: string) => {
      dispatch(actions.updateAppoinment({ id, currency: currencyCode }));
    },
    [dispatch],
  );

  return (
    <div className="flex gap-4 mt-2 overflow-y-scroll">
      <NewAppointmentBookingForm dispatch={dispatch} />
      <AppointmentList
        appointments={props.document.state.global.bookings}
        onDelete={handleDelete}
        onUpdateCurrencyCode={onUpdateCurrencyCode}
        onUpdateDate={onUpdateDate}
        onUpdateDateTime={onUpdateDateTime}
        onUpdateName={onUpdateName}
        onUpdateTime={onUpdateTime}
      />
    </div>
  );
}
