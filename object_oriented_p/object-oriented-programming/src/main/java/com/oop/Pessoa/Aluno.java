package com.oop.Pessoa;

import java.util.Date;

public class Aluno extends Pessoa {

    public Aluno(String nome, String cpf, Date dataNascimento) {
        super(nome, cpf, dataNascimento);
    }

    public String matricula;

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

}
