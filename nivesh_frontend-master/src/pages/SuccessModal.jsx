import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Success from "./Success";

function SuccessModal({
    isSuccessOpen,
    handleClose,
    handleOpen
}) {
  const btnRef = useRef();
  return (
    <>
      <Modal
        onClose={handleClose}
        finalFocusRef={btnRef}
        isOpen={isSuccessOpen}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Successful !!!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Success />
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SuccessModal;
