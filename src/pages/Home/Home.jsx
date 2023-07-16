import { AllCategories } from 'components/HomePage/AllCategories/AllCategories';
import { BooksList } from 'components/HomePage/BookList/BookList';
import { Section } from './Home.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { topBooks } from 'redux/books/operations';
import { selectBooks } from 'redux/books/selectors';
const Home = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(topBooks());
  }, [dispatch]);

  return (
    <Section>
      <AllCategories books={books} />
      <BooksList books={books} />
    </Section>
  );
};
export default Home;

// import { AllCategories } from 'components/HomePage/AllCategories/AllCategories';
// import { BooksList } from 'components/HomePage/BookList/BookList';
// import { Section } from './Home.styled';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { categoriesBooks, topBooks } from 'redux/books/operations';
// import { selectBooks } from 'redux/books/selectors';
// import { CategoriesBook } from 'components/HomePage/CategoriesBook/CategoriesBook';
// const Home = () => {
//   const [currentCategories, setCurrentCategories] = useState('All categories');
//   const setCategories = categories => {
//     setCurrentCategories(categories);
//   };
//   const books = useSelector(selectBooks);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     currentCategories === 'All categories'
//       ? dispatch(topBooks())
//       : dispatch(categoriesBooks(currentCategories));
//   }, [currentCategories, dispatch]);

//   return (
//     <Section>
//       {currentCategories === 'All categories' ? (
//         <>
//           <AllCategories books={books} setCategories={setCategories} />
//           <BooksList books={books} setCategories={setCategories} />
//         </>
//       ) : (
//         <>
//           <AllCategories books={books} setCategories={setCategories} />
//           <CategoriesBook books={books} currentCategories={currentCategories} />
//         </>
//       )}
//     </Section>
//   );
// };
// export default Home;
