package com.generics;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Object> list = new ArrayList<>();
        list.add(1);
        list.add("2");
        list.add("3");

        String result = (String) list.get(0);
        System.out.println(result);

        MinhaListaGenerica<String> minhaLista = new MinhaListaGenerica<>();
        minhaLista.set("1");
        minhaLista.set("2");

        String resultado = minhaLista.get(0);
        System.out.println(resultado);

        // GenericsInterface<Integer, String> p1 = new GenericsInterface<>(1, "1");


    }

}
