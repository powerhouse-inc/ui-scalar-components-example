/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddBookInput,
  type RemoveBookInput,
  type UpdateBookInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/books-registry/creators.js";
import type { BooksRegistryExampleDocument } from "../../gen/types.js";

describe("BooksRegistry Operations", () => {
  let document: BooksRegistryExampleDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addBook operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddBookInput = generateMock(z.AddBookInputSchema());

    const updatedDocument = reducer(document, creators.addBook(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_BOOK");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeBook operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveBookInput = generateMock(z.RemoveBookInputSchema());

    const updatedDocument = reducer(document, creators.removeBook(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_BOOK");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle updateBook operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateBookInput = generateMock(z.UpdateBookInputSchema());

    const updatedDocument = reducer(document, creators.updateBook(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_BOOK");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
