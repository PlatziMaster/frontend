import React from 'react';
import { nanoid } from 'nanoid';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Collapse, Col, Progress } from 'antd';

const formattedHeader = header => (
  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{header}</div>
);

// Give us the correct element depending in what we want
const contentTypes = {
  Text: ({ body, header }) => (
    <Card
      key={nanoid()}
      title={body && formattedHeader(header)}
      size="small"
      style={{ backgroundColor: 'transparent', borderColor: 'black' }}
    >
      <span>{body || header}</span>
    </Card>
  ),
  Percentage: ({ body, header }) => (
    <Card
      key={nanoid()}
      title={formattedHeader(header)}
      size="small"
      style={{ backgroundColor: 'transparent', borderColor: 'black' }}
    >
      <Progress percent={body} />
    </Card>
  ),
  Url: ({ body, header }) => (
    <Card
      key={nanoid()}
      size="small"
      style={{ backgroundColor: 'transparent', borderColor: 'black' }}
    >
      <a href={body} target="_blank" rel="noreferrer">
        {header}
      </a>
    </Card>
  ),
};

function Section({ title, content, priority }) {
  //If field is extensive will have all the row for it
  const priorityAssigned = priority || 2;

  return (
    <Col
      xs={22}
      sm={22}
      md={22 / priorityAssigned}
      lg={22 / priorityAssigned}
      style={{
        backgroundColor: '#bfeff2',
        borderRadius: '2%',
        margin: '1%',
      }}
    >
      <Collapse
        defaultActiveKey={['1']}
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
        ghost
        size="small"
        accordion
      >
        <Collapse.Panel key="1" header={formattedHeader(title)}>
          {content.map(item => contentTypes[item.type](item))}
        </Collapse.Panel>
      </Collapse>
    </Col>
  );
}

export default Section;
