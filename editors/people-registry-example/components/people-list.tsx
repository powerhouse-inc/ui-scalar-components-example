import { Gender, Person } from "document-models/people-registry-example";
import PersonCard from "./person-card";

interface PeopleListProps {
  readonly people: Person[];
  readonly onDelete: (id: string) => void;
  readonly onUpdateName: (id: string, firstName: string) => void;
  readonly onUpdateGender: (id: string, gender: Gender) => void;
  readonly onUpdateCountry: (id: string, country: string) => void;
}

export default function PeopleList({
  people,
  onDelete,
  onUpdateName,
  onUpdateGender,
  onUpdateCountry,
}: PeopleListProps) {
  return (
    <div className="bg-gray-50 w-full">
      <h2 className="text-xl font-semibold mb-4">Registered People</h2>

      {people.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No people registered yet
        </p>
      ) : (
        <div className="flex flex-wrap gap-4 pr-2">
          {people.map((person) => (
            <PersonCard
              key={person.id}
              onDelete={onDelete}
              onUpdateCountry={onUpdateCountry}
              onUpdateGender={onUpdateGender}
              onUpdateName={onUpdateName}
              person={person}
            />
          ))}
        </div>
      )}
    </div>
  );
}
