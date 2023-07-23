import { useDispatch, useSelector } from 'react-redux';
import {
  Book,
  BooksColections,
  BooksContainer,
  ColectionsTitle,
  Container,
  H1,
  ImagesContainer,
  Img,
  PurpleParticle,
  TitleBook,
  AuthorBook,
  Button,
  QuickView,
} from './BookList.styled';
import { bookById } from 'redux/books/operations';
import { selectIsLoading, selectTopBooks } from 'redux/books/selectors';
import { scrollUp } from 'customFunction';
import { Spinner } from 'components/Spinner/Spinner';

export const BooksList = ({ setCurrentCategories, setModalIsOpen }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const books = useSelector(selectTopBooks);
  return (
    (!isLoading && (
      <Container>
        <H1>
          Best Sellers <PurpleParticle>Books</PurpleParticle>
        </H1>
        <ul>
          {books.map(({ books, list_name }) => {
            return (
              <BooksColections key={list_name}>
                <ColectionsTitle>{list_name}</ColectionsTitle>
                <BooksContainer>
                  {books?.map(({ _id, book_image, title, author }) => (
                    <Book key={_id}>
                      <ImagesContainer
                        onClick={async () => {
                          await dispatch(bookById(_id));
                          await setModalIsOpen(true);
                        }}
                      >
                        <Img loading="lazy" src={book_image} alt={title} />
                        <QuickView type="button">quick view</QuickView>
                      </ImagesContainer>
                      <TitleBook>{title}</TitleBook>
                      <AuthorBook>{author}</AuthorBook>
                    </Book>
                  ))}
                </BooksContainer>
                <Button
                  onClick={() => {
                    setCurrentCategories(list_name);
                    scrollUp();
                  }}
                >
                  see more
                </Button>
              </BooksColections>
            );
          })}
        </ul>
      </Container>
    )) || <Spinner color="#4F2EE8" />
  );
};
