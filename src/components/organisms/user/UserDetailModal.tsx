import { memo, VFC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>User Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Nick Name</FormLabel>
              <Input value="Tomatoront" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <Input value="Jessica Canada" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>eMail</FormLabel>
              <Input value="1234@567.com" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input value="123-4556-7889" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
