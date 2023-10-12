package com.oop.Banco;

import java.util.List;

public class ContaCorrente extends Conta {
    
    double taxaMovimentacao;

    public ContaCorrente(int nroConta, List<Correntista> correntistas, Data dataAbertura, double monto, double taxaMovimentacao) {
        super(nroConta, correntistas, dataAbertura, monto);
        this.taxaMovimentacao = taxaMovimentacao;
    }

    public void fazerDeposito(double monto) {
        System.out.println("Será cobrada uma taxa de " + this.taxaMovimentacao + " reais por movimentação.");
        super.fazerDeposito(monto - this.taxaMovimentacao);
    }

    boolean fazerSaque(double monto) {
        System.out.println("Será cobrada uma taxa de " + this.taxaMovimentacao + " reais por movimentação caso exista saldo suficiente.");
        return super.fazerSaque(monto + this.taxaMovimentacao);
    }
    
}
