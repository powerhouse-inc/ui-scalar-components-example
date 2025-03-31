import type { EditorProps } from "document-model";
import {
  type PeopleRegistryExampleDocument,
  actions,
  type Gender,
} from "../../document-models/people-registry-example/gen/index.js";
import NewPersonForm from "./components/new-person-form.js";
import PeopleList from "./components/people-list.js";
import { useCallback } from "react";

export type IProps = EditorProps<PeopleRegistryExampleDocument>;

/**
 * This Editor demonstrates various ways to implement forms using the `Form` and Scalar Field components.
 *
 * The example includes:
 *
 * 1. Creating New Records
 *    - See `./components/new-person-form.tsx` for an example of a form that creates new entities
 *
 * 2. Updating Existing Records
 *    - Name updates (`./components/name-changer-form.tsx`)
 *      - Uses string fields that save on blur (when focus leaves the field)
 *      - Demonstrates form validation and change tracking
 *
 *    - Gender updates (`./components/gender-changer-form.tsx`)
 *      - Uses enum fields that save immediately on change
 *      - Shows handling of select/dropdown inputs
 *
 * Each component demonstrates different form patterns and best practices for handling user input.
 */

export default function Editor(props: IProps) {
  const dispatch = props.dispatch;

  const handleDelete = useCallback(
    (id: string) => {
      if (window.confirm("Are you sure you want to delete this person?")) {
        dispatch(actions.removePerson({ id }));
      }
    },
    [dispatch],
  );

  const handleUpdatePersonName = useCallback(
    (id: string, firstName: string) => {
      dispatch(actions.updatePerson({ id, firstName }));
    },
    [dispatch],
  );

  const handleUpdatePersonGender = useCallback(
    (id: string, gender: Gender) => {
      dispatch(actions.updatePerson({ id, gender }));
    },
    [dispatch],
  );

  const handleUpdatePersonCountry = useCallback(
    (id: string, country: string) => {
      dispatch(actions.updatePerson({ id, country }));
    },
    [dispatch],
  );

  return (
    <div className="flex gap-4 mt-2">
      <NewPersonForm dispatch={dispatch} />

      <PeopleList
        onDelete={handleDelete}
        onUpdateCountry={handleUpdatePersonCountry}
        onUpdateGender={handleUpdatePersonGender}
        onUpdateName={handleUpdatePersonName}
        people={props.document.state.global.people}
      />
    </div>
  );
}
