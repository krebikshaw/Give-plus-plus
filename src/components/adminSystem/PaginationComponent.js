import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { NormalButton } from '../../components/Button';

const PaginationContainer = styled.div`
  margin: 30px 0;
  max-width: 100%
  min-width: max-content;
  display: flex;
  justify-content: center;
`;

export default function PaginationComponent({ propsFunction, propsParams }) {
  const { count } = useAdmin();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageList, setPageList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    setTotalPages(Math.ceil(count / limit));
  }, [count]);

  useEffect(() => {
    const params = {
      keyword: propsParams.keyword,
      limit: limit,
      page: currentPage,
      sort: propsParams.sort,
      order: propsParams.order,
      status: propsParams.status,
    };
    propsFunction(params);
  }, [currentPage]);

  useEffect(() => {
    setPageList(Array.from({ length: totalPages }, (_, i) => i + 1));
  }, [totalPages]);

  return (
    <PaginationContainer>
      {pageList.map((page, index) => {
        return page === currentPage ? (
          <NormalButton
            style={{ background: '#75e2d38c' }}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </NormalButton>
        ) : (
          <NormalButton onClick={() => setCurrentPage(page)} key={index}>
            {page}
          </NormalButton>
        );
      })}
    </PaginationContainer>
  );
}
