function destacar() {
    let nome = document.getElementById('nome').value
    nome = nome.toLowerCase();
    let lista_nomes = document.getElementsByClassName('nomes')
    if (nome != "") {
        for (i = 0; i < lista_nomes.length; i++) {
            if (lista_nomes[i].innerHTML.toLowerCase().includes(nome)) {
                lista_nomes[i].style.fontWeight = "bold";
            } else {
                lista_nomes[i].style.fontWeight = "lighter";
            }
        }
    } else {
        for (i = 0; i < lista_nomes.length; i++) {
            if (lista_nomes[i].innerHTML.toLowerCase().includes(nome)) {
                lista_nomes[i].style.fontWeight = "lighter";
            }
        }
    }
}