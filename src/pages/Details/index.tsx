import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigatorParamsList } from "../../../App";
import { 
  Container, 
  Wrapper, 
  ProductInfo,
  Info,
  ProductTitle,
  TitleContainer,
  Title,
  Border,
  ProductProperties,
  Properties,
  Property,
  PropertyTitle,
  PropertyText,
  About, 
  AboutTitle, 
  AboutDescription, 
  Sizes,
  Size,
  ImgContainer,
  SizeTitle,
  SizeText,
  Bar,
  Price,
  PriceTitle,
  PriceText,
  Button,
  ButtonText,
} from "./styles";

type DetailsProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParamsList, 'Details'>;
  route: RouteProp<StackNavigatorParamsList, 'Details'>
}

export function Details({ route: { params }, navigation }: DetailsProps) {
  let url = '../../assets/cacto.png'
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Wrapper>
          <ProductInfo>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/back-icon.png')} style={{ width: 15, height: 25 }} />
            </TouchableOpacity>
            <Info>
              <ProductTitle>
                <TitleContainer>
                  <Title>{params.title}</Title>
                  <Border />
                </TitleContainer>

                <TouchableOpacity>
                  <Image source={params.isFavorited ? require('../../assets/star.png') : require('../../assets/star_outline.png')} style={{ width: 34, height: 34 }} />
                </TouchableOpacity>
              </ProductTitle>
              <ProductProperties>
                <Properties>
                  <Property>
                    <PropertyTitle>Categoria</PropertyTitle>
                    <PropertyText>{params.category}</PropertyText>
                  </Property>
                  <Property>
                    <PropertyTitle>Tipo</PropertyTitle>
                    <PropertyText>{params.type}</PropertyText>
                  </Property>
                  <Property>
                    <PropertyTitle>Planta</PropertyTitle>
                    <PropertyText>{params.plant}</PropertyText>
                  </Property>
                </Properties>
                <Image 
                  source={
                    params.id === '1' ? 
                      require('../../assets/cacto.png') :
                      params.id === '2' ?
                        require('../../assets/cacto2.png') :
                        require('../../assets/flores.png')
                  } 
                  style={{ width: 180, height: 270 }} 
                />
              </ProductProperties>
            </Info>
          </ProductInfo>
          <About>
            <AboutTitle>Sobre</AboutTitle>
            <AboutDescription>{params.description}</AboutDescription>
            <Sizes>
              <Size>
                <ImgContainer>
                  <Image source={require('../../assets/height.png')} style={{ width: 10, height: 20 }} />
                </ImgContainer>
                <View>
                  <SizeTitle>Altura</SizeTitle>
                  <SizeText>{params.height}cm</SizeText>
                </View>
              </Size>
              <Size>
                <ImgContainer>
                  <Image source={require('../../assets/width.png')} style={{ width: 20, height: 10 }} />
                </ImgContainer>
                <View>
                  <SizeTitle>Diâmetro</SizeTitle>
                  <SizeText>{params.width}cm</SizeText>
                </View>
              </Size>
            </Sizes>
          </About>
        </Wrapper>
        <Bar>
          <Price>
            <PriceTitle>Preço</PriceTitle>
            <PriceText>R$ 39,90</PriceText>
          </Price>
          <Button>
            <ButtonText>Comprar</ButtonText>
          </Button>
        </Bar>
      </Container>
    </SafeAreaView>
  )
}