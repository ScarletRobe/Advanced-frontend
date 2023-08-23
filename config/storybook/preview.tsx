import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { i18nDecorator } from "../../src/shared/config/storybook/i18nDecorator/i18nDecorator";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import "app/styles/index.scss";
import i18n from "../../src/shared/config/i18n/i18n";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT), i18nDecorator, RouteDecorator],
};

export default preview;
