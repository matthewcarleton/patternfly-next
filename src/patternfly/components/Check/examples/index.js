import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import docs from '../docs/code.md';
import CheckCheckboxExampleRaw from '!raw!./check-checkbox-example.hbs';
import CheckRadioExampleRaw from '!raw!./check-radio-example.hbs';
import CheckCheckboxExample from './check-checkbox-example.hbs';
import CheckRadioExample from './check-radio-example.hbs';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const checkCheckboxExample = CheckCheckboxExample();
  const checkRadioExample = CheckRadioExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Checkbox Example " handlebars={CheckCheckboxExampleRaw}>{checkCheckboxExample}</Example>
      <Example heading="Radio button Example" handlebars={CheckRadioExampleRaw}>{checkRadioExample}</Example>
    </Documentation>
  );
};
