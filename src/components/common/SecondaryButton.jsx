import React from 'react';

export default function SecondaryButton(props) {
  const { content, className, onClick, prop } = props;
  return (
    <button
      className={`secondary button ${className || ''}`}
      onClick={onClick}
      {...prop}
    >
      {content}
    </button>
  );
}
