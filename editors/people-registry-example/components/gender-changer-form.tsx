import { EnumField, Form } from "@powerhousedao/document-engineering/scalars";
import type { Gender } from "document-models/people-registry-example/gen/index.js";
import { useCallback, useState } from "react";

interface GenderChangerFormProps {
  readonly id: string;
  readonly gender: Gender;
  readonly onUpdateGender: (id: string, gender: Gender) => void;
}

type FormData = {
  gender: Gender;
};

export default function GenderChangerForm({
  id,
  gender,
  onUpdateGender,
}: GenderChangerFormProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = useCallback(
    (data: FormData) => {
      // Skip the update if the gender hasn't changed to avoid creating unnecessary revisions.
      // Note: This manual check is an alternative to using the Form's `submitChangesOnly` prop,
      // which would automatically track and submit only changed fields.
      // (see `name-changer-form` for more details).
      if (data.gender === gender) return;

      onUpdateGender(id, data.gender);
    },
    [gender, id, onUpdateGender],
  );

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {({ triggerSubmit }) =>
        isEditing ? (
          <EnumField
            autoFocus
            defaultValue={gender}
            name="gender"
            onBlur={() => {
              setIsEditing(false);
            }}
            onChange={() => {
              triggerSubmit();
            }}
            options={[
              { label: "Male", value: "MALE" },
              { label: "Female", value: "FEMALE" },
              { label: "Other", value: "OTHER" },
            ]}
            required
            variant="Select"
          />
        ) : (
          <p className="cursor-pointer font-bold" onClick={startEditing}>
            {gender}
          </p>
        )
      }
    </Form>
  );
}
