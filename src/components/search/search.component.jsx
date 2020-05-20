import React from 'react';
import styles from './search.module.css';
import { connect } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { setFilterSearch } from '../../redux/filter/filter.actions';
import { createStructuredSelector } from 'reselect';
import { selectFilterSearch } from '../../redux/filter/filter.selectors';

const Search = (props) => {
  const { search, setFilterSearch } = props;

  return (
    <div className={styles.Search}>
      <SearchIcon className={styles.SearchIcon} />
      <label className={styles.SearchLabel}>
        <input
          value={search}
          placeholder="Search product..."
          className={styles.SearchInput}
          onChange={(e) => setFilterSearch(e.currentTarget.value)}
        />
      </label>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  search: selectFilterSearch,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterSearch: (search) => dispatch(setFilterSearch(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
