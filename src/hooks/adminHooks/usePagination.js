import { useState } from 'react';

export default function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageList, setPageList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10);

  const handleChangeCurrentPage = (page) => {
    if (page === '<') return setCurrentPage((currentPage) => currentPage - 3);
    if (page === '>') return setCurrentPage((currentPage) => currentPage + 3);
    setCurrentPage(page);
  };

  const handleSetPageList = () => {
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
  };

  return {
    currentPage,
    totalPages,
    pageList,
    limit,
    setTotalPages,
    handleChangeCurrentPage,
    handleSetPageList,
  };
}
