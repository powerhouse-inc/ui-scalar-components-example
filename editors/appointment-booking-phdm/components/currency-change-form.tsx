/* eslint-disable react/jsx-no-bind */
import { CurrencyCodeField, Form } from "@powerhousedao/design-system/scalars";
import { useCallback, useState } from "react";

interface CurrencyChangerFormProps {
  readonly id: string;
  readonly currencyCode: string;
  readonly onUpdateCurrencyCode: (id: string, currencyCode: string) => void;
}

type FormData = {
  currencyCode: string;
};

export default function CurrencyChangerForm({
  id,
  currencyCode,
  onUpdateCurrencyCode,
}: CurrencyChangerFormProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onSubmit = useCallback(
    (data: FormData) => {
      // When using submitChangesOnly prop, the form data will only contain changed fields
      // If data is empty (no changes were made), we skip the update to keep the revision history clean
      if (Object.keys(data).length === 0) return;

      onUpdateCurrencyCode(id, data.currencyCode);
      setIsEditing(false);
    },
    [currencyCode, id, onUpdateCurrencyCode],
  );

  const startEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  return (
    <Form
      // The Form component requires defaultValues when using submitChangesOnly prop
      // This allows the form to track which fields have changed from their initial values
      defaultValues={{ currencyCode }}
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
          <CurrencyCodeField
            autoFocus
            currencies={[
              {
                ticker: "EUR",
                crypto: false,
                label: "Euro",
                symbol: "€",
              },
              {
                ticker: "JPY",
                crypto: false,
                label: "Japanese Yen",
                symbol: "¥",
              },
              {
                ticker: "USD",
                crypto: false,
                label: "United States Dollar",
                symbol: "$",
              },
            ]}
            name="currencyCode"
            onBlur={() => {
              setIsEditing(false);
            }}
            onChange={() => {
              triggerSubmit();
            }}
            required
          />
        ) : (
          <span className="cursor-pointer" onClick={startEditing}>
            {currencyCode}
          </span>
        )
      }
    </Form>
  );
}
