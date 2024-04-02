import React, { useState, useEffect } from "react";
import {Button } from "react-bootstrap"
import { Table, Space, message, Popconfirm  } from 'antd';
import PetForm from "./PetForm";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";


const { Column } = Table;

const TableContent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [resetForm, setResetForm] = useState(false);
  const [formMode, setFormMode] = useState('add'); 

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
      setUsers(data);
    } catch (error) {
      console.error('Error retrieving pet:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record) => {
    setEditUser(record);
    setFormMode('edit');
    setShowForm(true);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setUsers(users.filter(user => user.id !== userId));
      console.log('User deleted successfully!');
      messageApi.open({
        type: 'success',
        content: 'Pet deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const handleAddUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newUser = await response.json();
      setUsers([...users, newUser]);
      console.log('Pet added successfully:', newUser);
      messageApi.open({
        type: 'success',
        content: 'Pet added successfully',
      });
      setShowForm(false);
      setResetForm(true);
    } catch (error) {
      console.error('Error adding pet:', error);
      messageApi.open({
        type: 'error',
        content: 'Error adding pet',
      });
    }

    if (editUser) {
      setEditUser(null);
    }
  };
  const handleUpdateUser = async (userId, userData) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const updatedUser = await response.json();
      setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
      console.log('Pet updated successfully:', updatedUser);
      messageApi.open({
        type: 'success',
        content: 'Pet updated successfully',
      });
      setShowForm(false);
      setResetForm(true);
    } catch (error) {
      console.error('Error updating pet:', error);
    }
  };

  const confirmDelete = (userId) => {
    handleDelete(userId);
    message.success('User deleted successfully!');
  };
  const resetFormMode = () => {
    setFormMode('add');
  };

  return (
    <>
      {showForm && (
        <PetForm
          user={editUser}
          updateUser={handleUpdateUser}
          addUser={handleAddUser}
          resetForm={resetForm}
          onReset={() => setResetForm(false)}
          formMode={formMode}
          resetFormMode={resetFormMode}
        />
      )}
        <div className="d-flex justify-content-end">
          <Button type="button" className="btn btn-primary p-1 px-3 mb-3" onClick={() => setShowForm(true)}>Add a New Pet</Button>
        </div>

        {contextHolder}
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
              <button type="link" className="btn" onClick={() => handleEdit(record)}><FaEdit /></button>
              <Popconfirm
                title="Are you sure you want to delete?"
                onConfirm={() => confirmDelete(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <button type="link" className="btn text-danger" ><FaDeleteLeft /></button>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>

    </>
  );
};

export default TableContent;
