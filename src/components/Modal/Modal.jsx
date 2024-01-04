import React from "react";
import Button from "../Button/Button";
import useInvoiceStore from "../../store/InvoiceStore";

const Modal = ({ val, setIsOpen }) => {
  const deleteInvoice = useInvoiceStore((state) => state.deleteInvoice);
  function handleDelete() {
    deleteInvoice(val.invoiceId);
    setIsOpen(false);
  }
  return (
    <div className="modal_container">
      <div className="modal_overlay"> </div>
      <div className="modal">
        <h3>Are you sure you want to delete ?</h3>
        <div className="modal_btn">
          <Button type="primary_btn" onClick={handleDelete}>
            Yes
          </Button>
          <Button type="danger_btn" onClick={() => setIsOpen(false)}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
