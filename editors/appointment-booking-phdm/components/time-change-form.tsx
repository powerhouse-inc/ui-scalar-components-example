import { Form, TimePickerField } from "@powerhousedao/document-engineering/scalars";
import { useCallback, useState } from "react";

interface TimeChangerFormProps {
  readonly id: string;
  readonly time?: string;
  readonly onUpdateTime: (id: string, time: string) => void;
}

type FormData = {
  time: string;
};

export default function TimeChangerForm({
  id,
  time,
  onUpdateTime,
}: TimeChangerFormProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = useCallback(
    (data: FormData) => {
      if (data.time === time) return;

      onUpdateTime(id, data.time);
      setIsEditing(false);
    },
    [time, id, onUpdateTime],
  );

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {({ triggerSubmit }) =>
        isEditing ? (
          <TimePickerField
            autoFocus
            defaultValue={time}
            name="time"
            onBlur={() => {
              setIsEditing(false);
            }}
            onChange={() => {
              triggerSubmit();
            }}
            required
          />
        ) : (
          <p className="cursor-pointer font-bold" onClick={startEditing}>
            {time}
          </p>
        )
      }
    </Form>
  );
}
