package com.oop;

import java.util.Date;

public class Aluno extends Pessoa {

    public Aluno(String nome, String cpf, Date dataNascimento) {
        super(nome, cpf, dataNascimento);
    }
    
    public String matricula;

}
