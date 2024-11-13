import axios from 'axios';

const REST_API_BASE_URL= 'http://localhost:8080/api/employees';

export const ListEmployees = () => axios.get('http://localhost:8080/api/employees');
export const createEmployee = (employee) => axios.post('http://localhost:8080/api/employees/add',employee);
export const getEmployee = (employeeId) => axios.get('http://localhost:8080/api/employees/'+employeeId);
export const updateEmployee = (employeeId ,employee) => axios.put(REST_API_BASE_URL+'/update/'+employeeId, employee); 
export const deleteEmployee = (employeeId) => axios.delete('http://localhost:8080/api/employees/del/'+employeeId);