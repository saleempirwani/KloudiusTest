import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {COLORS} from 'src/assets/theme';
import {Container, Header, Wrapper} from 'src/common-components';
import {IHomeScreenProps} from 'src/types/HomeScreen';
import {NavigationProps} from 'src/types/NavigationTypes';
import {styling} from './styles';

const HomeScreen: React.FC<IHomeScreenProps> = ({theme}) => {
  const styles = styling(theme);
  const navigation = useNavigation<NavigationProps>();

  return (
    <Container>
      <Header menuBtn titleColor={COLORS.primary} />
    </Container>
  );
};

export default Wrapper(HomeScreen);
