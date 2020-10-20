import "./NewGameDialog.css";
import React, { useState } from "react";
import GuideBoard from "./GuideBoard";
import Modal from "./common/Modal";
import { localStorageKeys, boardTemplates } from "../constants";

const NameInput = ({ playerNumber, value, onChange }) => {
  return (
    <div>
      <label>
        {`Player ${playerNumber} : `}
        <input
          name={`player${playerNumber}`}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

const NewGameDialog = ({ onStartGame }) => {
  const [player1Name, setPlayer1Name] = useState(
    localStorage.getItem(localStorageKeys.PLAYER1_NAME) || ""
  );
  const [player2Name, setPlayer2Name] = useState(
    localStorage.getItem(localStorageKeys.PLAYER2_NAME) || ""
  );
  const [changeBoard, setChangeBoard] = useState(false);
  const [maxRound, setMaxRound] = useState(
    Number(localStorage.getItem(localStorageKeys.MAX_ROUND) || 3)
  );
  const [sixthExpedition, setSixthExpedition] = useState(
    localStorage.getItem(localStorageKeys.SIXTH_EXPEDITION) === "true"
  );
  const [colorOrder, setColorOrder] = useState(
    JSON.parse(
      localStorage.getItem(localStorageKeys.COLORS) ||
        JSON.stringify(boardTemplates.purpleYellow)
    )
  );

  const handleChangeColor = (boardTemplate) => {
    setColorOrder(boardTemplate);
    localStorage.setItem(
      localStorageKeys.COLORS,
      JSON.stringify(boardTemplate)
    );
    setChangeBoard(false);
  };

  return (
    <React.Fragment>
      <Modal title="새 게임 시작하기">
        <div>
          <label>
            라운드 수
            <input
              type="number"
              value={maxRound}
              onChange={(e) => {
                setMaxRound(e.target.value);
                localStorage.setItem(
                  localStorageKeys.MAX_ROUND,
                  e.target.value
                );
              }}
            />
          </label>
        </div>
        <br />
        <div>
          <div
            onClick={() => {
              setChangeBoard(true);
            }}
          >
            보드 변경
          </div>
          <GuideBoard
            colors={applySixth(colorOrder, sixthExpedition)}
            top={
              <NameInput
                value={player1Name}
                onChange={(e) => {
                  setPlayer1Name(e.target.value);
                  localStorage.setItem(
                    localStorageKeys.player1Name,
                    e.target.value
                  );
                }}
                playerNumber={1}
              />
            }
            bottom={
              <NameInput
                value={player2Name}
                onChange={(e) => {
                  setPlayer2Name(e.target.value);
                  localStorage.setItem(
                    localStorageKeys.player2Name,
                    e.target.value
                  );
                }}
                playerNumber={2}
              />
            }
          />
        </div>
        <div>
          <button
            onClick={() =>
              onStartGame({
                player1Name,
                player2Name,
                maxRound,
                sixthExpedition,
                colorOrder,
              })
            }
          >
            시작
          </button>
        </div>
      </Modal>
      {changeBoard && (
        <Modal>
          <div
            style={{
              width: 200,
              backgroundColor: "#fff",
              padding: 10,
            }}
          >
            <div>
              <label>
                Sixth Expedition:
                <input
                  type="checkbox"
                  name="sixth"
                  checked={sixthExpedition}
                  onChange={(e) => {
                    setSixthExpedition(e.target.checked);
                    localStorage.setItem(
                      localStorageKeys.SIXTH_EXPEDITION,
                      e.target.checked
                    );
                  }}
                />
              </label>
            </div>
            <GuideBoard
              colors={applySixth(boardTemplates.yellowWhite, sixthExpedition)}
              onClick={() => {
                handleChangeColor(boardTemplates.yellowWhite);
              }}
            />
            <hr />
            <GuideBoard
              colors={applySixth(
                boardTemplates.purpleYellowReversed,
                sixthExpedition
              )}
              onClick={() => {
                handleChangeColor(boardTemplates.purpleYellowReversed);
              }}
            />
            <hr />
            <GuideBoard
              colors={applySixth(boardTemplates.purpleYellow, sixthExpedition)}
              onClick={() => {
                handleChangeColor(boardTemplates.purpleYellow);
              }}
            />
            <hr />
            <GuideBoard
              colors={applySixth(
                boardTemplates.yellowWhiteReversed,
                sixthExpedition
              )}
              onClick={() => {
                handleChangeColor(boardTemplates.yellowWhiteReversed);
              }}
            />
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

function applySixth(arr, sixth) {
  if (!sixth) {
    return arr.filter((item) => item !== "purple");
  }

  return arr;
}

export default NewGameDialog;
