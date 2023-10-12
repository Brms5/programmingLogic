package com.oop.Banco;

import java.util.List;

public class ContaPoupanca extends Conta {
    
    public ContaPoupanca(int nroConta, List<Correntista> correntistas, Data dataAbertura, double monto) {
        super(nroConta, correntistas, dataAbertura, monto);
    }

}
