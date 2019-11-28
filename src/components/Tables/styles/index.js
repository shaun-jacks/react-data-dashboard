import styled from "styled-components";

export const ReactTableStyles = styled.div`
  color: rgba(255, 255, 255, 0.9);
  border-color: grey;
  background: var(--bgLess);
  .ReactTable {
    border: 1px solid grey;
  }
  // Header
  // .ReactTable .rt-thead .rt-th,
  // .ReactTable .rt-thead .rt-td {
  //   border-right: black;
  // }
  // Line breaks
  .ReactTable .rt-tbody .rt-tr-group {
    border-bottom: solid 1px var(--bgLess);
  }
  // Odd rows
  .ReactTable.-striped .rt-tr.-odd {
    background: var(--bgMore);
  }
  // Even rows
  .ReactTable.-striped .rt-tr.-even {
    background: var(--bgLess);
  }
  // Sort shadows ASC
  .ReactTable .rt-thead .rt-th.-sort-asc,
  .ReactTable .rt-thead .rt-td.-sort-asc {
    box-shadow: inset 0 3px 0 0 var(--accentColor);
  }
  // Sort shadows DESC
  .ReactTable .rt-thead .rt-th.-sort-desc,
  .ReactTable .rt-thead .rt-td.-sort-desc {
    box-shadow: inset 0 -3px 0 0 var(--accentColor);
  }
  // Pagination button
  .ReactTable .-pagination .-btn {
    color: var(--textColor);
    background: var(--bgMore);
  }
  // Pagination input
  .ReactTable .-pagination input,
  .ReactTable .-pagination select {
    background: var(--bgMore);
    color: var(--textColor);
  }
  // On hover
  .ReactTable .rt-tr:hover .rt-td {
    background: var(--accentGradientEnd);
    color: var(--textColor);
  }
`;
