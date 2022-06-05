import { Image, View } from "react-native";
import { Plant } from "../../../App";
import { HomeNavigation } from "../../pages/Home";
import { Container, ContainerImage, PlantType, PlantName, Price } from "./styles";

type HorizontalItem = {
  navigation: HomeNavigation;
  plant: Plant;
}

export function HorizontalItem({ navigation, plant }: HorizontalItem) {
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
          style={{ width: 30, height: 40 }} 
        />
      </ContainerImage>
      <View style={{ marginLeft: 8 }}>
        <PlantType>{plant.category}</PlantType>
        <PlantName>{plant.title}</PlantName>
        <Price>{plant.price}</Price>
      </View>
    </Container>
  )
}