package com.generics;

import java.util.Arrays;

public class MinhaListaGenerica<T> {
    
    private Object[] elementos = new Object[0];

    public T get(int i) {
        return (T) elementos[i];
    }

    public void set(T elemento) {
        int posicao = elementos.length + 1;
        elementos = Arrays.copyOf(elementos, posicao);
        elementos[posicao] = elemento;
    }
}
