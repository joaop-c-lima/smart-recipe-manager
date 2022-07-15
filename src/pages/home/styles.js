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
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 360,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: '100%',
    marginBottom: 50,
  },
  button: {
    container: {
      width: '100%',
      marginBottom: 16,
    },
    button: {
      borderRadius: 0,
    },
  },
});
