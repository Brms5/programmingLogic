package com.oop.Banco;

public class Data {
    
    int dia;
    int mes;
    int ano;

    Data(int dia, int mes, int ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;        
    }

    void setData(int dia, int mes, int ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;        
    }

    int getDia() {
        return this.dia;
    }

    int getMes() {
        return this.mes;
    }

    int getAno() {
        return this.ano;
    }
        
}
