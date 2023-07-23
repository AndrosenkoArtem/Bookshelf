import { useEffect } from 'react';
import {
  Back,
  Container,
  DownDownIcon,
  DownIcon,
  Forward,
  Page,
  UpDownIcon,
  UpIcon,
  UpUpIcon,
} from './Pagination.styled';
import { scrollDown } from 'customFunction';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/selectors';

export const Pagination = ({ page, setPage, totalPages, books }) => {
  const theme = useSelector(selectTheme);
  const maxVisiblePages = 3;
  useEffect(() => {
    scrollDown();
  }, [page]);
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
  const normalizedPage = Math.min(
    Math.max(page, halfMaxVisiblePages + 1),
    totalPages - halfMaxVisiblePages
  );
  const nextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages));
  };
  const prevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };
  const go3Back = () => {
    setPage(prevPage => prevPage - 3);
  };
  const go3Forward = () => {
    setPage(prevPage => prevPage + 3);
  };
  const goToPage = pageNumber => {
    setPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };
  const goToLastPage = () => setPage(totalPages);
  const goToFirstPage = () => setPage(1);
  return (
    books.length !== 0 && (
      <Container>
        <Back onClick={() => page !== 1 && goToFirstPage()}>
          <DownDownIcon color={!theme ? '' : '#fff'} />
        </Back>
        <Back onClick={prevPage} disabled={page === 1}>
          <DownIcon color={!theme ? '' : '#fff'} />
        </Back>
        {page > 3 && (
          <Back onClick={go3Back}>
            <UpDownIcon
              style={{ marginLeft: '24px', marginRight: '10px' }}
              color={!theme ? '' : '#fff'}
            />
          </Back>
        )}
        {Array.from({ length: maxVisiblePages }, (_, index) => {
          const pageNumber = normalizedPage + index - halfMaxVisiblePages;
          if (pageNumber < 1 || pageNumber > totalPages) return null;
          return (
            <Page
              className={pageNumber === page ? 'active' : ''}
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </Page>
          );
        })}
        {totalPages - 3 >= page && (
          <Forward>
            <UpDownIcon
              style={{ marginLeft: '10px', marginRight: '24px' }}
              onClick={go3Forward}
              color={!theme ? '' : '#fff'}
            />
          </Forward>
        )}
        <Forward onClick={nextPage} disabled={page === totalPages}>
          <UpIcon color={!theme ? '' : '#fff'} />
        </Forward>
        <Forward onClick={() => page !== totalPages && goToLastPage()}>
          <UpUpIcon color={!theme ? '' : '#fff'} />
        </Forward>
      </Container>
    )
  );
};
