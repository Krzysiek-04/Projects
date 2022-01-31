import React, { useState } from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import * as yup from "yup";
import Button from "./Button";
import Input from "./Input";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledModal = styled.form`
  margin: 0 auto;
  padding: 8px;
  height: auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border: 2px solid #fca103;
  border-radius: 12px;
  background: white;
`;

const SelectContainer = styled.select`
  width: 14.8vw;
  padding: 12px;
  align-content: left;
  align-self: right;
  margin: 12px;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

const Modal = ({ user, closeModal, id }) => {
  const [newUser, setNewUser] = useState({ ...user });
  const { submitUserEdit, ...state } = useGlobalContext();
  const selectOptions = Object.values(state.userStatus);

  const userSchema = yup.object().shape({
    name: yup.string().required(),
    mail: yup.string().email(),
    document: yup.number().required().positive().integer().min(11),
    phone: yup.number().required().positive().integer().min(11),
  });

  const userInputsValidation = async () => {
    const isValid = await userSchema.isValid(newUser);
    if (isValid) {
      await submitUserEdit(newUser, id);
      closeModal();
    } else {
      alert("Please input valid info ");
    }
  };

  return (
    <>
      <ModalBackground>
        <StyledModal
          onSubmit={(e) => {
            e.preventDefault();
            userInputsValidation();
          }}
        >
          <ModalWrapper>
            <h3>Edit user </h3>
          </ModalWrapper>
          <Input
            type="text"
            placeholder="Name..."
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            value={newUser.name}
          />
          <Input
            type="text"
            placeholder="E-mail..."
            onChange={(e) => setNewUser({ ...newUser, mail: e.target.value })}
            value={newUser.mail}
          />
          <Input
            type="text"
            placeholder="Document"
            onChange={(e) =>
              setNewUser({ ...newUser, document: e.target.value })
            }
            value={newUser.document}
          />
          <Input
            type="text"
            placeholder="Phone..."
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            value={newUser.phone}
          />
          <SelectContainer
            onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
            name="inputSelect"
            value={newUser.status}
          >
            <option disabled>Select client status</option>
            {selectOptions.map((status, index) => {
              return (
                <option value={status} key={index}>
                  {status}
                </option>
              );
            })}
          </SelectContainer>

          <ModalWrapper>
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                userInputsValidation();
              }}
            >
              Save
            </Button>
            <Button onClick={() => closeModal()}>Cancel</Button>
          </ModalWrapper>
        </StyledModal>
      </ModalBackground>
    </>
  );
};

export default Modal;
