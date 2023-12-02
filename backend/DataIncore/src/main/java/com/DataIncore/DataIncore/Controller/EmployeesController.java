package com.DataIncore.DataIncore.Controller;

import com.DataIncore.DataIncore.Model.Employee;
import com.DataIncore.DataIncore.Repository.EmployeesRepository;
import com.DataIncore.DataIncore.Service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeesController {
    private final EmployeeService service ;

    public EmployeesController(EmployeeService serv){
         service = serv;
    }
    @GetMapping("")
    public List<Employee> findAll(){
        return service.findAll();
    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@RequestBody Employee emp){
         service.save(emp);
    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/random")
    public void createrandom(){
        service.saveRandom();
    }
}
