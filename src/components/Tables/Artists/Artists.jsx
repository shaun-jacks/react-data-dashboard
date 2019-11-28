import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import makeArtistsData from "../../../mocks/Artists/makeArtistsData";
import styled from "styled-components";
import Card from "../../Card";
import { ReactTableStyles } from "../styles";
import { ButtonWrapper } from "../../Forms/styles";

const ArtistsWrapper = styled.div`
  margin: 1em;
  max-width: 100vw;
`;

const ArtistsTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id"
      },
      {
        Header: "Artist",
        accessor: "artist"
      },
      {
        Header: "Genre",
        accessor: "genre"
      },
      {
        Header: "Members",
        accessor: "members"
      },
      {
        Header: "Origin",
        accessor: "origin"
      }
    ],
    []
  );

  const data = React.useMemo(() => makeArtistsData(100), []);

  return (
    <ArtistsWrapper>
      <Card title="Artists Table">
        <ReactTableStyles>
          <ReactTable
            data={data}
            columns={columns}
            className="-striped -highlight"
          />
        </ReactTableStyles>
      </Card>
    </ArtistsWrapper>
  );
};

export default ArtistsTable;
