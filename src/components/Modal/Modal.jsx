import { useDispatch, useSelector } from 'react-redux';
import {
  Background,
  Button,
  BuyLink,
  ByImg,
  ByItem,
  ByList,
  CloseIcon,
  CloseIconCase,
  Container,
  Description,
  DescriptionContainer,
  ImagesTitle,
  Img,
  Subtitle,
  Title,
  Сongratulations,
} from './Modal.styled';
import { selectBookById, selectCatalogBooks } from 'redux/books/selectors';
import amazon from 'images/amazon.png';
import amazonWhite from 'images/amazonWhite.png';
import openBook from 'images/openBook.png';
import closeBook from 'images/closeBook.png';
import { addBooksInCatalog, deleteBookInCatalog } from 'redux/books/slice';
import { selectTheme } from 'redux/theme/selectors';
export const Modal = ({ setModalIsOpen }) => {
  const dispatch = useDispatch();
  const book = useSelector(selectBookById);
  const catalogBook = useSelector(selectCatalogBooks);
  const { book_image, title, author, description, buy_links, _id } = book;
  const shoppingList = catalogBook.filter(book => book._id === _id);
  const theme = useSelector(selectTheme);
  const handleClose = e => {
    e.target.nodeName === 'DIV' &&
      e.target.className.includes('background') &&
      setModalIsOpen(false);
  };
  return (
    <Background className="background" onClick={handleClose}>
      <Container>
        <ImagesTitle>
          <BuyLink href={buy_links[1].url}>
            <Img src={book_image} alt="apple books" />
          </BuyLink>
          <DescriptionContainer>
            <Title>{title}</Title>
            <Subtitle>{author}</Subtitle>
            <Description>
              {description.length ? description : 'description not found'}
            </Description>
            <ByList>
              <ByItem>
                <BuyLink href={buy_links[0].url}>
                  <ByImg src={!theme ? amazon : amazonWhite} alt="amazon" />
                </BuyLink>
              </ByItem>
              <ByItem>
                <BuyLink href={buy_links[1].url}>
                  <ByImg src={openBook} alt="apple books" />
                </BuyLink>
              </ByItem>
              <ByItem>
                <BuyLink href={buy_links[2].url}>
                  <ByImg src={closeBook} alt="barnesandnoble" />
                </BuyLink>
              </ByItem>
            </ByList>
          </DescriptionContainer>
        </ImagesTitle>
        {!shoppingList.length ? (
          <Button onClick={() => dispatch(addBooksInCatalog(book))}>
            Add to shopping list
          </Button>
        ) : (
          <>
            <Button onClick={() => dispatch(deleteBookInCatalog(book._id))}>
              remove from the shopping list
            </Button>
            <Сongratulations>
              Сongratulations! You have added the book to the shopping list. To
              delete, press the button “Remove from the shopping list”.
            </Сongratulations>
          </>
        )}

        <CloseIconCase type="button" onClick={() => setModalIsOpen(false)}>
          <CloseIcon width="14px" height="14px" />
        </CloseIconCase>
      </Container>
    </Background>
  );
};
