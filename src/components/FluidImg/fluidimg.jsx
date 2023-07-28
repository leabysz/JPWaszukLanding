/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'react-bootstrap/Image';

const FluidImage = ({ src, alt }) => {
  return <Image fluid className="rounded shadow-lg" src={src} alt={alt} width="600em" />;
};

export default FluidImage;
