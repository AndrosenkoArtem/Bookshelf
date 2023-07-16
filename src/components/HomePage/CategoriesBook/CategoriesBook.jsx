import {
  //   BooksColections,
  //   ColectionsTitle,
  //   PurpleParticle,
  //   Button,
  BooksContainer,
  Book,
  Container,
  H1,
  ImagesContainer,
  Img,
  TitleBook,
  AuthorBook,
} from './CategoriesBook.styled';
export const CategoriesBook = ({ books, currentCategories }) => {
  return (
    <Container>
      <H1>{currentCategories}</H1>
      <BooksContainer>
        {books.map(book => (
          <Book key={book._id}>
            <ImagesContainer>
              <Img src={book.book_image} alt={book.title} />
            </ImagesContainer>
            <TitleBook>{book.title}</TitleBook>
            <AuthorBook>{book.author}</AuthorBook>
          </Book>
        ))}
      </BooksContainer>
    </Container>
  );
};
