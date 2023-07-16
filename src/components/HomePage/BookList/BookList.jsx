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
} from './BookList.styled';
export const BooksList = ({ books }) => {
  return (
    <Container>
      <H1>
        Best Sellers <PurpleParticle>Books</PurpleParticle>
      </H1>
      <ul>
        {books.map(bookList => (
          <BooksColections key={bookList.list_name}>
            <ColectionsTitle>{bookList.list_name}</ColectionsTitle>
            <BooksContainer>
              {bookList.books.map(book => (
                <Book key={book._id}>
                  <ImagesContainer>
                    <Img src={book.book_image} alt={book.title} />
                  </ImagesContainer>
                  <TitleBook>{book.title}</TitleBook>
                  <AuthorBook>{book.author}</AuthorBook>
                </Book>
              ))}
            </BooksContainer>
            <Button>see more</Button>
          </BooksColections>
        ))}
      </ul>
    </Container>
  );
};
