import React from 'react';
import { string } from 'prop-types';

import Section from 'components/sidebar/section';


function AboutMe(props) {
  const { content } = props;
  return (
    <Section title='About Me'>
      <div>{ content }</div>
    </Section>
  );
}

AboutMe.propTypes = {
  content: string,
};

export default AboutMe;
