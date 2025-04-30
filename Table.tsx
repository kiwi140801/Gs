// src/home/TableView.tsx

import React from 'react';
import { Table } from '@gs-ux-uitoolkit-react/table';

const TableView: React.FC = () => {
  const data = [
    ['Name', 'Age', 'Location'],
    ['Alice', '24', 'New York'],
    ['Bob', '30', 'London'],
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Table
        align="center"
        bgcolor="#e0f7fa"
        border={1}
        bordered={true}
        cellAlignment="center"
        data={data}
      />
    </div>
  );
};

export default TableView;
