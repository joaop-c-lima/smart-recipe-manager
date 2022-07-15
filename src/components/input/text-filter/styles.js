import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputIconContainer: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#FBFBFB',
    borderWidth: 1,
    borderColor: 'rgba(134, 134, 134, 0.103229)',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    marginRight: 10,
  },
  input: StyleSheet.create({
    container: {
      paddingLeft: 0,
      alignItems: 'center',
    },

    inputContainer: {
      borderBottomWidth: 0,
    },

    error: {},
  }),
  button: StyleSheet.create({
    borderWidth: 0.8,

    container: {
      width: '25%',
      height: '100%',
    },

    title: {
      fontSize: 12,
    },
  }),
})
