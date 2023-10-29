package com.generics;

public class ParTeste {
    
    public static <K, V> boolean compare(GenericsInterface<K, V> p1, GenericsInterface<K, V> p2) {
        return p1.getKey().equals(p2.getKey()) && p1.getValue().equals(p2.getValue());
    }

}
