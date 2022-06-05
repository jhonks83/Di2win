import styled from 'styled-components/native';

type ContainerProps = {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 128px;
  height: 60px;
  background: ${props => props.isActive ? '#34BE47' : '#fff'};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<ContainerProps>`
  color: ${props => props.isActive ? '#fff' : '#D9D9D9'};;
  font-size: 24px;
  font-weight: 700;
`;