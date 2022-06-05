import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 140px;
  height: 190px;
  background: #fff;
  padding: 4px;
  border-radius: 16px;
`;

export const ContainerImage = styled.View`
  height: 130px;
  width: 100%;
  background: #000;
  padding: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

export const Info = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const PlantType = styled.Text`
  color: #D9D9D9;
  font-size: 12px;
`;

export const Price = styled.Text`
  color: #181818;
  font-size: 12px;
`;

export const PlantName = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;
