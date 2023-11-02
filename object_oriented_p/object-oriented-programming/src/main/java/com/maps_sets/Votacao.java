package com.maps_sets;

public interface Votacao {
    void votar(int codigoCandidato);
    void votarBranco();
    void votarNulo();
    void carregarListaCandidatos();
    void finalizarVotacao();
}
