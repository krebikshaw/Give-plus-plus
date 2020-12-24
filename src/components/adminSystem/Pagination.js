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

export default function Pagination({ propsFunction, propsParams }) {
  const { count } = useAdmin();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageList, setPageList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);

  const handleChangeCurrentPage = (page) => {
    if (page === '<') return setCurrentPage((currentPage) => currentPage - 3);
    if (page === '>') return setCurrentPage((currentPage) => currentPage + 3);
    setCurrentPage(page);
  };

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
    setPageList(() => {
      if (totalPages <= 5)
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      if (currentPage <= 3) return [1, 2, 3, 4, 5, '>', totalPages];
      if (currentPage >= totalPages - 3)
        return [
          1,
          '<',
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      return [
        1,
        '<',
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        '>',
        totalPages,
      ];
    });
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
