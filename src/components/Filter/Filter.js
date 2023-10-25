import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { FilterInput, FilterTitle } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return useSelector(selectContacts).length < 1 ? (
    <FilterTitle>Add your first contact</FilterTitle>
  ) : (
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={onChange}
    />
  );
}

export default Filter;
