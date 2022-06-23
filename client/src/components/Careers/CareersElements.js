import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const CareersContainer = styled.div`
    height: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: linear-gradient(white, gray);
    padding: 0 60px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const SearchWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  padding: 1.5rem 1.75rem;
`

export const SearchInput = styled.input`
  flex: 1;
  text-align: center;
  border: none;
  width: 300px;
  font-size: 1rem;
  padding-right: 1rem;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 3rem;
  box-shadow: 5px 5px 7px rgb(96, 187, 234);
`

export const BtnLink = styled(LinkR)`
  border-radius: 50px;
  background: rgb(96, 187, 234);
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`
