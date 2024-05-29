import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, FlatList } from "react-native";
import { btnStyles, modalStyles } from "../../style/BtnStyle";
import STATION_CODE from '../../assets/data/STATION_CODE.json';

const Station = () => {
  const stationNames = STATION_CODE.DATA.map(item => item.station_nm);
  return stationNames;
}

const Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [stationValue, setStationValue] = useState("");
  const [filteredStations, setFilteredStations] = useState([]);
  const [people, setPeople] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNameChange = (text) => {
    setNameValue(text);
  };

  const handleStationChange = (text) => {
    setStationValue(text);
    if (text) {
      const stationNames = Station();
      const filtered = stationNames.filter(station => station.startsWith(text));
      setFilteredStations(filtered);
    } else {
      setFilteredStations([]);
    }
  };

  const selectStation = (station) => {
    setStationValue(station);
    setFilteredStations([]);
  };

  const sendData = () => {
    if (nameValue && stationValue) {
      const newPerson = { name: nameValue, station: stationValue };
      setPeople([...people, newPerson]);
      setIsModalOpen(false);
      setNameValue("");
      setStationValue("");
    }
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
          {filteredStations.length > 0 && (
            <FlatList
              data={filteredStations}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectStation(item)}>
                  <Text style={modalStyles.listItem}>{item}</Text>
                </TouchableOpacity>
              )}
              style={modalStyles.autocompleteList}
            />
          )}
          <View style={modalStyles.modalBottom}>
            <TouchableOpacity
              style={modalStyles.modalAppend}
              onPress={sendData}
            >
              <Text>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView>
        {people.map((person, index) => (
          <View key={index} style={modalStyles.listItem}>
            <Text>이름: {person.name}</Text>
            <Text>지하철 역: {person.station}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Btn;
