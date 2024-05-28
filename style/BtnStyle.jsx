// btnStyles.js
import { StyleSheet } from 'react-native';

export const btnStyles = StyleSheet.create({
  btn: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#007bff',
    backgroundColor: 'white',
    color: '#007bff',
    borderRadius: 4,
    fontSize: 16,
    textAlign: 'center',
  },
  btnHover: {
    backgroundColor: '#007bff',
    color: 'white',
  },
});

export const modalStyles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    width: 300,
  },
  modalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalClose: {
    fontSize: 16,
    color: 'red',
  },
  modalTextInput: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 14,
  },
  modalBottom: {
    textAlign: 'right',
  },
  modalAppend: {
    backgroundColor: '#007bff',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
});
