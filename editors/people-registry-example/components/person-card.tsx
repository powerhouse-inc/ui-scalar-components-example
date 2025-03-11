/* eslint-disable react/jsx-max-depth */
import { Gender, Person } from "document-models/people-registry-example";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Button } from "@powerhousedao/design-system";
import { Trash2 } from "lucide-react";
import { useCallback } from "react";
import NameChangerForm from "./name-changer-form";
import GenderChangerForm from "./gender-changer-form";

interface PersonCardProps {
  readonly person: Person;
  readonly onDelete: (id: string) => void;
  readonly onUpdateName: (id: string, firstName: string) => void;
  readonly onUpdateGender: (id: string, gender: Gender) => void;
}

export default function PersonCard({
  person,
  onDelete,
  onUpdateName,
  onUpdateGender,
}: PersonCardProps) {
  const handleDelete = useCallback(() => {
    onDelete(person.id);
  }, [onDelete, person.id]);

  return (
    <Card className="border border-gray-200 flex-1" key={person.id}>
      <div className="text-sm text-gray-500 bg-gray-100 p-1 text-center">
        Click name or gender to edit
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <NameChangerForm
            firstName={person.firstName}
            id={person.id}
            onUpdateName={onUpdateName}
          />
          <Button color="red" onClick={handleDelete}>
            <Trash2 className="h-5 w-5" />
            <span className="sr-only">Delete</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-gray-500 space-y-1 mt-1">
              <GenderChangerForm
                gender={person.gender}
                id={person.id}
                onUpdateGender={onUpdateGender}
              />
              <p>{person.age} years old</p>
              <p>{person.email}</p>
              {person.phone ? <p>{person.phone}</p> : null}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
