import React from "react";

const CreatePage = () => {
  return (
    <div className="background_color">
      <form className="add_items">
        <h1 className="form_heading">Channakya Invoice</h1>
        <label>Invoice Date</label>
        <input type="text" name="invoice" />
        <br />
        <label>Invoice Due Date</label>
        <input type="date" name="invoice_due_date" />
        <br />
        <label>Status</label>
        <select name="status">
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
          <option value="pending">Pending</option>
        </select>
     
        <br />
        <label>Amount</label>
        <input type="text" name="amount" />
        <br />

        <button className="form_btn">Submit</button>
      </form>
    </div>
  );
};

export default CreatePage;
