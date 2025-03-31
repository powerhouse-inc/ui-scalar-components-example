import { Button } from "@powerhousedao/design-system";
import {
  Form,
  BooleanField,
  NumberField,
  StringField,
  RadioGroupField,
  IdField,
  CountryCodeField,
} from "@powerhousedao/design-system/scalars";
import { actions } from "../../../document-models/people-registry-example/gen/index.js";
import {
  type Gender,
  type PeopleRegistryExamplePeopleRegistryAction,
} from "document-models/people-registry-example/gen/index.js";
import { useCallback } from "react";

interface NewPersonFormProps {
  readonly dispatch: (
    action: PeopleRegistryExamplePeopleRegistryAction,
  ) => void;
}

type NewPersonFormData = {
  id: string;
  firstName: string;
  age: number;
  height: number;
  email: string;
  phone: string;
  bio: string;
  gender: Gender;
  receiveNotification: boolean;
  subscribeToNewsletter: boolean;
  termsAndConditions: boolean;
};

export default function NewPersonForm({ dispatch }: NewPersonFormProps) {
  const onSubmit = useCallback((data: NewPersonFormData) => {
    const {
      // this field is required by the form, but we don't need it for the form
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      termsAndConditions,

      subscribeToNewsletter,
      receiveNotification,
      ...rest
    } = data;

    dispatch(
      actions.addPerson({
        ...rest,
        contactPreference: {
          receiveNotification,
          subscribeToNewsletter,
        },
      }),
    );
  }, []);

  return (
    <Form
      className="max-w-[700px] w-full min-w-[300px]"
      defaultValues={{
        bio: "",
        country: undefined,
        gender: "MALE",
        receiveNotification: false,
        subscribeToNewsletter: false,
        termsAndConditions: false,
      }}
      onSubmit={onSubmit}
      resetOnSuccessfulSubmit
    >
      <div className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Register a new person</h1>
        <div className="grid grid-cols-2 gap-4">
          <IdField />
          <StringField
            label="First Name"
            maxLength={50}
            name="firstName"
            placeholder="John"
            required
          />
          <NumberField
            label="Age"
            name="age"
            placeholder="25"
            precision={0}
            required
          />
          <NumberField
            label="Height (cm)"
            name="height"
            placeholder="180"
            precision={2}
            required
          />
          <StringField
            label="Email"
            name="email"
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            placeholder="john@doe.com"
            required
          />
          <StringField
            description="Enter your phone number. Format: (000) 000-0000"
            label="Phone"
            name="phone"
            pattern={/^\(\d{3}\)\s\d{3}-\d{4}$/}
            placeholder="(123) 456-7890"
          />
          <CountryCodeField
            label="Country"
            name="country"
            placeholder="Country of birth"
          />
        </div>

        <StringField
          label="Bio (length: 20-100 characters, pattern: letters, numbers and spaces)"
          maxLength={100}
          minLength={20}
          multiline
          name="bio"
          placeholder="I am a software engineer..."
          required
        />

        <RadioGroupField
          label="Gender"
          name="gender"
          options={[
            { label: "Male", value: "MALE" },
            { label: "Female", value: "FEMALE" },
            { label: "Other", value: "OTHER" },
          ]}
          required
        />

        <BooleanField
          defaultValue={false}
          description="Receive notifications about your account activity"
          isToggle
          label="Receive notifications"
          name="receiveNotification"
        />

        <div className="flex flex-col gap-1">
          <BooleanField
            label="Subscribe to newsletter"
            name="subscribeToNewsletter"
          />
          <BooleanField
            label={
              <div>
                Accept{" "}
                <a className="font-bold text-blue-500" href="#">
                  terms and conditions
                </a>
              </div>
            }
            name="termsAndConditions"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}
