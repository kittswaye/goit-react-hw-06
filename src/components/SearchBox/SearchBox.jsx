import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onFilter = (filter) => dispatch(changeFilter(filter));

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input className={css.input}
        type="text"
        value={filter}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
