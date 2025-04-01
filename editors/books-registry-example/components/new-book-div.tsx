import { type ChangeEvent } from "react";
import { Button } from "@powerhousedao/design-system";
import {
  PHIDInput,
  TextInput,
  Textarea,
  OIDInput,
  Toggle,
} from "@powerhousedao/design-system/ui";
import { fetchOptionsSync, fetchSelectedOptionSync } from "../mocks/phid-input-mocks.js";
import { fetchOptionsSync as fetchOIDOptionsSync, fetchSelectedOptionSync as fetchOIDSelectedOptionSync } from "../mocks/oid-input-mocks.js";
import { actions } from "../../../document-models/books-registry-example/gen/index.js";
import {
  type BooksRegistryExampleBooksRegistryAction,
  type Author,
  type Page,
} from "document-models/books-registry-example/gen/index.js";
import { useCallback, useState } from "react";

interface NewBookDivProps {
  readonly dispatch: (
    action: BooksRegistryExampleBooksRegistryAction,
  ) => void;
}

type NewBookDivData = {
  id: string;
  title: string;
  description: string;
  pages: Page[];
};

export default function NewBookDiv({ dispatch }: NewBookDivProps) {
  const [book, setBook] = useState<NewBookDivData>({ id: "", title: "test title", description: "test description", pages: [] });
  const [page, setPage] = useState<Page>({ id: "", hasBeenRead: false, number: 1 });
  const [errors, setErrors] = useState<string[]>([]);

  const onValidate = useCallback(() => {
    if (!book.id) {
      setErrors(["Book id is required"]);
      return false;
    }
    setErrors([]);
    return true;
  }, [book.id]);

  const onSave = useCallback(() => {
    if (onValidate()) {
      dispatch(
        actions.addBook({
          ...book,
          pages: [page],
        }),
      );
    }
  }, [dispatch, onValidate, book, page]);

  const handleIdChange = useCallback((value: string) => {
    setBook(prev => ({ ...prev, id: value }));
  }, []);

  const handleTitleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBook(prev => ({ ...prev, title: event.target.value }));
  }, []);

  const handleDescriptionChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setBook(prev => ({ ...prev, description: event.target.value }));
  }, []);

  const handlePageIdChange = useCallback((value: string) => {
    setPage(prev => ({ ...prev, id: value }));
  }, []);

  const handlePageHasBeenReadChange = useCallback((checked: boolean) => {
    setPage(prev => ({ ...prev, hasBeenRead: checked }));
  }, []);

  return (
    <div className="max-w-[700px] w-full min-w-[300px]">
      <div className="mx-auto flex w-full flex-col gap-4 rounded-lg bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Register a new book</h1>
        <div className="grid grid-cols-2 gap-4">
          <PHIDInput
            label="Book id"
            name="bookId"
            placeholder="phd:"
            allowUris
            required
            fetchOptionsCallback={fetchOptionsSync}
            fetchSelectedOptionCallback={fetchSelectedOptionSync}
            variant="withValueTitleAndDescription"
            value={book.id}
            onChange={handleIdChange}
            errors={errors}
          />
          <TextInput
            label="Title"
            name="title"
            placeholder="Title"
            value={book.title}
            onChange={handleTitleChange}
          />
          <Textarea
            label="Description"
            name="description"
            placeholder="Description"
            autoExpand
            value={book.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <h1 className="text-xl font-bold">Pages data</h1>
        <div className="grid grid-cols-2 gap-4">
          <OIDInput
            label="Page id"
            name="pageId"
            placeholder="uuid"
            fetchOptionsCallback={fetchOIDOptionsSync}
            fetchSelectedOptionCallback={fetchOIDSelectedOptionSync}
            variant="withValueTitleAndDescription"
            value={page.id}
            onChange={handlePageIdChange}
          />
          <Toggle
            label="Has been read"
            name="hasBeenRead"
            value={page.hasBeenRead ?? false}
            onChange={handlePageHasBeenReadChange}
          />
        </div>
        <Button type="button" onClick={() => onSave()}>Save</Button>
      </div>
    </div>
  );
}
