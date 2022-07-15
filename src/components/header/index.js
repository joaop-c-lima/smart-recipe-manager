import React from 'react'
import { View } from 'react-native'
import { Text, Icon } from '@rneui/themed'
import styles from './styles'

export const Header = ({ navigation, ...props }) => {
  const pageName = props.options.headerTitle || props.route.name
  const backPage = props.options.headerBackTitle || props.back.title

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back-ios"
        color="black"
        size={20}
        onPress={() => navigation.navigate(backPage)}
      />
      <Text style={styles.name}>{pageName}</Text>
    </View>
  )
}
