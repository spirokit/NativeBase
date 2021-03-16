import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import {
  DefaultInput,
  SizeInput,
  VariantInput,
  InputAddons,
  InputElements,
  PasswordInput,
  ControlledInput,
  FormControlled,
  FocusErrorBorderColor,
} from './example';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Primary', () => <DefaultInput />)
  .add('Size Input', () => <SizeInput />)
  .add('Input Variants', () => <VariantInput />)
  .add('Input Addons', () => <InputAddons />)
  .add('Input Elements', () => <InputElements />)
  .add('Input Password', () => <PasswordInput />)
  .add('Value Controlled Input', () => <ControlledInput />)
  .add('Form Controlled', () => <FormControlled />)
  .add('Focus and Error Border Color Change', () => <FocusErrorBorderColor />);
