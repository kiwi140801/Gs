// TableView.tsx
import React from 'react';
import FlexLayout, { Model } from '@gs-ux-uikit-react/flexlayout';

// Sample data for the tables
const tableData: string[][] = [
  ['Row 1, Col 1', 'Row 1, Col 2'],
  ['Row 2, Col 1', 'Row 2, Col 2'],
  ['Row 3, Col 1', 'Row 3, Col 2'],
];

// Function to render a table
const renderTable = (data: string[][]) => (
  <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
        <th style={{ border: '1px solid black', padding: '8px' }}>Column 2</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex} style={{ border: '1px solid black', padding: '8px' }}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// FlexTable component to render individual tables
const FlexTable = ({ component }: { component: string }) => {
  if (component === 'table1') {
    return renderTable(tableData.slice(0, 2)); // First 2 rows for Table 1
  }
  if (component === 'table2') {
    return renderTable(tableData.slice(2)); // Remaining rows for Table 2
  }
  return <div>No table found for component: {component}</div>;
};

// Factory function to map components
const factory = (node: any) => {
  const component = node.getComponent();
  if (component === 'table1' || component === 'table2') {
    return <FlexTable component={component} />;
  }
  return <div>Unknown component: {component}</div>;
};

// Main component
const TableView = () => {
  const layout = {
    global: {},
    borders: [],
    layout: {
      type: 'row',
      children: [
        {
          type: 'tabset',
          children: [
            {
              type: 'tab',
              name: 'Table 1',
              component: 'table1',
            },
          ],
          weight: 50, // Equal width for both tabsets
        },
        {
          type: 'tabset',
          children: [
            {
              type: 'tab',
              name: 'Table 2',
              component: 'table2',
            },
          ],
          weight: 50,
        },
      ],
    },
  };

  const model = Model.fromJson(layout);

  return (
    <div style={{ height: '500px', width: '100%', border: '1px solid gray' }}>
      <FlexLayout model={model} factory={factory} />
    </div>
  );
};

export default TableView;
