// TableView.tsx
import React from 'react';
import { FlexLayoutContainer, FlexLayoutConfig, TabNode } from '@gs-ux-uikit-react/flexlayout';
import { Table } from '@gs-ux-uikit-react/table';

// Sample data for the tables
const tableData: string[][] = [
  ['Row 1, Col 1', 'Row 1, Col 2'],
  ['Row 2, Col 1', 'Row 2, Col 2'],
  ['Row 3, Col 1', 'Row 3, Col 2'],
];

// FlexTable component to render individual tables
class FlexTable extends React.Component<{ component: string }> {
  onAddClick() {
    alert(`${this.props.component} - Add icon clicked!`);
  }

  onSettingClick() {
    alert(`${this.props.component} - Setting icon clicked!`);
  }

  renderTable(data: string[][]) {
    return (
      <Table size="sm">
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
      </Table>
    );
  }

  render() {
    if (this.props.component === 'table1') {
      return this.renderTable(tableData.slice(0, 2)); // First 2 rows for Table 1
    }
    if (this.props.component === 'table2') {
      return this.renderTable(tableData.slice(2)); // Remaining rows for Table 2
    }
    return <div>No table found for component: {this.props.component}</div>;
  }
}

// Main component
class TableView extends React.Component {
  static factory(node: TabNode): React.ReactNode {
    const component = node.getComponent();
    if (component === 'table1' || component === 'table2') {
      return <FlexTable component={component} />;
    }
    return <div>Unknown component: {component}</div>;
  }

  onRenderTab(node: TabNode, renderValues: { leading: React.ReactNode; content: string }) {
    const component = node.getComponent() as string;
    const flexTable = <FlexTable component={component} />;

    return {
      ...renderValues,
      leading: (
        <>
          <button
            onClick={() => {
              const table = flexTable as React.ReactElement & { props: { onAddClick: () => void } };
              table.props.onAddClick();
            }}
            style={{ marginRight: '5px' }}
          >
            Add
          </button>
          <button
            onClick={() => {
              const table = flexTable as React.ReactElement & { props: { onSettingClick: () => void } };
              table.props.onSettingClick();
            }}
          >
            Settings
          </button>
        </>
      ),
    };
  }

  render() {
    const layout: FlexLayoutConfig = {
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
            weight: 50,
          },
          {
            type: 'tabset',
            children: [
              {
                type: 'tab',
                name: 'Table 2',
                component: 'table2',
            ],
            weight: 50,
          },
        ],
      ],
    };

    return (
      <div style={{ height: '500px', width: '100%', border: '1px solid gray' }}>
        <FlexLayoutContainer
          model={layout}
          factory={TableView.factory}
          onRenderTab={this.onRenderTab}
        />
      </div>
    );
  }
}

export default TableView;
