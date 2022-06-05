import { Image, View } from "react-native";

import { Plant } from "../../../App";

import { HomeNavigation } from "../../pages/Home";

import { 
  Container, 
  ContainerImage, 
  Info, 
  PlantType, 
  Price, 
  PlantName,
} from "./styles";

type ItemProps = {
  navigation: HomeNavigation;
  plant: Plant;
}

export function Item({ navigation, plant }: ItemProps) {
  return (
    <Container onPress={() => navigation.navigate('Details', plant)}>
      <ContainerImage>
        <Image 
          source={
            plant.id === '1' ? 
              require('../../assets/cacto.png') :
              plant.id === '2' ?
                require('../../assets/cacto2.png') :
                require('../../assets/flores.png')
          } 
          style={{ width: 60, height: 120 }} 
        />
      </ContainerImage>
      <View>
        <Info>
          <PlantType>{plant.category}</PlantType>
          <Price>{plant.price}</Price>
        </Info>
        <Info>
          <PlantName>{plant.title}</PlantName>
          <Image source={plant.isFavorited ? require('../../assets/star.png') : require('../../assets/star_outline.png')} style={{ width: 15, height: 15 }} />
        </Info>
      </View>
    </Container>
  )
}