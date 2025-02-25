import styles from './EmployeeTable.module.css';
import { api } from '../../../services/api/api';
import { useState, useEffect, useMemo } from 'react';
import { EmployeeInterface } from '../../../interfaces/employee.interface';
import { dateFormatter, phoneFormatter } from '../../../utils';
import EmployeeTableMobile from '../EmployeeTableMobile/EmployeeTableMobile';

interface EmployeeTableProps {
  searchTerm: string;
}

const EmployeeTable = ({ searchTerm }: EmployeeTableProps) => {
  const [employeesState, setEmployeesState] = useState<EmployeeInterface[]>([]);
  const [isMobile, setIsMobile] = useState(false);


  const fetchEmployees = async () => {
    try {
      const employees = await api.getEmployees();
      setEmployeesState(employees);
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
    }
  };


  useEffect(() => {
    fetchEmployees();
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);



  const filteredEmployees = employeesState.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm)
  );
  
  

  return (
    <div className={styles.tableContainer}>
      <div>

       {!isMobile && (
        <div className={styles.employeeRowContent}>
          <p className={styles.firstColumn}>FOTO</p>
          <p>NOME</p>
          <p>CARGO</p>
          <p>DATA DE ADMISSÃO</p>
          <p>TELEFONE</p>
        </div>
       )}

       {isMobile && (
        <div className={styles.employeeRowContent}>
          <div>
            <p className={styles.firstColumn}>FOTO</p>
            <p>NOME</p>
          </div>
          <div>

          </div>
          </div>
       )}
      </div>
      {!isMobile && (
        <>
        {filteredEmployees.map((employee) => (
        <section key={employee.id} className={styles.employeeRow}>
          <div className={styles.firstColumn}>
            <img src={employee.image} alt={employee.name} />
          </div>
          <div>
            <h3>{employee.name}</h3>
          </div>
          <div>
            <p>{employee.job}</p>
          </div>
          <div>
            <p>{dateFormatter(employee.admission_date)}</p>
          </div>
          <div>
            <p>{phoneFormatter(employee.phone)}</p>
          </div>
        </section>
      ))}
        </>
      )}
      {isMobile && <EmployeeTableMobile filteredEmployees={filteredEmployees} />}
    </div>
  );
};

export default EmployeeTable;