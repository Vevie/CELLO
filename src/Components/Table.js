import React, { useState, useEffect}from 'react';
import {Button } from "react-bootstrap"
import { Table, Space, message, Popconfirm  } from 'antd';
import { FaEdit , FaRegTrashAlt} from "react-icons/fa";
import { Link } from "react-router-dom";
import usePetStore from "../store/pet-store";

const { Column } = Table;

const TableContent = () => {
  const users = usePetStore((state) => state.users);
  //const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      usePetStore.setState({ users: data });
      //setUsers(data);
    } catch (error) {
      console.error('Error retrieving pet:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      usePetStore.setState((state) => ({
        users: state.users.filter((user) => user.id !== userId),
      }));
     //setUsers(users.filter(user => user.id !== userId));
      console.log('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const confirmDelete = (userId) => {
    handleDelete(userId);
    message.success('Deleted successfully!');
  };

  return (
    <>
        <div className="d-flex justify-content-end">
        <Link className="custom-color" to={`/dashboard/add`}>
          <Button type="button" className="btn btn-primary p-1 px-3 mb-3">Add a New Pet</Button>
        </Link>
        </div>

      <Table dataSource={users} loading={loading}>
        <Column title="Pet Name" dataIndex="petName" key="petName" />
        <Column title="Owner" dataIndex="owner" key="owner" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
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
