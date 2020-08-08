import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background-color: #00bfa6;
  position: absolute;
  bottom: 60px;
  right: 30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
`;
