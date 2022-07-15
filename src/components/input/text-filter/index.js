import React from 'react'
import { View } from 'react-native'
import { Input, Button, Icon } from '@rneui/themed'
import styles from './styles'

export const TextFilter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputIconContainer}>
        <Input
          containerStyle={styles.input.container}
          style={styles.input}
          inputContainerStyle={styles.input.inputContainer}
          errorStyle={styles.input.error}
          leftIcon={<Icon name="search" size={24} />}
        />
      </View>
      <Button
        containerStyle={styles.button.container}
        titleStyle={styles.button.title}
        buttonStyle={styles.button}
        type="outline"
      >
        FILTRAR
      </Button>
    </View>
  )
}
