import React, { useState, useEffect} from 'react';
import { Table, Space , Dropdown, Button, message, Menu} from 'antd';
import usePetStore from "../../Store/pet-store";


const { Column } = Table;
const { Item } = Menu;

const items = [
  {
    key: '1',
    label: 'Approve',
    staustext: 'Approved',
    color: 'green'
  },
  {
    key: '2',
    label: 'Deny',
    staustext: 'Denied',
    color: 'red'
  },
];

const AdoptPetsTable = () => {

    const applicantsList = usePetStore((state) => state.applicantsList);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({});

    useEffect(() => {
        fetchApplicantsList();
      }, []);
    
      const fetchApplicantsList = async () => {
        setLoading(true);
        try {
          const response = await fetch('http://localhost:3001/applicantsList');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          usePetStore.setState({ applicantsList: data });

        } catch (error) {
          console.error('Error retrieving pet:', error);
        } finally {
          setLoading(false);
        }
      };

    const handleClick = (staustext, name) => {
      if (staustext === "Approved") {
        message.success(`Applicant ${name}'s adoption request has been ${staustext}`);
      } else if (staustext === "Denied") {
        message.error(`Applicant ${name}'s adoption request has been ${staustext}`);
      }
      setStatus({ ...status, [name]: staustext });
    };
  

      const getItemColor = (name) => {
        const currentStatus = status[name];
        if (currentStatus === 'Approved') {
          return 'green';
        } else if (currentStatus === 'Denied') {
          return 'red';
        }
        return 'inherit';
      };


  return(
    <>
        <Table dataSource={applicantsList} loading={loading} >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Reason" dataIndex="reason" key="reason" />
        <Column title="Owned Pet Before" dataIndex="ownedPetBefore" key="ownedPetBefore" className="text-center" />
        <Column
          title="Approval"
          key="action"
          render={(_, record) => (
          <Space size="middle">
            <Dropdown
                overlay={
                  <Menu onClick={({ key }) => handleClick(key, record.name)}>
                    {items.map(item => (
                    <Item key={item.staustext} disabled={status[record.name] === item.staustext}>
                      {item.label}
                    </Item>
                    ))}
                  </Menu>
                }
                >
               <Button disabled={status[record.name] === 'approve' || status[record.name] === 'decline'}>
                Status
              </Button>
            </Dropdown>
              <span style={{ color: getItemColor(record.name) }}>{status[record.name]}</span>
          </Space>
          )}
        />

        </Table>
    </>


  );

};

export default AdoptPetsTable;


