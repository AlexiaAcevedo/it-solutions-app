import React from 'react';
import {  
    TableContainer,
    TableHead,
    TableHeadRow,
    TableHeadTH,
    TableBody,
    TableBodyTR,
    TableData,
    TableDataBtn
} from './TableElements';
import { BtnLink } from './CareersElements';


const Table = ( {data} ) => {

    return (
        <TableContainer>
            <TableHead>
                <TableHeadRow>
                    <TableHeadTH>Client</TableHeadTH>
                    <TableHeadTH>POC</TableHeadTH>
                    <TableHeadTH>Email</TableHeadTH>
                    <TableHeadTH>Role</TableHeadTH>
                    <TableHeadTH>Urgency</TableHeadTH>
                    <TableHeadTH>Quantity</TableHeadTH>
                    <TableHeadTH>Skills Needed</TableHeadTH>
                    <TableHeadTH>Actions</TableHeadTH>
                </TableHeadRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableBodyTR key={item.id}>
                        <TableData>{item.client}</TableData>
                        <TableData>{item.poc}</TableData>
                        <TableData>{item.email}</TableData>
                        <TableData>{item.role}</TableData>
                        <TableData>{item.urgency}</TableData>
                        <TableData>{item.quantity}</TableData>
                        <TableData>{item.skills_needed}</TableData>
                        <TableDataBtn><BtnLink to={`/apply/${item.id}`}>Apply</BtnLink></TableDataBtn>
                    </TableBodyTR>
                ))}
            </TableBody>
        </TableContainer>
    )
}

export default Table