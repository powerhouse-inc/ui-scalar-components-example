import { Button } from "@powerhousedao/design-system";
import { Trash2 } from "lucide-react";
import { useCallback } from "react";
import type { Booking } from "../../../document-models/appointment-booking/gen/index.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../people-registry-example/components/card.js";
import TimeChangerForm from "./time-change-form.js";
import NameChangerForm from "./name-changer-form.js";
import DateTimeChangerForm from "./date-time-form.js";
import DateChangerForm from "./date-change-form.js";
import CurrencyChangerForm from "./currency-change-form.js";

interface BookingCardProps {
  readonly appointment: Booking;
  readonly onDelete: (id: string) => void;
  readonly onUpdateDate: (id: string, date: string) => void;
  readonly onUpdateTime: (id: string, time: string) => void;
  readonly onUpdateName: (id: string, name: string) => void;
  readonly onUpdateDateTime: (id: string, datetime: string) => void;
  readonly onUpdateCurrencyCode: (id: string, currencyCode: string) => void;
  
}

export default function BookingCard({
  appointment,
  onDelete,
  onUpdateDate,
  onUpdateTime,
  onUpdateDateTime,
  onUpdateName,
  onUpdateCurrencyCode,
}: BookingCardProps) {
  const handleDelete = useCallback(() => {
    onDelete(appointment.id);
  }, [onDelete, appointment.id]);

  return (
    <Card className="border border-gray-200 flex-1" key={appointment.id}>
      <div className="text-sm text-gray-500 bg-gray-100 p-1 text-center">
        Click on the fields below to edit appointment details
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 mb-1">Patient Name:</span>
            <NameChangerForm
              firstName={appointment.fullName}
              id={appointment.id}
              onUpdateName={onUpdateName}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 mb-1">
              Quick Date & Time Edit:
            </span>
            <DateTimeChangerForm
              datetime={appointment.appointmentDateTime}
              id={appointment.id}
              onUpdateDateTime={onUpdateDateTime}
            />
          </div>
          <Button color="red" onClick={handleDelete} title="Delete Appointment">
            <Trash2 className="h-5 w-5" />
            <span className="sr-only">Delete Appointment</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-gray-500 space-y-1 mt-1">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1">
                    Appointment Date:
                  </span>
                  <DateChangerForm
                    date={appointment.appointmentDate}
                    id={appointment.id}
                    onUpdateDate={onUpdateDate}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1">
                    Appointment Time:
                  </span>
                  <TimeChangerForm
                    id={appointment.id}
                    onUpdateTime={onUpdateTime}
                    time={appointment.appointmentTime}
                  />
              
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1">Currency:</span>
                  <CurrencyChangerForm
                    currencyCode={appointment.currency ?? ""}
                    id={appointment.id}
                    onUpdateCurrencyCode={onUpdateCurrencyCode}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p>
                  <span className="font-medium">Fee:</span> {appointment.fee}
                </p>
              </div>
              <p>
                <span className="font-medium">Email:</span> {appointment.email}
              </p>
              {appointment.phone ? (
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {appointment.phone}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
