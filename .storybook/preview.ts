import type { Preview } from "@storybook/react";
import "../src/app/globals.css"
import "../src/app/react-slick.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
    paddings: {
      values: [
        {
          name: "Small", value: "16px"
        },
        {
          name: "Medium", value: "32px"
        },
        {
          name: "Large", value: "64px"
        }
      ],
      default: "Medium"
    }
  },
};

export default preview;
