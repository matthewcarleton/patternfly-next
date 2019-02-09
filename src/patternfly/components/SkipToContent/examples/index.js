import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import skipToContentExampleRaw from '!raw!./skip-to-content-example.hbs';
import SkiptocontentExample from './skip-to-content-example.hbs';
import docs from '../docs/code.md';
import '../skip-to-content.scss';

export const Docs = docs;

export default () => {
  const skipToContentExample = SkiptocontentExample();

  return (
    <Documentation docs={Docs}>
      <Example fullPageOnly="true" heading="Skip to content" handlebars={skipToContentExampleRaw}>
        {skipToContentExample}
      </Example>
    </Documentation>
  );
};
