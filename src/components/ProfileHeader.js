import { Avatar, Typography, Row, Col } from 'antd';
import React from 'react';

const { Title } = Typography;

//It defines a ProfileHeader component that takes in a Header prop and destructures it to extract the
//  name, profession, phone, email, address, profile and avatarUrl.
//It then returns a Row component with 24 spans that has flex display with alignItems set to center.
//Inside of this row are three Col components with xs/sm/md/lg values set to 24/24/5/5 for the first one
//  and 8/8/8 for the other two.
//The first Col component has an Avatar component with size set to 200 and src set to avatarUrl.
//The second Col component has a Title level 3 element with name as its content as well as divs containing
//  phone, email and address.
//The third Col component has a div with fontSize 18 and fontWeight bold
//containing profession as well as another div containing profile.
const ProfileHeader = ({ Header }) => {
  const {
    name,
    profession,
    phone,
    email,
    address,
    profile,
    avatarUrl,
  } = Header;

  return (
    <Row
      span={24}
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: '2%',
        margin: '1%',
        padding: '1%',
      }}
    >
      <Col xs={24} sm={24} md={5} lg={5} offset={1} align='center'>
        <Avatar size={200} src={avatarUrl} />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} align='center'>
        <Title level={3}>{name}</Title>
        <div style={{ fontSize: 14 }}>{phone}</div>
        <div style={{ fontSize: 14 }}>{email}</div>
        <div style={{ fontSize: 14 }}>{address}</div>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} align='center'>
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>{profession}</div>
        <div style={{ fontSize: 14 }}>{profile}</div>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
