import EmployeeTable from '../components/organism/EmployeeTable/EmplooyeTable';
import Header from '../components/organism/Header/Header';
import SearchBar from '../components/molecules/SearchBar/SearchBar';
import { useState } from 'react';


export default function Employees() {

    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (term: string) => {
      setSearchTerm(term);
    };
    
    return (
        <div>
            <Header/>
            <SearchBar onSearch={handleSearch} />
            <EmployeeTable searchTerm={searchTerm} />
        </div>
    );
}   
