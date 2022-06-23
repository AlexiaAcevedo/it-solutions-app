import React, { useEffect, useState } from 'react';
import { CareersContainer, SearchInput, SearchWrapper } from './CareersElements';
import axios from 'axios';
import Table from './Table';


const Careers = () => {
    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchOpenings = async () => {
            const res = await axios.get("http://localhost:5000/openings")
            setData(res.data)
        };
        fetchOpenings()
    },[])

    useEffect(() => {
        if (!filter) {
            setFilteredData(data);
        } else {
            const filtered = data.filter(e => e.poc.toLowerCase().match(filter.toLowerCase()) !== null);
            setFilteredData(filtered);
        }
    }, [filter, data]);

    return (
        <>
            <CareersContainer id='careers'>
                <SearchWrapper>
                    <SearchInput type='text'
                    placeholder='Search by POC'
                    onChange={(e) => setFilter(e.target.value)}
                    />
                </SearchWrapper>
                <Table data={filteredData} />
            </CareersContainer> 
        </>
    )
}

export default Careers