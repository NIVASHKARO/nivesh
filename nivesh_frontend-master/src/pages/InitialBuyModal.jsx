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
  import InitialBuy from "./InitialBuy";
  
  function InitialBuyModal({
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
              <InitialBuy />
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default InitialBuyModal;
  