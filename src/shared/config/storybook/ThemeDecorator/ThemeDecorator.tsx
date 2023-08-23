import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <div style={{ width: "100dvw" }} className={`app ${theme}`}>
      <Story />
    </div>
  );
};
