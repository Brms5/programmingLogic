package com.oop.Pessoa;

import java.util.Date;

public class Professor extends Pessoa {

    public Professor(String nome, String cpf, Date dataNascimento) {
        super(nome, cpf, dataNascimento);
    }
    
    public double salario;
    public String disciplina;

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public String getDisciplina() {
        return this.disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

}
