import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { Header, Image, Search, Menu, Products, Popular, Title, Input, Filters } from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export function Home() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const renderButton = ({ item }) => (
    <Button />
  )

  return (
    <View>
      <Header>
        <Title>
          Plantas para sua Casa Verde

          <Image source={require('../assets/Usuário.png')} />
        </Title>
      </Header>

      <Search>
        <Input>
          <Image source={require('../assets/Lupa.svg')} />
          <TextInput placeholder="Pesquisar" />
        </Input>
        
        <Filters>
          <Image source={require('../assets/Filtro.svg')} />
        </Filters>
      </Search>

      <Menu>
        <FlatList 
          data={DATA}
          renderItem={renderButton}
          keyExtractor={({ id }) => id}
          horizontal
        />
      </Menu>

      <Products>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
          horizontal
        />
      </Products>

      <Popular>
        <Text>Popular</Text>
        
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={({ id }) => id}
          horizontal
        />
      </Popular>
    </View>
  )
}