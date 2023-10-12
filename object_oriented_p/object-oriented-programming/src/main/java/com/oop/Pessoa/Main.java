package com.oop.Pessoa;

import java.util.Date;

public class Main {
    public static void main(String[] args) {

        // Herança
        Funcionario funcionario = new Funcionario("Maria", "987.654.321-00", new Date());
        
        // Polimorfismo
        Pessoa pessoa = funcionario;

        System.out.println(pessoa.nome);
    }
}