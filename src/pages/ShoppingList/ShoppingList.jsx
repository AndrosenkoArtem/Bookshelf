import { SupportUkraine } from 'components/SupportUkraine/SupportUkraine';
import { Container, Flex } from './ShoppingList.styled';
import { Catalog } from 'components/ShoppingListPage/Catalog/Catalog';
import { useEffect, useState } from 'react';
import { Pagination } from 'components/ShoppingListPage/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectCatalogBooks } from 'redux/books/selectors';
const ShoppingList = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const isLoggedNn = useSelector(selectIsLoggedIn);
  const books = useSelector(selectCatalogBooks);
  const redirect = useNavigate();
  const booksPerPage = 3;
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  useEffect(() => {
    !isLoggedNn && redirect('/');
  }, [isLoggedNn, redirect]);

  return (
    <Container>
      <SupportUkraine />
      <Flex>
        <Catalog
          booksPerPage={booksPerPage}
          startIndex={startIndex}
          endIndex={endIndex}
          setTotalPages={setTotalPages}
          books={books}
        />
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          books={books}
        />
      </Flex>
    </Container>
  );
};
export default ShoppingList;
