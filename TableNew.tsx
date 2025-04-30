import React from 'react';
import FlexLayout from '@gs-ux-uitoolkit-react/flexlayout';
import { Table } from '@gs-ux-uitoolkit-react/table';

const tableData1 = [
  ['Name', 'Age', 'Location'],
  ['Alice', '24', 'New York'],
  ['Bob', '30', 'London']
];

const tableData2 = [
  ['Product', 'Price', 'Stock'],
  ['Laptop', '$1000', '50'],
  ['Phone', '$500', '120']
];

const renderTable = (data: string[][]) => (
  <Table align="center" bordered={true} cellAlignment="center">
    <thead>
      <tr>
        {data[0].map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.slice(1).map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

const FlexTables = () => {
  const factory = (node: any) => {
    const component = node.getComponent();
    if (component === 'table1') return renderTable(tableData1);
    if (component === 'table2') return renderTable(tableData2);
    return null;
  };

  return (
    <FlexLayout
      modelFromJson={{
        global: {},
        borders: [],
        layout: {
          type: 'row',
          children: [
            {
              type: 'tabset',
              children: [{ type: 'tab', name: 'Table 1', component: 'table1' }]
            },
            {
              type: 'tabset',
              children: [{ type: 'tab', name: 'Table 2', component: 'table2' }]
            }
          ]
        }
      }}
      factory={factory}
    />
  );
};

export default FlexTables;
