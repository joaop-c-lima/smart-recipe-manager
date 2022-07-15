import React from 'react';
import { Button, Text, Image } from '@rneui/themed';
import { View } from 'react-native';
import { APP_NAME } from '@env';
import styles from './styles';
import { ROUTES } from '../../constants';
import { PageContainer } from '../../components/';

export const Home = ({ navigation }) => {
  const menu = [
    {
      label: 'ESTOQUE',
      page: ROUTES.INVENTORY,
    },
    {
      label: 'RECEITAS',
      page: ROUTES.RECIPES,
    },
    {
      label: 'RELATÓRIO',
      page: ROUTES.REPORT,
    },
  ];
  return (
    <PageContainer>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.titleImage} />
          <Text h1 style={styles.title}>
            {APP_NAME}
          </Text>
        </View>

        <Image
          source={require('../../assets/images/banner.png')}
          style={styles.image}
          containerStyle={styles.imageContainer}
        />
        {menu.map((item) => (
          <Button
            key={`${item.label}-${item.page}`}
            containerStyle={styles.button.container}
            buttonStyle={styles.button.button}
            onPress={() => navigation.navigate(item.page)}
          >
            {item.label}
          </Button>
        ))}
      </View>
    </PageContainer>
  );
};
