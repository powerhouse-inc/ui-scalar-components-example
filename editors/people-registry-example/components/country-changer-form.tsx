/* eslint-disable react/jsx-no-bind */
import { CountryCodeField, Form } from "@powerhousedao/design-system/scalars";
import { useCallback, useState } from "react";

interface CountryChangerFormProps {
  readonly id: string;
  readonly country?: string;
  readonly onUpdateCountry: (id: string, country: string) => void;
}

type FormData = {
  country: string;
};

export default function CountryChangerForm({
  id,
  country,
  onUpdateCountry,
}: CountryChangerFormProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = useCallback(
    (data: FormData) => {
      if (data.country === country) return;

      onUpdateCountry(id, data.country);
    },
    [country, id, onUpdateCountry],
  );

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {({ triggerSubmit }) =>
        isEditing ? (
          <CountryCodeField
            autoFocus
            defaultValue={country}
            enableSearch
            name="country"
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
            {country}
          </p>
        )
      }
    </Form>
  );
}
