/* eslint-disable react/jsx-max-depth */

import { Button } from "@powerhousedao/design-system";
import { Trash2 } from "lucide-react";
import { useCallback } from "react";
import DateChangerForm from "./date-change-form";
import { Booking } from "document-models/appointment-booking/gen/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../people-registry-example/components/card";
import TimeChangerForm from "./time-change-form";
import NameChangerForm from "./name-changer-form";

interface BookingCardProps {
  readonly appointment: Booking;
  readonly onDelete: (id: string) => void;
  readonly onUpdateDate: (id: string, date: string) => void;
  readonly onUpdateTime: (id: string, time: string) => void;
  readonly onUpdateName: (id: string, name: string) => void;
}

export default function BookingCard({
  appointment,
  onDelete,
  onUpdateDate,
  onUpdateTime,
  onUpdateName,
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
            <span className="text-xs text-gray-500 mb-1">
              Appointment Date:
            </span>
            <DateChangerForm
              date={appointment.appointmentDate}
              id={appointment.id}
              onUpdateDate={onUpdateDate}
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
              <p>
                <span className="font-medium">Fee:</span> {appointment.fee}
              </p>
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
