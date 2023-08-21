import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'Link'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
