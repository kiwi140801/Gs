import React from 'react';
import { Table } from '@gs-ux-uitoolkit-react/table';

const TableView = () => {
  const data = [
    ['Name', 'Age', 'Location'],
    ['Alice', '24', 'New York'],
    ['Bob', '30', 'London'],
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Table align="center" bgcolor="#e0f7fa" border={1} bordered={true} cellAlignment="center">
        <thead>
          <tr>
            {data[0].map((heading, i) => (
              <th key={i}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableView;
