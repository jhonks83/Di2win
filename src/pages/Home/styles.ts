import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  
`;

export const Wrapper = styled.View`
  margin-top: 8px;
  padding: 0 24px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  flex: 1;
  margin-right: 2px;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const Filters = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background: #000;
  margin-left: 32px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.View`
  background: #fff;
  flex-direction: row;
  border-radius: 24px;
  padding: 16px;
  flex: 1;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 20px;
  margin-left: 8px;
`;

export const Section = styled.View`
  margin-top: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const NavigationBar = styled.View`
  margin-top: 16px;
  height: 100%;
  background: #fff;
  flex-direction: row;
  justify-content: space-evenly;
`;


export const NavigationButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 8px;
`;

type NavigationButtonTextProps = {
  active?: boolean;
}

export const NavigationButtonText = styled.Text<NavigationButtonTextProps>`
  color: ${props => props.active ? '#000' : '#D9D9D9'};
`;