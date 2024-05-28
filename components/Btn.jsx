import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { btnStyles, modalStyles } from './styles'; // 스타일 시트 import

const Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [stationValue, setStationValue] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNameChange = (text) => {
    setNameValue(text);
  };

  const handleStationChange = (text) => {
    setStationValue(text);
  };

  const sendData = () => {
    console.log(nameValue);
    console.log(stationValue);
    setIsModalOpen(false);
    setNameValue('');
    setStationValue('');
  };

  return (
    <View>
      <TouchableOpacity style={btnStyles.btn} onPress={toggleModal}>
        <Text>만날 사람들을 추가해주세요!</Text>
      </TouchableOpacity>

      {isModalOpen && (
        <View style={modalStyles.modal}>
          <View style={modalStyles.modalTop}>
            <Text>모달 창</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={modalStyles.modalClose}>닫기</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={modalStyles.modalTextInput}
            value={nameValue}
            onChangeText={handleNameChange}
            placeholder="이름을 입력하세요"
          />
          <TextInput
            style={modalStyles.modalTextInput}
            value={stationValue}
            onChangeText={handleStationChange}
            placeholder="지하철 역을 입력해주세요"
          />
          <View style={modalStyles.modalBottom}>
            <TouchableOpacity style={modalStyles.modalAppend} onPress={sendData}>
              <Text>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Btn;
