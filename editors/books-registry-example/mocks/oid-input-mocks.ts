import type { OIDOption } from "./types.js";

export const mockedOptions: OIDOption[] = [
  {
    icon: "Braces",
    title: "Page A",
    path: "page-a",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc7dea7",
    description: "Page A description",
  },
  {
    icon: "Braces",
    title: "Page B",
    path: "page-b",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc6cdb8",
    description: "Page B description",
  },
  {
    icon: "Braces",
    title: "Page C",
    path: "page-c",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc5efc9",
    description: "Page C description",
  },
  {
    icon: "Braces",
    title: "Page D",
    path: "page-d",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc1cfe3",
    description: "Page D description",
  },
  {
    icon: "Braces",
    title: "Page E",
    path: "page-e",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc0bfe4",
    description: "Page E description",
  },
  {
    icon: "Braces",
    title: "Page F",
    path: "page-f",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc9aef5",
    description: "Page F description",
  },
  {
    icon: "Braces",
    title: "Page G",
    path: "page-g",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc8aef6",
    description: "Page G description",
  },
  {
    icon: "Braces",
    title: "Page H",
    path: "page-h",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc7aef7",
    description: "Page H description",
  },
  {
    icon: "Braces",
    title: "Page I",
    path: "page-i",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc6aef8",
    description: "Page I description",
  },
  {
    icon: "Braces",
    title: "Page J",
    path: "page-j",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc5aef9",
    description: "Page J description",
  },
  {
    icon: "Braces",
    title: "Page K",
    path: "page-k",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc4aea0",
    description: "Page K description",
  },
  {
    icon: "Braces",
    title: "Page L",
    path: "page-l",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc3aea1",
    description: "Page L description",
  },
];

const filterOptions = (options: OIDOption[], userInput: string) => {
  const normalizedInput = userInput.toLowerCase();

  return options.filter((opt) => {
    const pathText = typeof opt.path === "object" ? opt.path.text : opt.path;

    return (
      opt.title?.toLowerCase().includes(normalizedInput) ||
      pathText?.toLowerCase().includes(normalizedInput) ||
      opt.value.toLowerCase().includes(normalizedInput) ||
      opt.description?.toLowerCase().includes(normalizedInput)
    );
  });
};

// Async versions
export const fetchOptions = async (userInput: string): Promise<OIDOption[]> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Add 20% chance of error
  if (Math.random() < 0.2) {
    throw new Error();
  }

  return filterOptions(mockedOptions, userInput);
};

export const fetchSelectedOption = async (
  value: string,
): Promise<OIDOption | undefined> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockedOptions.find((option) => option.value === value);
};

// Sync versions
export const fetchOptionsSync = (userInput: string): OIDOption[] => {
  return filterOptions(mockedOptions, userInput);
};

export const fetchSelectedOptionSync = (
  value: string,
): OIDOption | undefined => {
  return mockedOptions.find((option) => option.value === value);
};
