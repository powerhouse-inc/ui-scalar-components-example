import { type Author, type Book } from "document-models/books-registry-example/gen/index.js";
import { Card, CardContent, CardHeader, CardTitle } from "./card.js";
import { Button } from "@powerhousedao/design-system";
import { Trash2 } from "lucide-react";
import { useCallback } from "react";

interface BookCardProps {
  readonly book: Book;
  readonly onDelete: (id: string) => void;
  readonly onUpdateTitle: (id: string, title: string) => void;
  readonly onUpdateDescription: (id: string, description: string) => void;
  readonly onUpdateAuthor: (id: string, author: Author) => void;
}

export default function BookCard({
  book,
  onDelete,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateAuthor,
}: BookCardProps) {
  const handleDelete = useCallback(() => {
    onDelete(book.id);
  }, [onDelete, book.id]);

  return (
    <Card className="border border-gray-200 flex-1" key={book.id}>
      <div className="text-sm text-gray-500 bg-gray-100 p-1 text-center">
        Click title, description or author to edit
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {book.title}
          <Button color="red" onClick={handleDelete}>
            <Trash2 className="h-5 w-5" />
            <span className="sr-only">Delete</span>
            <span>{book.id}</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-gray-500 space-y-1 mt-1">
              <p>{book.description}</p>
              <p>{book.author?.name}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
