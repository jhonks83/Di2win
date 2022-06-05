import styled from 'styled-components/native';

export const Container = styled.View`
  background: #F2F6FF;
  flex: 1;
`;

export const Wrapper = styled.View`
`;

export const ProductInfo = styled.View`
  background: #181818;
  padding: 16px 24px;
  height: 380px;
`;

export const Info = styled.View`
  margin-top: 8px;
`;

export const ProductTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TitleContainer = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
`;

export const Border = styled.View`
  height: 4px;
  width: 80px;
  background: #fff;
  border-radius: 8px;
`;

export const ProductProperties = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Properties = styled.View`
  justify-content: space-evenly;
`;

export const Property = styled.View`
`;

export const PropertyTitle = styled.Text`
  color: #fff;
  font-weight: 300;
`;

export const PropertyText = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const About = styled.View`
  padding: 16px;
`;

export const AboutTitle = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;

export const AboutDescription = styled.Text`
  color: #848484;
`;

export const Sizes = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 48px;
`;

export const Size = styled.View`
  flex-direction: row;
`;

export const ImgContainer = styled.View`
  width: 48px;
  height: 48px;
  background: #000;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  margin-right: 8px;
`;

export const SizeTitle = styled.Text`
  font-size: 12px;
  color: #848484;
`;

export const SizeText = styled.Text`
  margin-top: 4px;
`;

export const Bar = styled.View`
  margin-top: auto;
  padding: 8px 16px;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  height: 60px;
`;

export const Price = styled.View``;

export const PriceTitle = styled.Text`
  color: #848484;
  font-size: 14px;
`;

export const PriceText = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background: #34BE47;
  width: 120px;
  height: 40px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 700;
`;