import { EditorProps } from "document-model/document";
import {
  AppointmentBookingState,
  AppointmentBookingAction,
  AppointmentBookingLocalState,
  actions,
} from "../../document-models/appointment-booking";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";
import NewAppointmentBookingForm from "./components/new-appointment-booking-form";
import AppointmentList from "./components/appoinmet-list";
import { useCallback } from "react";

export type IProps = EditorProps<
  AppointmentBookingState,
  AppointmentBookingAction,
  AppointmentBookingLocalState
>;

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
    <div className="flex gap-4 mt-2">
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
