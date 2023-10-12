package com.oop;

import java.util.Date;

public class Main {
    public static void main(String[] args) {

        // Pessoa pessoa = new Pessoa("João", "123.456.789-00", new Date());

        Funcionario funcionario = new Funcionario("Maria", "987.654.321-00", new Date());

        System.out.println(funcionario.nome);
    }
}