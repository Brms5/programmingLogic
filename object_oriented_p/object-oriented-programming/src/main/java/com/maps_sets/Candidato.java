package com.maps_sets;

public class Candidato {

    private int codigo_votacao;
    private String nome_candidato;
    private String partido;
    private int numero_votos;

    public Candidato(int codigo_votacao, String nome_candidato, String partido, int numero_votos) {
        this.codigo_votacao = codigo_votacao;
        this.nome_candidato = nome_candidato;
        this.partido = partido;
        this.numero_votos = numero_votos;
    }

    public int getCodigo_votacao() {
        return codigo_votacao;
    }

    public void setCodigo_votacao(int codigo_votacao) {
        this.codigo_votacao = codigo_votacao;
    }

    public String getNome_candidato() {
        return nome_candidato;
    }

    public void setNome_candidato(String nome_candidato) {
        this.nome_candidato = nome_candidato;
    }

    public String getPartido() {
        return partido;
    }

    public void setPartido(String partido) {
        this.partido = partido;
    }

    public int getNumero_votos() {
        return numero_votos;
    }

    public void setNumero_votos(int numero_votos) {
        this.numero_votos = numero_votos;
    }


}
