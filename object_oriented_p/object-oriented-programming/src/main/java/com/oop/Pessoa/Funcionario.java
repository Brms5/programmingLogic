package com.oop.Pessoa;

import java.util.Date;

public class Funcionario extends Pessoa {

    public Funcionario(String nome, String cpf, Date dataNascimento) {
        super(nome, cpf, dataNascimento);
    }

    public double salario;
    public Date dataAdmissao;
    public String cargo;
    
}
