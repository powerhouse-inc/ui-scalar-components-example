import type { Preview } from "@storybook/react";
import { mockDateDecorator } from "storybook-mock-date-decorator";
import "@powerhousedao/design-system/style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    date: new Date("March 10, 2021 10:00:00"),
  },
};

export const decorators = [mockDateDecorator];

export default preview;
