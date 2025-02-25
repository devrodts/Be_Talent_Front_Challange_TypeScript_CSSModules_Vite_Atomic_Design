import { EmployeeInterface } from "../../interfaces/employee.interface";

export const api = {

    getEmployees: async (): Promise<EmployeeInterface[]> => {
        try {
            const response = await fetch('http://localhost:3030/employees');
            if (!response.ok) {
                console.error('Erro ao buscar funcionários:', response.statusText);
                throw new Error('Erro ao buscar funcionários');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
            throw error;
        }
    }

}