import React from "react";
import { useState } from "react";
import "../../css/btn.css";
import "../../css/modal.css";

const Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [stationValue, setStationValue] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };
  const handleStationChange = (event) => {
    setStationValue(event.target.value);
  };

  const sendData = () => {
    console.log(nameValue);
    console.log(stationValue);
    setIsModalOpen(!isModalOpen);
    setNameValue("");
    setStationValue("");
  };
  return (
    <div>
      <div className="btn" onClick={toggleModal}>
        만날 사람들을 추가해주세요!
      </div>

      {isModalOpen && (
        <div>
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal">
            <div className="modal-top">
              <h2>모달 창</h2>
              <button className="modal-close" onClick={toggleModal}>
                닫기
              </button>
            </div>
            <input
              type="text"
              value={nameValue}
              onChange={handleNameChange}
              placeholder="이름을 입력하세요"
            />
            <input
              type="text"
              value={stationValue}
              onChange={handleStationChange}
              placeholder="지하철 역을 입력해주세요"
            />
            <div className="modal-bottom">
              <button className="modal-append" onClick={sendData}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Btn;
