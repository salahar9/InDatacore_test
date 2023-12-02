package com.DataIncore.DataIncore.Model;

public class Employee {
    int id;
    String first_name;
    String last_name;
    String Role;

    public Employee(int id, String first_name, String last_name, String role) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        Role = role;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getRole() {
        return Role;
    }

    public void setRole(String role) {
        Role = role;
    }


}
