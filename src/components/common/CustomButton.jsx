import React from 'react';
import { Button } from '@material-ui/core';

export default function CustomButton(props) {
  const { content, className, onClick, prop } = props;
  return (
    <Button
      className={className || ''}
      variant='contained'
      color={props.secondary ? 'secondary' : 'primary'}
      onClick={onClick}
      {...prop}>
      {content}
    </Button>
  );
}
