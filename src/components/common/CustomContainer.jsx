import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import { colors } from '../../style/colors';

export default function CustomContainer(props) {
  return (
    <StyledContainer color={props.color || colors.black} bgcolor={props.bgcolor || colors.white}>
      {props.children}
    </StyledContainer>
  );
}

const StyledContainer = styled(Box)`
  && {
    width: 100%;
    padding: 2rem 4rem;
  }
`;
