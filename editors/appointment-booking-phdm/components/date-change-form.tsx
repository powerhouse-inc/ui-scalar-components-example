import { DatePickerField, Form } from "@powerhousedao/design-system/scalars";
import { useCallback, useState } from "react";

interface DateChangerFormProps {
  readonly id: string;
  readonly date?: string;
  readonly onUpdateDate: (id: string, date: string) => void;
}

type FormData = {
  date: string;
};

export default function DateChangerForm({
  id,
  date,
  onUpdateDate,
}: DateChangerFormProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = useCallback(
    (data: FormData) => {
      if (data.date === date) return;

      onUpdateDate(id, data.date);
      setIsEditing(false);
    },
    [date, id, onUpdateDate],
  );

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {({ triggerSubmit }) =>
        isEditing ? (
          <DatePickerField
            // autoFocus
            defaultValue={date}
            name="date"
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
            {date}
          </p>
        )
      }
    </Form>
  );
}
