package com.oop.Carro;

public class CarroDeCorrida extends Carro {

    public CarroDeCorrida(int velocidadeInicial) {
        // O super é usado para chamar o construtor da classe pai (Carro) 
        super(velocidadeInicial);
    }

    public void acelera() {
        setVelocidade(getVelocidade() + 5);
    }
    
}
