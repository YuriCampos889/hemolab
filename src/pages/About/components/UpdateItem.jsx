import React from 'react';
import { UpdateItem as StyledUpdateItem } from '../styles';

export default function UpdateItem({ date, version, description }) {
  return (
    <StyledUpdateItem>
      <div className="date">{date}</div>
      <div className="content">
        <strong>{version}</strong>
        <p>{description}</p>
      </div>
    </StyledUpdateItem>
  );
}