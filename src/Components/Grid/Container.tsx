import React from 'react';

interface Props {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
  children?: any;
}

const Container: React.FC<Props> = ({ size, children, className }) => {
  return (
    <div className={["container ", size ?? `container-${size}`, className].join(' ')}>{children}</div>
  )
}

export default Container;