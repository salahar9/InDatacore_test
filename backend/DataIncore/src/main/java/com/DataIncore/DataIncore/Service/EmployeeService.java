package com.DataIncore.DataIncore.Service;

import com.DataIncore.DataIncore.Model.Employee;
import com.DataIncore.DataIncore.Repository.EmployeesRepository;
import com.DataIncore.DataIncore.Utils.randomUtil;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;


@Service
public class EmployeeService {
    private List<Employee> Employees = new ArrayList<>();
    EmployeesRepository repository;

    public EmployeeService(EmployeesRepository rep) {
         repository = rep;
    }

    public List<Employee> findAll() {
        return Employees;
    }
    public void save(Employee emp) {
        repository.save(emp);
        Employees.add(emp);

    }
    public void saveRandom() {
        String[] firstNames = {"Yasmine", "Omar", "Fatima", "Mohammed", "Amina"};
        String[] lastNames = {"Benali", "El Amrani", "Chakir", "Bouhaddou", "El Khoury"};
        String[] roles = {"Manager", "Developer", "Designer", "Analyst", "Tester"};

        int id = randomUtil.generateRandomId();
        String first_name = randomUtil.getRandomElement(firstNames);
        String last_name = randomUtil.getRandomElement(lastNames);
        String role = randomUtil.getRandomElement(roles);


        Employee emp = new Employee(id,first_name,last_name,role);
        save(emp);

    }
    @PostConstruct
    void init(){
        Employees=repository.init();
    }

}
