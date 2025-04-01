/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import type { BooksRegistryExampleBooksRegistryOperations } from "../../gen/books-registry/operations.js";

export const reducer: BooksRegistryExampleBooksRegistryOperations = {
  addBookOperation(state, action, dispatch) {
    state.books.push({
      ...action.input,
      title: action.input.title ?? null,
      description: action.input.description ?? null,
      genre: action.input.genre ?? null,
      author: action.input.author ?? null,
      pages: action.input.pages ?? [],
    });
  },
  removeBookOperation(state, action, dispatch) {
    state.books = state.books.filter(
      (book) => book.id !== action.input.id,
    );
  },
  updateBookOperation(state, action, dispatch) {
    const book = state.books.find((book) => book.id === action.input.id);
    if (!book) {
      throw new Error(`Book with id ${action.input.id} not found`);
    }
    if (action.input.title) {
      book.title = action.input.title;
    }
    if (action.input.description) {
      book.description = action.input.description;
    }
    if (action.input.genre) {
      book.genre = action.input.genre;
    }
    if (action.input.author) {
      book.author = action.input.author;
    }
    if (action.input.pages) {
      book.pages = action.input.pages;
    }
  },
};
