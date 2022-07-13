import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleImage: {
    width: 65,
    height: 65,
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: 'black',
    marginBottom: 40,
  },
  button: {
    container: {
      width: '100%',
      marginBottom: 10,
    },
    button: {
      borderRadius: 0,
    },
  },
});
