import React, { useId, useState } from "react";
import useInvoiceStore from "../../store/InvoiceStore";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FormHeading from "./FormHeading";
const CreatePage = () => {
  const invoiceId = useId();
  const invoiceData = useInvoiceStore((state) => state.invoice);
  const createInvoice = useInvoiceStore((state) => state.createInvoice);
  const updateInvoice = useInvoiceStore((state) => state.updateInvoice);
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const location = useLocation();
  const updateData = location?.state?.data;
  const [data, setData] = useState({
    ...invoiceData,
    invoiceId,
    invoiceDate: "",
    invoiceDueDate: "",
    status: "",
    amount: "",
    appointedTime: "",
    privacy: "",
  });

  useEffect(
    function () {
      if (location?.state?.data) {
        setIsEditMode(true);
        setData({
          invoiceId: updateData.invoiceId,
          invoiceDate: updateData.invoiceDate,
          invoiceDueDate: updateData.invoiceDueDate,
          status: updateData.status,
          amount: updateData.amount,
          appointedTime: updateData.appointedTime,
          privacy: updateData.privacy,
        });
      }
    },
    [location?.state?.data]
  );

  const handleChange = (e) => {
    setData({
      ...data,
      invoiceId: data.invoiceId,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (isEditMode) {
      updateInvoice(data);
      setIsEditMode(false);
      console.log("data", data);
      navigate("/");
      return;
    }

    const newData = {
      invoiceId: data.invoiceId,
      invoiceDate: data.invoiceDate,
      invoiceDueDate: data.invoiceDueDate,
      status: data.status,
      amount: data.amount,
      appointedTime: data.appointedTime,
      privacy: data.privacy,
    };

    createInvoice(newData);

    navigate("/");
  }

  return (
    <div className="grid_container_background">
      <div className="grid_container">
        <FormHeading />
        <form onSubmit={handleSubmit} className="add_items">
          <div className="item item1">
            <label>Invoice Date</label>
            <input
              type="text"
              name="invoiceDate"
              value={data.invoiceDate}
              onChange={handleChange}
              placeholder="Invoice date"
            />
          </div>
          <div className="item item2">
            <label>Invoice Due Date</label>
            <input
              value={data.invoiceDueDate}
              onChange={(e) => handleChange(e)}
              type="date"
              name="invoiceDueDate"
              placeholder="Invoice due date"
            />
          </div>
          <div className="item item3">
            <label>Status</label>
            <select
              name="status"
              value={data.status}
              onChange={(e) => handleChange(e)}
            >
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="item item4">
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={data.amount}
              onChange={(e) => handleChange(e)}
              placeholder="Amount"
            />
          </div>
          <div className="item item5">
            <label>Appointed time</label>
            <input
              onChange={(e) => handleChange(e)}
              value={data.appointedTime}
              type="text"
              name="appointedTime"
              placeholder="Appointed time"
            />
          </div>
          <div className="item item6">
            <label>Privacy</label>
            <select
              name="privacy"
              value={data.privacy}
              onChange={(e) => handleChange(e)}
            >
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
          </div>
          <button className="grid_btn">
            {isEditMode ? "update" : "Submit"}
          </button>{" "}
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
