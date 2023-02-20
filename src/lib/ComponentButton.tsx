import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import * as React from 'react';

export interface IButtonProps {
  props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function ComponentButton(props: IButtonProps) {
  return (
    <button style={styleDefault} {...props}>
      {props.children}
    </button>
  );
}

const styleDefault = {
  border: 'none',
  borderRadius: 8,
  boxShadow: 'none',
  backgroundColor: '#00838f',
  color: '#FFF',
  padding: '0px 20px',
  fontSize: 20,
  height: 40
}