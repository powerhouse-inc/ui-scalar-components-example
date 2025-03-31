import BookingCard from "./booking-card.js";
import type { Booking } from "../../../document-models/appointment-booking/gen/index.js";

interface AppointmentListProps {
  readonly appointments: Booking[];
  readonly onDelete: (id: string) => void;
  readonly onUpdateDate: (id: string, date: string) => void;
  readonly onUpdateTime: (id: string, time: string) => void;
  readonly onUpdateName: (id: string, name: string) => void;
  readonly onUpdateDateTime: (id: string, datetime: string) => void;
  readonly onUpdateCurrencyCode: (id: string, currencyCode: string) => void;
}

export default function AppointmentList({
  appointments,
  onDelete,
  onUpdateDate,
  onUpdateTime,
  onUpdateName,
  onUpdateDateTime,
  onUpdateCurrencyCode,
}: AppointmentListProps) {
  return (
    <div className="bg-gray-50 w-full">
      <h2 className="text-xl font-semibold mb-4">Registered Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No appointments registered yet
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {appointments.map((appointment) => (
            <BookingCard
              appointment={appointment}
              key={appointment.id}
              onDelete={onDelete}
              onUpdateDate={onUpdateDate}
              onUpdateDateTime={onUpdateDateTime}
              onUpdateName={onUpdateName}
              onUpdateTime={onUpdateTime}
              onUpdateCurrencyCode={onUpdateCurrencyCode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
