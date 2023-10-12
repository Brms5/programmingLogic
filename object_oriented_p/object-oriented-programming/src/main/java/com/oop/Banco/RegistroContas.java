package com.oop.Banco;

import java.util.ArrayList;
import java.util.List;

public class RegistroContas {

    public static void main(String[] args) {
        Data d1 = new Data(1, 1, 2020);
        Data d2 = new Data(2, 3, 2021);

        Correntista c1 = new Correntista("123456789", "João");
        Correntista c2 = new Correntista("987654321", "Maria");

        List<Correntista> listaCorrentistas1 = new ArrayList<Correntista>();
        listaCorrentistas1.add(c1);

        List<Correntista> listaCorrentistas2 = new ArrayList<Correntista>();
        listaCorrentistas2.add(c2);

        Conta conta1 = new ContaCorrente(12345, listaCorrentistas1, d1, 1000, 0.15);
        Conta conta2 = new ContaPoupanca(54321, listaCorrentistas2, d2, 2000);
        conta1.fazerDeposito(500);

        System.out.println(conta1.consultarSaldo());
        System.out.println(conta2.consultarSaldo());
    }
    
}
