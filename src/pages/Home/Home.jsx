import { AllCategories } from 'components/HomePage/AllCategories/AllCategories';
import { BooksList } from 'components/HomePage/BookList/BookList';
import { CategoriesSupport, Container } from './Home.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesBooks, topBooks } from 'redux/books/operations';
import { BooksByCategory } from 'components/HomePage/BooksByCategory/BooksByCategory';
import { SupportUkraine } from 'components/SupportUkraine/SupportUkraine';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { Modal } from 'components/Modal/Modal';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCategories, setCurrentCategories] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    !currentCategories
      ? dispatch(topBooks())
      : dispatch(categoriesBooks(currentCategories));
    document.body.style.overflow = '';
  }, [currentCategories, dispatch]);

  return (
    <Container>
      <CategoriesSupport>
        <AllCategories
          setCurrentCategories={setCurrentCategories}
          currentCategories={currentCategories}
        />
        <SupportUkraine />
      </CategoriesSupport>
      {(!currentCategories && (
        <BooksList
          setCurrentCategories={setCurrentCategories}
          setModalIsOpen={setModalIsOpen}
        />
      )) || (
        <BooksByCategory
          currentCategories={currentCategories}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <ScrollToTop />
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
    </Container>
  );
};
export default Home;
