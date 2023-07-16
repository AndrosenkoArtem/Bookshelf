import { Ul, P } from './AllCategories.styled';

export const AllCategories = ({ books, setCategories }) => {
  return (
    <Ul>
      <P>All categories</P>
      {books.map(category => (
        <P key={category.list_name}>{category.list_name}</P>
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
