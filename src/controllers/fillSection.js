import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import { nanoid } from 'nanoid';
import Section from '../components/Section';
import { getData } from '../utils/getData';
import buildDescription from '../utils/buildDescription';
import ProfileHeader from '../components/ProfileHeader';

function FillSection() {
  const [Header, setHeader] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      const { Header, ...information } = data;
      setHeader(Header);
      const sections = Object.entries(information);
      setData(
        sections.map(([title, content]) => {
          return {
            title,
            content: content.data.map(item => buildDescription(title, item)),
            priority: content.priority,
          };
        }),
      );
    });
  }, []);

  return (
    <>
      <ProfileHeader Header={Header} />
      <Row>
        {data.map(item => (
          <Section
            key={nanoid()}
            title={item.title}
            content={item.content}
            priority={item.priority}
          />
        ))}
      </Row>
    </>
  );
}

export default FillSection;
