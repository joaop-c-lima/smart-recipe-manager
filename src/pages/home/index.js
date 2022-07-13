import React from 'react';
import { Button, Text } from '@rneui/themed';
import {} from '@rneui/base';
import { View } from 'react-native';
import { APP_NAME } from '@env';
import '../../services/ingredient/query.service';
import { general } from '../../styles';
import styles from './styles';

export const Home = () => {
  return (
    <View style={general.pageContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleImage}></View>
          <Text h1 style={styles.title}>
            {APP_NAME}
          </Text>
        </View>

        <View style={styles.image}>
          <Text>SOME IMAGE HERE</Text>
        </View>
        <Button containerStyle={styles.button.container} buttonStyle={styles.button.button}>
          ESTOQUE
        </Button>
        <Button containerStyle={styles.button.container} buttonStyle={styles.button.button}>
          RECEITAS
        </Button>
        <Button containerStyle={styles.button.container} buttonStyle={styles.button.button}>
          RELATÓRIO
        </Button>
      </View>
    </View>
  );
};
