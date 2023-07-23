import { useDispatch, useSelector } from 'react-redux';
import {
  ByList,
  ByItem,
  BuyLink,
  ByImg,
  Container,
  H1,
  Img,
  Li,
  PurpleParticle,
  FlexContainer,
  Title,
  Subtitle,
  Description,
  Author,
  DescriptionContainer,
  TrashICon,
  Empty,
  EmptyImg,
  EmptyContainer,
} from './Catalog.styled';
import amazon from 'images/amazon.png';
import amazonWhite from 'images/amazonWhite.png';
import openBook from 'images/openBook.png';
import closeBook from 'images/closeBook.png';
import { deleteBookInCatalog } from 'redux/books/slice';
import { useEffect } from 'react';
import empty from 'images/empty.png';
import { selectTheme } from 'redux/theme/selectors';
export const Catalog = ({
  booksPerPage,
  startIndex,
  endIndex,
  setTotalPages,
  books,
}) => {
  const dispatch = useDispatch();

  const currentBooks = books.slice(startIndex, endIndex);
  useEffect(() => {
    setTotalPages(Math.ceil(books.length / booksPerPage));
  }, [books.length, booksPerPage, setTotalPages]);
  const theme = useSelector(selectTheme);
  return (
    (!books.length && (
      <Container>
        <H1>Shopping {<PurpleParticle>List</PurpleParticle>}</H1>
        <EmptyContainer>
          <Empty>
            This page is empty, add some books and proceed to order.
          </Empty>
          <EmptyImg src={empty} alt="empty" />
        </EmptyContainer>
      </Container>
    )) || (
      <Container>
        <H1>Shopping {<PurpleParticle>List</PurpleParticle>}</H1>
        <ul>
          {currentBooks.map(
            ({
              book_image,
              _id,
              title,
              list_name,
              description,
              author,
              buy_links,
            }) => {
              return (
                <Li key={_id}>
                  <BuyLink href={buy_links[1].url}>
                    <Img src={book_image} alt="apple books" />
                  </BuyLink>
                  <DescriptionContainer>
                    <Title>{title}</Title>
                    <Subtitle>{list_name}</Subtitle>
                    <Description>
                      {description.length
                        ? description
                        : 'description not found'}
                    </Description>
                    <FlexContainer>
                      <Author>{author}</Author>
                      <ByList>
                        <ByItem>
                          <BuyLink href={buy_links[0].url}>
                            <ByImg
                              src={!theme ? amazon : amazonWhite}
                              alt="amazon"
                            />
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
                    </FlexContainer>
                  </DescriptionContainer>
                  <TrashICon
                    onClick={() => dispatch(deleteBookInCatalog(_id))}
                  />
                </Li>
              );
            }
          )}
        </ul>
      </Container>
    )
  );
};
