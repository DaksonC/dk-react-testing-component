import React from 'react';

interface IProps {
  props?: any;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Lib({ props, children, onClick }: IProps) {
  return (
    <button
      style={{
        border: 'none',
        borderRadius: 8,
        boxShadow: 'none',
        backgroundColor: '#00838f',
        color: '#FFF',
        padding: '0px 20px',
        fontSize: 20,
        height: 40
      }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Lib;
