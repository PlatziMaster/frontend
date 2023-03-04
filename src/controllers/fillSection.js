import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import { nanoid } from 'nanoid';
import Section from '../components/Section';
import { getData } from '../utils/getData';
import buildDescription from '../utils/buildDescription';

function FillSection() {
  const [, setHeader] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      const { header, ...information } = data;
      setHeader(header);
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
  );
}

export default FillSection;
