import React from 'react';
import Table from '../components/Table';

const Home = () => {
    return (
        <div className='main_container'>
           <div className='create-title'>
           <h3>Invoice Details</h3>
           <button className='add_new'>+AddNew</button>
           </div>
            <Table />
            
        </div>
    );
}

export default Home;
