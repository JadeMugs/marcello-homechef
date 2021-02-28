import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

export default function CustomButton(props) {
  const { content, className, onClick, prop } = props;
  return (
    <StyledCustomButton
      className={className || ''}
      variant='contained'
      color={props.color || 'primary'}
      onClick={onClick}
      {...prop}>
      {content}
    </StyledCustomButton>
  );
}

const StyledCustomButton = styled(Button)`
  && {
    padding: 12px 16px;
  }
`;
