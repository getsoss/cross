import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import STATION_CODE from "../../../assets/data/STATION_CODE.json";
import {
  btnStyles,
  modalStyles,
} from "../../../style/DeparturesAppend/BtnStyle";

const Station = () => {
  const stationNames = STATION_CODE.DATA.map((item) => item.station_nm);
  return stationNames;
};

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
      const filtered = stationNames.filter((station) =>
        station.startsWith(text)
      );
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
    <View style={styles.container}>
      <TouchableOpacity style={btnStyles.btn} onPress={toggleModal}>
        <Text>만날 사람들을 추가해주세요!</Text>
      </TouchableOpacity>

      {isModalOpen && (
        <View style={modalStyles.modalOverlay}>
          <View style={modalStyles.modal}>
            <View style={modalStyles.modalTop}>
              <Text>이름과 출발역을 적어 주세요!</Text>
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
                style={styles.autocompleteList}
              />
            )}
            <View style={modalStyles.modalBottom}>
              <TouchableOpacity
                style={modalStyles.modalAppend}
                onPress={sendData}
              >
                <Text style={{ color: "white" }}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <ScrollView>
        {people.map((person, index) => (
          <View key={index} style={styles.personItem}>
            <Text style={styles.personText}>이름: {person.name}</Text>
            <Text style={styles.personText}>지하철 역: {person.station}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  autocompleteList: {
    position: "absolute",
    top: 140,
    left: 20,
    right: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    zIndex: 1,
  },
  personItem: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  personText: {
    fontSize: 16,
  },
});

export default Btn;
