import React from 'react';
import {Container, Title} from './styles';
import FloatButton from '../../components/FloatButton';
import {Text} from 'react-native';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Tarefas</Title>
      <FloatButton>
        <Text>+</Text>
      </FloatButton>
    </Container>
  );
};

export default Home;
