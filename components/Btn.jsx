import React from "react";
import { useState } from "react";
import "../css/btn.css";
import "../css/modal.css";

const Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
              value={inputValue}
              onChange={handleInputChange}
              placeholder="이름을 입력하세요"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Btn;
