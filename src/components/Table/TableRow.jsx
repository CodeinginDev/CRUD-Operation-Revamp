import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const TableRow = ({ val, setIsOpen, isOpen }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{val.invoiceId}</td>
      <td>{val.invoiceDate}</td>
      <td>{val.invoiceDueDate}</td>
      <td>{val.status}</td>
      <td>{val.amount}</td>
      <td className="btn_action">
        <Button
          type="secondary_btn"
          onClick={() => {
            navigate(`edit/${val.invoiceId}`, { state: { data: val } });
          }}
        >
          Edit
        </Button>

        <Button
          type="danger_btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Delete
        </Button>
      </td>
      {isOpen && <Modal setIsOpen={setIsOpen} val={val} />}
    </tr>
  );
};

export default TableRow;
