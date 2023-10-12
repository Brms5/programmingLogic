package com.oop.Banco;

public class Correntista {
    
    String cpf;
    String nome;

    Correntista(String cpf, String nome) {
        this.cpf = cpf;
        this.nome = nome;
    }

    void setCpf(String cpf) {
        this.cpf = cpf;
    }

    String getCpf() {
        return this.cpf;
    }

    void setNome(String nome) {
        this.nome = nome;
    }

    String getNome() {
        return this.nome;
    }

}
