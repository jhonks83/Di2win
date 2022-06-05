import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Plant, StackNavigatorParamsList } from '../../../App';

import { Button } from '../../components/Button';
import { HorizontalItem } from '../../components/HorizontalItem';
import { Item } from '../../components/Item';

import { plants } from '../../utils/plants';
import { popular } from '../../utils/popular';
import { types } from '../../utils/types';

import { 
  Container,
  Wrapper,
  Header,
  Search, 
  Section, 
  Title, 
  ContainerInput,
  Input,
  Filters, 
  SectionTitle,
  NavigationBar,
  NavigationButton,
  NavigationButtonText,
} from './styles';

type DataType = {
  item: {
    id: string;
    title: string;
  }
}

export type HomeNavigation = NativeStackNavigationProp<StackNavigatorParamsList, 'Home'>;

type HomeProps = {
  navigation: HomeNavigation;
}

type PlantItem = {
  item: Plant;
}

export function Home({ navigation }: HomeProps) {
  const [filterButton, setFilterButton] = useState(types[0].title);
  
  const renderPlant = ({ item }: PlantItem) => (
    <Item navigation={navigation} plant={item} />
  );

  const renderHorizontalPlant = ({ item }: PlantItem) => (
    <HorizontalItem navigation={navigation} plant={item} />
  );

  const renderFilterButton = ({ item }: DataType) => (
    <Button 
      title={item.title} 
      isActive={filterButton === item.title} 
      setFilterButton={setFilterButton}
    />
  )

  return (
    <SafeAreaView>
      <Container>
        <Wrapper>
          <Header>
            <Title>
              Plantas para sua Casa Verde
            </Title>

            <Image source={require('../../assets/user.png')} style={{ width: 70, height: 70 }} />
          </Header>

          <Search>
            <ContainerInput>
              <Image source={require('../../assets/lupa.png')} style={{ width: 40, height: 40 }} />
              <Input placeholder="Pesquisar" />
            </ContainerInput>
            
            <Filters>
              <Image source={require('../../assets/filtro.png')} style={{ width: 30, height: 20 }} />
            </Filters>
          </Search>

          <Section>
            <FlatList 
              data={types}
              renderItem={renderFilterButton}
              keyExtractor={({ id }) => id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ marginLeft: 16 }} />}
            />
          </Section>

          <Section>
            <FlatList 
              data={plants}
              renderItem={renderPlant}
              keyExtractor={({ id }) => id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ marginLeft: 16 }} />}
            />
          </Section>

          <Section>
            <SectionTitle>Popular</SectionTitle>
            
            <FlatList 
              data={popular}
              renderItem={renderHorizontalPlant}
              keyExtractor={({ id }) => id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ marginLeft: 16 }} />}
            />
          </Section>
        </Wrapper>
        <NavigationBar>
          <NavigationButton>
            <Image source={require('../../assets/home.png')} style={{ width: 30, height: 30 }} />
            <NavigationButtonText active>Início</NavigationButtonText>
          </NavigationButton>
          <NavigationButton>
            <Image source={require('../../assets/star_outline.png')} style={{ width: 30, height: 30 }} />
            <NavigationButtonText>Favoritos</NavigationButtonText>
          </NavigationButton>
          <NavigationButton>
            <Image source={require('../../assets/cart.png')} style={{ width: 25, height: 30 }} />
            <NavigationButtonText>Comprar</NavigationButtonText>
          </NavigationButton>
          <NavigationButton>
            <Image source={require('../../assets/user_icon.png')} style={{ width: 25, height: 30 }} />
            <NavigationButtonText>Perfil</NavigationButtonText>
          </NavigationButton>
        </NavigationBar>
      </Container>
    </SafeAreaView>
  )
}