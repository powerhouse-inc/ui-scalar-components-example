import { Form, DateTimePickerField } from "@powerhousedao/document-engineering/scalars";
import { useCallback, useState } from "react";

interface DateTimeChangerFormProps {
  readonly id: string;
  readonly datetime?: string;
  readonly onUpdateDateTime: (id: string, datetime: string) => void;
}

type FormData = {
  datetime: string;
};

export default function DateTimeChangerForm({
  id,
  datetime,
  onUpdateDateTime,
}: DateTimeChangerFormProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = useCallback(
    (data: FormData) => {
      if (data.datetime === datetime) return;

      onUpdateDateTime(id, data.datetime);
      setIsEditing(false);
    },
    [datetime, id, onUpdateDateTime],
  );

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {({ triggerSubmit }) =>
        isEditing ? (
          <DateTimePickerField
            defaultValue={datetime}
            name="datetime"
            onBlur={() => {
              setIsEditing(false);
            }}
            onChange={() => {
              triggerSubmit();
            }}
            required
          />
        ) : (
          <p
            className="cursor-pointer font-bold text-sm"
            onClick={startEditing}
          >
            {datetime}
          </p>
        )
      }
    </Form>
  );
}
