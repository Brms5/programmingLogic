package com.oop.Carro;

public class Carro {
    private int velocidade;

    public Carro(int velocidadeInicial) { 
        this.velocidade = velocidadeInicial;
     }

    public int getVelocidade() {
        return this.velocidade;
    }

    public int setVelocidade(int velocidade) {
        return this.velocidade = velocidade;
    }

    public void acelera() {
        this.velocidade ++;
    }

    public void freia() {
        this.velocidade --;
    }

}
