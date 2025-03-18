import { Gender, Person } from "document-models/people-registry-example";
import BookingCard from "./booking-card";
import { Booking } from "document-models/appointment-booking/gen/types";

interface AppointmentListProps {
  readonly appointments: Booking[];
  readonly onDelete: (id: string) => void;
  readonly onUpdateDate: (id: string, date: string) => void;
  readonly onUpdateTime: (id: string, time: string) => void;
  readonly onUpdateName: (id: string, name: string) => void;
}

export default function AppointmentList({
  appointments,
  onDelete,
  onUpdateDate,
  onUpdateTime,
  onUpdateName,
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
              onUpdateName={onUpdateName}
              onUpdateTime={onUpdateTime}
            />
          ))}
        </div>
      )}
    </div>
  );
}
