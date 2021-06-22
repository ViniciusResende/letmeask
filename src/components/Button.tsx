import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const components = (props: ButtonProps) => {
  return <button className='button' {...props} />;
};

export default components;
