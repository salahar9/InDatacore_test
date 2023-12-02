package com.DataIncore.DataIncore.Repository;

import com.DataIncore.DataIncore.Model.Employee;
import com.DataIncore.DataIncore.Service.EmployeeService;
import com.opencsv.CSVWriter;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import org.springframework.core.io.ClassPathResource;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;


@Repository
public class EmployeesRepository {

    private final String csvFile = "emp.csv";



    public void save(Employee emp) {
        try {
            File res = new ClassPathResource(csvFile).getFile();
            CSVWriter csvWriter = new CSVWriter(new FileWriter(res,true));
            String[] donnees1 = {String.valueOf(emp.getId()), emp.getFirst_name(), emp.getLast_name(), emp.getRole()};
            csvWriter.writeNext(donnees1);
            csvWriter.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    public List<Employee> init() {
        List<Employee> employees=new ArrayList<>();

        try (
                InputStream res = new ClassPathResource(csvFile).getInputStream();
                CSVReader csvReader = new CSVReader(new InputStreamReader(res))) {

            List<String[]> lignes = csvReader.readAll();

            for (String[] ligne : lignes) {
                int id = Integer.parseInt(ligne[0]);
                Employee emp = new Employee(id, ligne[1], ligne[2], ligne[3]);
                employees.add(emp);
            }
        } catch (IOException | CsvException e) {
            e.printStackTrace();
        }
        return  employees;


    }


}
