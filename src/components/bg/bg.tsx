'use client';

import * as React from 'react';

import './bg.css';

export const BG: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="bg">
      {children}
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
