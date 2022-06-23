import styled from 'styled-components';

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        display: block;
        max-width: -moz-fit-content;
        max-width: fit-content;
        margin: 0 auto;
        overflow-x: auto;
        word-wrap: break-word;
    }
`

export const TableHead = styled.thead`
    z-index: 100;
`

export const TableHeadRow = styled.tr`
    background: gray;
`

export const TableHeadTH = styled.th`
    font-weight: normal;
    padding: 10px;
    color: #fff;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 20px;
`

export const TableBody = styled.tbody`
    
`

export const TableBodyTR = styled.tr`
    background: lightgray;
`

export const TableData = styled.td`
    padding: 5px;
    border: 1px solid black;
    font-size: 14px;
`

export const TableDataBtn = styled.td`
    padding: 20px;
`