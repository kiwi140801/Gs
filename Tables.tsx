// TableView.tsx
import { Version } from './version';
import { FlexLayoutContainer, type FlexLayoutContainerProps } from './FlexLayout';

// Sample data for the tables
const tableData: string[][] = [
  ['Row 1, Col 1', 'Row 1, Col 2'],
  ['Row 2, Col 1', 'Row 2, Col 2'],
  ['Row 3, Col 1', 'Row 3, Col 2'],
];

// Function to render a table
const renderTable = (data: string[][]) => (
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
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
  return null;
};

// Main component
const TableView = () => {
  const layout: FlexLayoutContainerProps['children'] = [
    {
      type: 'tabset',
      children: [{ type: 'tab', name: 'Table 1', component: 'table1' }],
    },
    {
      type: 'tabset',
      children: [{ type: 'tab', name: 'Table 2', component: 'table2' }],
    },
  ];

  return <FlexLayoutContainer factory={factory} children={layout} />;
};

// Placeholder for factory function (adjust based on your FlexLayout library)
const factory = () => null; // Replace with actual factory implementation if needed

export default TableView;
