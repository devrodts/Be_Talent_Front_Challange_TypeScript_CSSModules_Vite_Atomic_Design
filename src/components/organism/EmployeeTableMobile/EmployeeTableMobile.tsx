import { dateFormatter, phoneFormatter } from "../../../utils";
import { useState } from "react";
import styles from "./EmployeeTableMobile.module.css";
import { EmployeeInterface } from "@/interfaces/employee.interface";
import ToggleArrowIcon from "../../../components/atoms/ToggleArrowIcon/ToggleArrowIcon";

const EmployeeTableMobile = ({
  filteredEmployees,
}: {
  filteredEmployees: EmployeeInterface[];
}) => {
  const [openEmployeeIds, setOpenEmployeeIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    if (openEmployeeIds.includes(id)) {
      setOpenEmployeeIds(openEmployeeIds.filter((openId) => openId !== id));
    } else {
      setOpenEmployeeIds([...openEmployeeIds, id]);
    }
  };

  return (
    <div>
      <div>
        {filteredEmployees.map((employee) => {
          const isOpen = openEmployeeIds.includes(employee.id);

          return (
            <div key={employee.id} className={styles.employeeRowContainer}>
              <section className={styles.employeeRow}>
                <div className={styles.firstColumn}>
                  <div className={styles.firstColumnContent}>
                    <img src={employee.image} alt={employee.name} />
                  </div>
                  <div className={styles.nameContainer}>
                    <h3 className={styles.name}>{employee.name}</h3>
                  </div>
                  <div className={styles.toggleContainer} onClick={() => handleToggle(employee.id)}>
                    <button>
                      <ToggleArrowIcon isOpen={isOpen} />
                    </button>
                  </div>
                </div>
              </section>
              
              <div className={styles.detailsContainer}>
                {isOpen && (
                  <div className={styles.detailsContainer}>
                    <div className={styles.infoRow}>
                      <span className={styles.infoRowTitle}>Cargo</span>
                      <span>{employee.job}</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoRowTitle}>Data de admissão</span>
                      <span>{dateFormatter(employee.admission_date)}</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoRowTitle}>Telefone</span>
                      <span>{phoneFormatter(employee.phone)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeTableMobile;
