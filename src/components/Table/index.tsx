import { ReactElement, useState } from 'react';

import { Container, Pagination } from './styles';

type TableProps = {
  limit?: number;
  headData: string[];
  bodyData: any[];
  renderHead: (item: string, index: number) => ReactElement;
  renderBody: (item: any, index: number) => ReactElement;
};

function Table(props: TableProps) {
  const initDataShow =
    props.limit && props.bodyData
      ? props.bodyData.slice(0, props.limit)
      : props.bodyData;

  const [dataShow, setDataShow] = useState(initDataShow);

  let pages = 1;

  let range: number[] = [];

  if (props.limit !== undefined) {
    const page = Math.floor(props.bodyData.length / props.limit);
    pages = props.bodyData.length % props.limit === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [currPage, setCurrPage] = useState(0);

  const selectPage = (page: number) => {
    const start = Number(props.limit) * page;
    const end = start + Number(props.limit);

    setDataShow(props.bodyData.slice(start, end));

    setCurrPage(page);
  };

  return (
    <>
      <Container>
        <table>
          {props.headData && props.renderHead ? (
            <thead>
              <tr>{props.headData.map(props.renderHead)}</tr>
            </thead>
          ) : null}

          {props.bodyData && props.renderBody ? (
            <tbody>{dataShow.map(props.renderBody)}</tbody>
          ) : null}
        </table>
      </Container>

      {pages > 1 && (
        <Pagination>
          {range.map((item, index) => (
            <button
              key={index}
              className={`item ${currPage === index ? 'active' : ''}`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </button>
          ))}
        </Pagination>
      )}
    </>
  );
}

export { Table };
