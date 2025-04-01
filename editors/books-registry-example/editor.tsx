import type { EditorProps } from "document-model";
import {
  type BooksRegistryExampleDocument,
  type Author,
  actions,
} from "../../document-models/books-registry-example/gen/index.js";
import NewBookDiv from "./components/new-book-div.js";
import BooksList from "./components/books-list.js";
import { useCallback } from "react";

export type IProps = EditorProps<BooksRegistryExampleDocument>;

export default function Editor(props: IProps) {
  const dispatch = props.dispatch;

  const handleDelete = useCallback(
    (id: string) => {
      if (window.confirm("Are you sure you want to delete this book?")) {
        dispatch(actions.removeBook({ id }));
      }
    },
    [dispatch],
  );

  const handleUpdateBookTitle = useCallback(
    (id: string, title: string) => {
      dispatch(actions.updateBook({ id, title }));
    },
    [dispatch],
  );

  const handleUpdateBookDescription = useCallback(
    (id: string, description: string) => {
      dispatch(actions.updateBook({ id, description }));
    },
    [dispatch],
  );

  const handleUpdateBookAuthor = useCallback(
    (id: string, author: Author) => {
      dispatch(actions.updateBook({ id, author }));
    },
    [dispatch],
  );

  return (
    <div className="flex gap-4 mt-2">
      <NewBookDiv dispatch={dispatch} />

      <BooksList
        onDelete={handleDelete}
        onUpdateTitle={handleUpdateBookTitle}
        onUpdateDescription={handleUpdateBookDescription}
        onUpdateAuthor={handleUpdateBookAuthor}
        books={props.document.state.global.books}
      />
    </div>
  );
}
