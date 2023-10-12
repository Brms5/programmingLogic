package com.oop.Banco;

import java.util.List;

public class Conta {

    private int nroConta;
    private double saldo;
    private List<Correntista> correntistas;
    private Data dataAbertura;


    Conta(int nroConta, List<Correntista> correntistas, Data dataAbertura, double monto) {
        this.nroConta = nroConta;
        this.saldo = monto;
        this.correntistas = correntistas;
        this.dataAbertura = dataAbertura;
    }

    void fazerDeposito(double monto) {
        this.saldo += monto;
    }
    
    boolean fazerSaque(double monto) {
        if (monto > this.saldo) {
            return false;
        }
        this.saldo -= monto;
        return true;
    }

    double consultarSaldo() {
        return this.saldo;
    }

    boolean fazerTransferencia(Conta contaDestino, double monto) {
        if (monto > this.saldo) {
            return false;
        }
        this.saldo -= monto;
        contaDestino.saldo += monto;
        return true;
    }

    int getNroConta() {
        return this.nroConta;
    }

    void setNroConta(int nroConta) {
        this.nroConta = nroConta;
    }

    List<Correntista> getCorrentistas() {
        return this.correntistas;
    }

    void setCorrentistas(List<Correntista> correntistas) {
        this.correntistas = correntistas;
    }

    Data getDataAbertura() {
        return this.dataAbertura;
    }

    void setDataAbertura(Data dataAbertura) {
        this.dataAbertura = dataAbertura;
    }
}
