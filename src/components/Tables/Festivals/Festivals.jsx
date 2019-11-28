import React from "react";
import ReactTable from "react-table";
// import "react-table/react-table.css";
import makeFestivalsData from "../../../mocks/Festivals/makeFestivalsData";
import styled from "styled-components";
import Card from "../../Card";
import { ReactTableStyles } from "../styles";

const FestivalsWrapper = styled.div`
  margin: 1em;
  max-width: 100vw;
`;

const FestivalsTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id"
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Location",
        accessor: "location"
      },
      {
        Header: "Type",
        accessor: "type"
      },
      {
        Header: "Start Date",
        accessor: "date_start"
      },
      {
        Header: "End Date",
        accessor: "date_end"
      },
      {
        Header: "Max Occupants",
        accessor: "max_occupants"
      },
      {
        Header: "Max Artists",
        accessor: "max_artists"
      },
      {
        Header: "Employees",
        accessor: "employees"
      }
    ],
    []
  );

  const data = React.useMemo(() => makeFestivalsData(100), []);

  return (
    <FestivalsWrapper>
      <Card title="Festivals Table">
        <ReactTableStyles>
          <ReactTable
            data={data}
            columns={columns}
            className="-striped -highlight"
          />
        </ReactTableStyles>
      </Card>
    </FestivalsWrapper>
  );
};

export default FestivalsTable;
