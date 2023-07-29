import { useSelector } from 'react-redux';
import { Ul, Li } from './AllCategories.styled';
import { selectCategories, selectIsLoading } from 'redux/books/selectors';
import { SpinnerCategories } from 'components/Spinner/Spinner';

export const AllCategories = ({ setCurrentCategories, currentCategories }) => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);
  return !isLoading ? (
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
  ) : (
    <SpinnerCategories color="#4F2EE8" />
  );
};
