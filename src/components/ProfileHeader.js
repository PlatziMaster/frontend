import { Avatar, Typography, Row, Col } from 'antd';
import React from 'react';

const { Title } = Typography;

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
    <Row span={24} style={{ display: 'flex', alignItems: 'center' }}>
      <Col xs={24} sm={24} md={5} lg={5} offset={1}>
        <Avatar size={124} src={avatarUrl} />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8}>
        <Title level={3}>{name}</Title>
        <div style={{ fontSize: 14 }}>{phone}</div>
        <div style={{ fontSize: 14 }}>{email}</div>
        <div style={{ fontSize: 14 }}>{address}</div>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8}>
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>{profession}</div>
        <div style={{ fontSize: 14 }}>{profile}</div>
      </Col>
    </Row>
  );
};

export default ProfileHeader;
