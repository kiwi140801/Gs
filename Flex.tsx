import React from 'react';
import { FlexLayoutContainer } from '@gs-ux-uitoolkit-react/flexlayout';
import { Table } from '@gs-ux-uitoolkit-react/table';

const FlexTables = () => {
  const table1Data = [
    ['Make', 'Model', 'Price'],
    ['Toyota', 'Celica', '35000'],
    ['Ford', 'Mondeo', '32000'],
    ['Porsche', 'Boxter', '72000']
  ];

  const table2Data = [
    ['Name', 'Age', 'Location'],
    ['Alice', '24', 'New York'],
    ['Bob', '30', 'London'],
    ['Charlie', '28', 'Tokyo']
  ];

  const renderTable = (data: string[][]) => (
    <Table align="center" border={1} bordered={true} cellalignment="center">
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

  return (
    <FlexLayoutContainer
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
      factory={(node) => {
        const component = node.getComponent();
        if (component === 'table1') {
          return renderTable(table1Data);
        }
        if (component === 'table2') {
          return renderTable(table2Data);
        }
        return null;
      }}
    />
  );
};

export default FlexTables;
