package com.maps_sets;

import java.util.*;

public class Main {

    public static void main(String[] args) {

        // Conjuntos

        // HashSet
        Set<String> cargos = new HashSet<>();
        cargos.add("Presidente");
        cargos.add("Governador");
        cargos.add("Prefeito");
        cargos.add("Vereador");
        cargos.add(null);

        // TreeSet e SortedSet
        Set<String> cargos2 = new TreeSet<>();
        cargos2.add("Presidente");
        cargos2.add("Governador");
        cargos2.add("Prefeito");
        cargos2.add("Vereador");
//        cargos2.add(null); -> Não aceita valores nulos

        // SortedSet serve para ordenar os elementos do conjunto de acordo com a ordem natural dos elementos (alfabética, numérica, etc)

        SortedSet<String> cargos3 = new TreeSet<>();
        cargos3.add("Presidente");
        cargos3.add("Governador");
        cargos3.add("Prefeito");
        cargos3.add("Vereador");
//        cargos3.add(null); -> Não aceita valores nulos

        System.out.println("HashSet: " + cargos);
        System.out.println("TreeSet: " + cargos2);
        System.out.println("SortedSet: " + cargos3);

        // Mapas

        Map<Integer, String> mapNames = new HashMap<Integer, String>();
        mapNames.put(1, "UNIVESP");
        mapNames.put(2, "USP");
        mapNames.put(3, "UNICAMP");
        mapNames.put(4, "UNESP");

        System.out.println("HashMap: " + mapNames);
        System.out.println("HashMap: " + mapNames.values());
        System.out.println("HashMap: " + mapNames.keySet());
        System.out.println("HashMap: " + mapNames.entrySet());

        // HashTable

        Hashtable<Integer, String> mapNames2 = new Hashtable<Integer, String>();
        mapNames2.put(1, "UNIVESP");
        mapNames2.put(2, "USP");
        mapNames2.put(3, "UNICAMP");
        mapNames2.put(4, "UNESP");

        System.out.println("HashTable: " + mapNames2);
        System.out.println("HashTable: " + mapNames2.values());
        System.out.println("HashTable: " + mapNames2.keySet());
        System.out.println("HashTable: " + mapNames2.entrySet());


    }

}
