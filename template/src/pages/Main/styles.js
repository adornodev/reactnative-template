import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 36px;
`;
