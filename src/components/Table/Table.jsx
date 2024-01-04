import React, { useState } from "react";
import useInvoiceStore from "../../store/InvoiceStore";
import TableRow from "./TableRow";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useInvoiceStore((state) => state.invoice);

  return (
    <div className="table_props">
      <table className="table_values">
        <thead>
          <tr>
            <td>Invoice</td>
            <td>Invoice Date</td>
            <td>Invoice Due Date</td>
            <td>Status</td>
            <td>Amount</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="table_body">
          {data.map((val) => (
            <TableRow
              val={val}
              key={val.invoiceId}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
