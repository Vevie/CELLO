import React, { useState, useEffect} from 'react';
import {Button } from "react-bootstrap"
import { Table, Space,message, Popconfirm  } from 'antd';
import { FaEdit , FaRegTrashAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import usePetStore from "../../Store/pet-store";

const { Column } = Table;

const TableContent = () => {
  const petList = usePetStore((state) => state.petList);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchPetList();
  }, []);

  const fetchPetList = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/petList');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      usePetStore.setState({ petList: data });
    } catch (error) {
      console.error('Error retrieving pet:', error);
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (petId) => {
    try {
      const response = await fetch(`http://localhost:3001/petList/${petId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      usePetStore.setState((state) => ({
        petList: state.petList.filter((pet) => pet.id !== petId),
      }));
      console.log('Pet deleted successfully!');
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const confirmDelete = (petId) => {
    handleDelete(petId);
    message.success('Deleted successfully!');
  };



  return (
    <>
        <div className="d-flex justify-content-end">
          <Link className="custom-color" to={`/dashboard/add`}>
            <Button type="button" className="btn btn-primary p-1 px-3 mb-3">Add a New Pet</Button>
          </Link>
        </div>

      <Table dataSource={petList} loading={loading}>
        <Column 
          title="Image" 
          dataIndex="imageFile" 
            render={(imageFile) => (
            <img src={imageFile} alt="" style={{ width: '40px',  height: '40px',border: '1px solid #193A6A', borderRadius: '100%'}}/>
            )}
          />
        <Column title="Pet Name" dataIndex="petName" key="petName" />
        <Column title="Pet Age" dataIndex="petAge" key="petAge" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Status" dataIndex="status" key="status" />
        <Column title="Doctor" dataIndex="doctor" key="doctor" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
               <Link className="custom-color" to={`/dashboard/edit/${record.id}`}><FaEdit /></Link>
              <Popconfirm
                title="Are you sure you want to delete?"
                onConfirm={() => confirmDelete(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <button type="link" className="btn text-danger" ><FaRegTrashAlt /></button>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default TableContent;
