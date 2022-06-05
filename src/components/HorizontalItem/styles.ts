import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 70px;
  width: 140px;
  background: #fff;
  border-radius: 16px;
  padding: 4px;
`;

export const ContainerImage = styled.View`
  height: 100%;
  width: 60px;
  background: #000;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

export const PlantType = styled.Text`
  color: #D9D9D9;
  font-size: 12px;
`;

export const PlantName = styled.Text`
  font-weight: 700;
  margin-top: 2px;
`;

export const Price = styled.Text`
  margin-top: 2px;
`;
