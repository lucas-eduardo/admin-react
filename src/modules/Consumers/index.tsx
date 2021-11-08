import { Card } from '@components/Card';
import { Table } from '@components/Table';

import list from './list.json';
import { Container } from './styles';

type Customer = {
  id: number;
  name: string;
  email: string;
  location: string;
  phone: string;
  total_spend: string;
  total_orders: number;
};

const customerTableHead = [
  '',
  'name',
  'email',
  'phone',
  'total orders',
  'total spend',
  'location',
];

function renderHead(item: string, index: number) {
  return <th key={index}>{item}</th>;
}

function renderBody(item: Customer, index: number) {
  return (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>{item.total_spend}</td>
      <td>{item.location}</td>
    </tr>
  );
}

function Consumers() {
  return (
    <Container>
      <h2>Consumers</h2>

      <Card>
        <div className="header">
          <h3>Latest Orders</h3>
        </div>

        <div className="body">
          <Table
            limit={10}
            headData={customerTableHead}
            renderHead={renderHead}
            bodyData={list}
            renderBody={renderBody}
          />
        </div>
      </Card>
    </Container>
  );
}

export default Consumers;
