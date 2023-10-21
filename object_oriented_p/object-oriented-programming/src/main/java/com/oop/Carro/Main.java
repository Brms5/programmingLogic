package com.oop.Carro;

public class Main {
    public static void main(String[] args) { 
        Carro carro = new Carro(0);
        carro.setVelocidade(10);
        carro.acelera();
        carro.acelera();

        CarroDeCorrida carroDeCorrida = new CarroDeCorrida(0);
        carroDeCorrida.acelera();
        System.out.println(carroDeCorrida.getVelocidade());
     }
}
