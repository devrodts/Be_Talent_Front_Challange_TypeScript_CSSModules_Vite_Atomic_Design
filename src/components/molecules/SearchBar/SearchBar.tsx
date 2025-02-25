import {useState} from 'react';
import styles from './SearchBar.module.css';

import SearchIcon from '@mui/icons-material/Search';
import { SearchBarInterface } from '../interfaces/searchbar.interface';


const SearchBar = ({ onSearch }: SearchBarInterface) => {

    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearch(value.toLowerCase());
    };
  
    return (
      <div className={styles.searchBar}>
        <div>
            <h4 className={styles.searchBarTitle}>Funcionários</h4>
        </div>
        <div className={styles.searchInputContainer}>
          <input
            type="text"
            placeholder="Pesquiar"
            value={searchTerm}
            onChange={handleSearch}
            className={styles.searchInput}>
            </input>
            <SearchIcon className={styles.searchIcon} />
        </div>
      </div>
    );
  };

export default SearchBar;