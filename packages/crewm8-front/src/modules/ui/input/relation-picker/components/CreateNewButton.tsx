import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MenuItem } from 'crewm8-ui/navigation';

const StyledCreateNewButton = styled(MenuItem)<{ hovered?: boolean }>`
  ${({ hovered, theme }) =>
    hovered &&
    css`
      background: ${theme.background.transparent.light};
    `}
`;

export const CreateNewButton = StyledCreateNewButton;
