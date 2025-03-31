/**
 * This is a scaffold file meant for customization:
 * - modify it by implementing the reducer functions
 * - delete the file and run the code generator again to have it reset
 */

import { type PeopleRegistryExamplePeopleRegistryOperations } from "../../gen/people-registry/operations.js";

export const reducer: PeopleRegistryExamplePeopleRegistryOperations = {
  addPersonOperation(state, action, dispatch) {
    state.people.push({
      ...action.input,
      country: action.input.country ?? null,
      height: action.input.height ?? null,
    });
  },
  updatePersonOperation(state, action, dispatch) {
    const person = state.people.find((person) => person.id === action.input.id);
    if (!person) {
      throw new Error(`Person with id ${action.input.id} not found`);
    }
    if (action.input.firstName) {
      person.firstName = action.input.firstName;
    }
    if (action.input.age) {
      person.age = action.input.age;
    }
    if (action.input.height) {
      person.height = action.input.height;
    }
    if (action.input.phone) {
      person.phone = action.input.phone;
    }
    if (action.input.email) {
      person.email = action.input.email;
    }
    if (action.input.bio) {
      person.bio = action.input.bio;
    }
    if (action.input.gender) {
      person.gender = action.input.gender;
    }
    if (action.input.country) {
      person.country = action.input.country;
    }
    if (action.input.contactPreference) {
      if (action.input.contactPreference.receiveNotification) {
        person.contactPreference.receiveNotification =
          action.input.contactPreference.receiveNotification;
      }
      if (action.input.contactPreference.subscribeToNewsletter) {
        person.contactPreference.subscribeToNewsletter =
          action.input.contactPreference.subscribeToNewsletter;
      }
    }
  },
  removePersonOperation(state, action, dispatch) {
    state.people = state.people.filter(
      (person) => person.id !== action.input.id,
    );
  },
};
