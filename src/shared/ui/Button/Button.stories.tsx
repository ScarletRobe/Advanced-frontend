import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Press me",
  },
};

export const Clear: Story = {
  args: {
    theme: "clear",
    children: "Press me",
  },
};

export const Outline: Story = {
  args: {
    theme: "outline",
    children: "Press me",
  },
};

export const OutlineDark: Story = {
  args: {
    theme: "outline",
    children: "Press me",
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
