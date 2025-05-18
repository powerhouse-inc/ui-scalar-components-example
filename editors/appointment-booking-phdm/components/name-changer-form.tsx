import { Form, StringField } from "@powerhousedao/document-engineering/scalars";
import { useCallback, useState } from "react";

interface NameChangerFormProps {
  readonly id: string;
  readonly firstName: string;
  readonly onUpdateName: (id: string, firstName: string) => void;
}

type FormData = {
  firstName: string;
};

export default function NameChangerForm({
  id,
  firstName,
  onUpdateName,
}: NameChangerFormProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = useCallback(
    (data: FormData) => {
      // When using submitChangesOnly prop, the form data will only contain changed fields
      // If data is empty (no changes were made), we skip the update to keep the revision history clean
      if (Object.keys(data).length === 0) return;

      onUpdateName(id, data.firstName);
      setIsEditing(false);
    },
    [id, onUpdateName],
  );

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Form
      // The Form component requires defaultValues when using submitChangesOnly prop
      // This allows the form to track which fields have changed from their initial values
      defaultValues={{ firstName }}
      onSubmit={onSubmit}
      submitChangesOnly
    >
      {/* The Form component provides a `triggerSubmit` function through render props pattern.
       * Always use `triggerSubmit` instead of calling `onSubmit` directly to ensure:
       * - Form validation is executed
       * - All Form lifecycle is triggered
       * - Form state is properly updated
       */}
      {({ triggerSubmit }) =>
        isEditing ? (
          <StringField
            autoFocus
            name="firstName"
            onBlur={() => {
              triggerSubmit();
              setIsEditing(false);
            }}
            required
          />
        ) : (
          <span className="cursor-pointer" onClick={startEditing}>
            {firstName}
          </span>
        )
      }
    </Form>
  );
}
