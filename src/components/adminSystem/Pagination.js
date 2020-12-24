import React, { useEffect } from 'react';
import styled from 'styled-components';
import useAdmin from '../../hooks/adminHooks/useAdmin';
import { NormalButton } from '../../components/Button';
import usePagination from '../../hooks/adminHooks/usePagination';

const PaginationContainer = styled.div`
  margin: 30px 0;
  max-width: 100%
  min-width: max-content;
  display: flex;
  justify-content: center;
`;

export default function Pagination({ propsFunction, propsParams }) {
  const { count } = useAdmin();
  const {
    currentPage,
    totalPages,
    pageList,
    limit,
    setTotalPages,
    handleChangeCurrentPage,
    handleSetPageList,
  } = usePagination();

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
    handleSetPageList();
  }, [currentPage, totalPages]);

  return (
    <PaginationContainer>
      {pageList.map((page, index) => {
        return page === currentPage ? (
          <NormalButton
            style={{ background: '#75e2d38c' }}
            onClick={() => handleChangeCurrentPage(page)}
            key={index}
          >
            {page}
          </NormalButton>
        ) : (
          <NormalButton
            onClick={() => handleChangeCurrentPage(page)}
            key={index}
          >
            {page}
          </NormalButton>
        );
      })}
    </PaginationContainer>
  );
}
