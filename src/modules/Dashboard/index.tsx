import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';

import { Badge, BadgeTypes } from '@components/Badge';
import { Card } from '@components/Card';
import { CardInfo } from '@components/CardInfo';
import { Table } from '@components/Table';
import { useAppSelector } from '@hooks/redux';

import {
  Container,
  WrapperCards,
  WrapperLineOne,
  WrapperLineTwo,
} from './styles';

type CusomerBody = {
  username: string;
  order: string;
  price: string;
};

type OrderBody = {
  id: string;
  user: string;
  date: string;
  price: string;
  status: 'shipping' | 'pending' | 'paid' | 'refund';
};

const cards = [
  {
    icon: 'bx bx-shopping-bag',
    count: '1,995',
    title: 'Total sales',
  },
  {
    icon: 'bx bx-cart',
    count: '2,001',
    title: 'Daily visits',
  },
  {
    icon: 'bx bx-dollar-circle',
    count: '$2,632',
    title: 'Total income',
  },
  {
    icon: 'bx bx-receipt',
    count: '1,711',
    title: 'Total orders',
  },
];

const chartOptions: ApexOptions = {
  colors: ['#6ab04c', '#2980b9'],
  chart: {
    toolbar: {
      show: false,
    },
    background: 'transparent',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: { curve: 'smooth' },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
  legend: {
    position: 'top',
  },
  grid: {
    show: false,
  },
};

const chartSeries = [
  {
    name: 'Online Customers',
    data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
  },
  {
    name: 'Store Customers',
    data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
  },
];

const topCustomers = {
  head: ['user', 'total orders', 'total spending'],
  body: [
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'frank iva',
      order: '250',
      price: '$12,251',
    },
    {
      username: 'anthony baker',
      order: '120',
      price: '$10,840',
    },
    {
      username: 'frank iva',
      order: '110',
      price: '$9,251',
    },
    {
      username: 'anthony baker',
      order: '80',
      price: '$8,840',
    },
  ],
};

const latestOrders = {
  header: ['order id', 'user', 'total price', 'date', 'status'],
  body: [
    {
      id: '#OD1711',
      user: 'john doe',
      date: '17 Jun 2021',
      price: '$900',
      status: 'shipping',
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid',
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'pending',
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid',
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'refund',
    },
  ],
};

const orderStatus = {
  shipping: 'primary',
  pending: 'warning',
  paid: 'success',
  refund: 'danger',
};

function renderCusomerHead(item: string, index: number) {
  return <th key={index}>{item}</th>;
}

function renderCusomerBody(item: CusomerBody, index: number) {
  return (
    <tr key={index}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
  );
}

function renderOrderHead(item: string, index: number) {
  return <th key={index}>{item}</th>;
}

function renderOrderBody(item: OrderBody, index: number) {
  return (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
        <Badge
          type={orderStatus[item.status] as BadgeTypes}
          content={item.status}
        />
      </td>
    </tr>
  );
}

function Dashboard() {
  const isDark = useAppSelector(({ theme }) => theme.isDark);

  return (
    <Container>
      <h2>Dashboard</h2>

      <WrapperLineOne>
        <WrapperCards>
          {cards.map((item, index) => (
            <CardInfo
              key={index}
              title={item.title}
              icon={item.icon}
              count={item.count}
            />
          ))}
        </WrapperCards>

        <Card className="full-height">
          <Chart
            options={
              isDark
                ? {
                    ...chartOptions,
                    theme: { mode: 'dark' },
                  }
                : {
                    ...chartOptions,
                    theme: { mode: 'light' },
                  }
            }
            series={chartSeries}
            type="line"
            height="100%"
          />
        </Card>
      </WrapperLineOne>

      <WrapperLineTwo>
        <Card>
          <div className="header">
            <h3>Top customers</h3>
          </div>

          <div className="body">
            <Table
              headData={topCustomers.head}
              renderHead={renderCusomerHead}
              bodyData={topCustomers.body}
              renderBody={renderCusomerBody}
            />
          </div>

          <div className="footer">
            <Link to="/">View All</Link>
          </div>
        </Card>

        <Card>
          <div className="header">
            <h3>Latest Orders</h3>
          </div>

          <div className="body">
            <Table
              headData={latestOrders.header}
              renderHead={renderOrderHead}
              bodyData={latestOrders.body}
              renderBody={renderOrderBody}
            />
          </div>

          <div className="footer">
            <Link to="/">View All</Link>
          </div>
        </Card>
      </WrapperLineTwo>
    </Container>
  );
}

export default Dashboard;
