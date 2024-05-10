import React from "react";
import { Td } from "@chakra-ui/react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{gender}</Td>
      <Td>{role}</Td>
      <Td>{maritalStatus}</Td>
    </Tr>
  );
};

export default UserRow;
