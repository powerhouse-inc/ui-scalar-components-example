/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddPersonInput, RemovePersonInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/people-registry/creators";
import { PeopleRegistryExampleDocument } from "../../gen/types";

describe("PeopleRegistry Operations", () => {
  let document: PeopleRegistryExampleDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addPerson operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddPersonInput = generateMock(z.AddPersonInputSchema());

    const updatedDocument = reducer(document, creators.addPerson(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_PERSON");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removePerson operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemovePersonInput = generateMock(z.RemovePersonInputSchema());

    const updatedDocument = reducer(document, creators.removePerson(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_PERSON");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
