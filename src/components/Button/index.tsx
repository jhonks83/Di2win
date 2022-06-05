import { Container, Text } from './styles';

type ButtonProps = {
  title: string;
  isActive: boolean;
  setFilterButton: (filter: string) => void;
}

export function Button({ title, setFilterButton, isActive }: ButtonProps) {
  return (
    <Container onPress={() => setFilterButton(title)} isActive={isActive}>
      <Text isActive={isActive}>{title}</Text>
    </Container>
  )
}