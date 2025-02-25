const listEmployees = async () => {
    const response = await fetch('http://localhost:3030/employees');
    const data = await response.json();
    return data;
}

export default listEmployees;
