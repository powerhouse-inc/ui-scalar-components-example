import type { Book, Author } from "document-models/books-registry-example/gen/index.js";
import BookCard from "./book-card.js";

interface BooksListProps {
  readonly books: Book[];
  readonly onDelete: (id: string) => void;
  readonly onUpdateTitle: (id: string, title: string) => void;
  readonly onUpdateDescription: (id: string, description: string) => void;
  readonly onUpdateAuthor: (id: string, author: Author) => void;
}

export default function BooksList({
  books,
  onDelete,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateAuthor,
}: BooksListProps) {
  return (
    <div className="bg-gray-50 w-full">
      <h2 className="text-xl font-semibold mb-4">Registered Books</h2>

      {books.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No books registered yet
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onDelete={onDelete}
              onUpdateTitle={onUpdateTitle}
              onUpdateDescription={onUpdateDescription}
              onUpdateAuthor={onUpdateAuthor}
            />
          ))}
        </div>
      )}
    </div>
  );
}
