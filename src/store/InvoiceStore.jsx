import React from "react";
import { create } from "zustand";

const store = (set) => ({
  invoice: [],

  createInvoice: (newInvoice) =>
    set((state) => {
      return {
        invoice: [...state.invoice, newInvoice],
      };
    }),

  updateInvoice: (data) => {
    set((state) => {
      const mustUpdateObj = state.invoice.filter((item) => item.id !== data.id);
      mustUpdateObj.push(data);

      return { invoice: [...mustUpdateObj] };
    });
  },

  deleteInvoice: (id) =>
    set((state) => {
      return {
        invoice: [...state.invoice.filter((data) => data.invoiceId !== id)],
      };
    }),
});

const useInvoiceStore = create(store);

export default useInvoiceStore;
