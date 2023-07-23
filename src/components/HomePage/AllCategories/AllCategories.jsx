import { useSelector } from 'react-redux';
import { Ul, Li } from './AllCategories.styled';
import { selectCategories } from 'redux/books/selectors';

export const AllCategories = ({ setCurrentCategories, currentCategories }) => {
  const categories = useSelector(selectCategories);
  return (
    <Ul>
      <Li
        key="All categories"
        className={!currentCategories && 'active'}
        onClick={() => setCurrentCategories(null)}
      >
        All categories
      </Li>
      {categories.map(category => (
        <Li
          className={category === currentCategories && 'active'}
          onClick={() => setCurrentCategories(category)}
          key={category}
        >
          {category}
        </Li>
      ))}
    </Ul>
  );
};

// import { Ul, P } from './AllCategories.styled';

// export const AllCategories = ({ books, setCategories }) => {
//   return (
//     <Ul>
//       <P onClick={() => setCategories('All categories')}>All categories</P>
//       {books.map(category => (
//         <P
//           key={category.list_name}
//           onClick={() => setCategories(category.list_name)}
//         >
//           {category.list_name}
//         </P>
//       ))}
//     </Ul>
//   );
// };
