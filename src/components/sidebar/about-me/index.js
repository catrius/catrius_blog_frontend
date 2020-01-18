import React from 'react';
import PropTypes from 'prop-types';

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
  content: PropTypes.string,
};

export default AboutMe;
