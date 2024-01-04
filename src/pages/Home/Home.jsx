import React from "react";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div className="main_container">
      <div className="create-title">
        <h3>Invoice Details</h3>
        <Button type="tertiary_btn" path="create">
          + Add new
        </Button>
      </div>
      <Table />
    </div>
  );
};

export default Home;
