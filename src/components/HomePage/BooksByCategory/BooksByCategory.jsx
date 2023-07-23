import { addPurpleEnd } from 'customFunction';
import {
  Book,
  BooksContainer,
  Container,
  H1,
  ImagesContainer,
  Img,
  TitleBook,
  AuthorBook,
  QuickView,
  //   BooksColections,
  //   ColectionsTitle,
  //   Button,
} from './BooksByCategory.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooksByCategory, selectIsLoading } from 'redux/books/selectors';
import { bookById } from 'redux/books/operations';
import { Spinner } from 'components/Spinner/Spinner';

export const BooksByCategory = ({ currentCategories, setModalIsOpen }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const books = useSelector(selectBooksByCategory);
  return (
    (!isLoading && (
      <Container>
        <H1>{addPurpleEnd(currentCategories)}</H1>
        <BooksContainer>
          {books.map(({ book_image, title, author, _id }) => {
            return (
              <Book key={_id}>
                <ImagesContainer
                  onClick={async () => {
                    await dispatch(bookById(_id));
                    await setModalIsOpen(true);
                  }}
                >
                  <Img loading="lazy" src={book_image} alt={title} />
                  <QuickView>quick view</QuickView>
                </ImagesContainer>
                <TitleBook>{title}</TitleBook>
                <AuthorBook>{author}</AuthorBook>
              </Book>
            );
          })}
        </BooksContainer>
      </Container>
    )) || <Spinner color="#4F2EE8" />
  );
};
