import React from "react";
import data from "../data";
import Button from "./Button";

const Table = () => {
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
        <tbody>
          {data.map((val, key) => (
            <tr key={val.invoiceId}>
              <td>{val.invoiceId}</td>
              <td>{val.invoiceDate}</td>
              <td>{val.invoiceDueDate}</td>
              <td>{val.status}</td>
              <td>{val.amount}</td>
              <td className="btn_action">
                <Button />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
