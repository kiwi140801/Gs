// TableView.tsx
import React from 'react';
import { FlexLayoutContainer, FlexLayoutConfig, TabNode } from 'gs-ux-uitoolkit-react/flexlayout';
import { table } from 'gs-ux-uitoolkit-react/table'; // Assuming this is how it's used

// Dummy table component
const TableComponent1 = () => (
  <table>
    <thead>
      <tr>
        <th>ID</th><th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>John</td></tr>
      <tr><td>2</td><td>Jane</td></tr>
    </tbody>
  </table>
);

const TableComponent2 = () => (
  <table>
    <thead>
      <tr>
        <th>ID</th><th>Product</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Laptop</td></tr>
      <tr><td>2</td><td>Phone</td></tr>
    </tbody>
  </table>
);

// Layout config
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
          },
        ],
        weight: 50,
      },
    ],
  },
};

export default class TableView extends React.Component {
  onRenderTab = (node: TabNode, renderValues: { leading: React.ReactNode; content: string }) => {
    const comp = node.getComponent();
    if (comp === 'table1') return <TableComponent1 />;
    if (comp === 'table2') return <TableComponent2 />;
    return null;
  };

  render() {
    return (
      <div style={{ height: '500px', width: '100%', border: '1px solid gray' }}>
        <FlexLayoutContainer
          model={layout}
          factory={() => undefined}
          onRenderTab={this.onRenderTab}
        />
      </div>
    );
  }
}
