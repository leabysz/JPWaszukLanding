/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'react-bootstrap/Image';

const FluidImage = ({ src, alt }) => {
  return <Image fluid className="fluid-image" src={src} alt={alt} width="60%" />;
};

export default FluidImage;
