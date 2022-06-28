import React, {useEffect} from 'react';
import {Button} from '@rneui/themed';
import {View, Text} from 'react-native';
import {AppDataSource} from '../../data-source';
import {User} from '../../entity/User';

export const Home = () => {
  useEffect(() => {
    AppDataSource.manager.find(User).then(console.log);
  });
  return (
    <View>
      <Button>You are here</Button>
      <Text>Home</Text>
    </View>
  );
};
