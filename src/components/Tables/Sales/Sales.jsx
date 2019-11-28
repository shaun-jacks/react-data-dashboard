import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import makeSalesData from "../../../mocks/Sales/makeSalesData";
import styled from "styled-components";
import Card from "../../Card";
import { ReactTableStyles } from "../styles";

const SalesTableWrapper = styled.div`
  margin: 1em;
  max-width: 100vw;
`;

const BuyButtonWrapper = styled.button`
  background: var(--primaryVariantColor);
  color: var(--textNormal);
  border-radius: 5px;
  padding: 10px;
  width: 75%;
  &:hover {
    cursor: pointer;
  }
`;

const SellButtonWrapper = styled.button`
  background: var(--primaryColor);
  color: var(--bgMore);
  border-radius: 5px;
  padding: 10px;
  width: 75%;
  &:hover {
    cursor: pointer;
  }
`;

const PROFIT_COLORS = ["#03dac5", "#ff7597"];

const SalesTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id"
      },
      {
        Header: "Festival ID",
        accessor: "festival_id"
      },
      {
        Header: "Tickets Sold",
        accessor: "tickets_sold",
        Cell: v =>
          v.value > 50000 ? (
            <p style={{ margin: "0", color: `${PROFIT_COLORS[0]}` }}>
              {v.value}
            </p>
          ) : (
            <p style={{ margin: "0", color: `${PROFIT_COLORS[1]}` }}>
              {v.value}
            </p>
          )
      },
      {
        Header: "Profit",
        accessor: "profit",
        Cell: v =>
          v.value > 500000 ? (
            <p style={{ margin: "0", color: `${PROFIT_COLORS[0]}` }}>
              {v.value}
            </p>
          ) : (
            <p style={{ margin: "0", color: `${PROFIT_COLORS[1]}` }}>
              {v.value}
            </p>
          )
      }
    ],
    []
  );

  const data = React.useMemo(() => makeSalesData(100), []);

  return (
    <SalesTableWrapper>
      <Card title="Sales Table">
        <ReactTableStyles>
          <ReactTable
            data={data}
            columns={columns}
            className="-striped -highlight"
            getTdProps={() => ({
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }
            })}
          />
        </ReactTableStyles>
      </Card>
    </SalesTableWrapper>
  );
};

export default SalesTable;
