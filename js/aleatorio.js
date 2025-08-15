const nomes = ["Anna", "Beatriz", "Prof Alessandra", "Marcelo", "Amanda", "Pedro", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}


export const nome = aleatorio(nomes)
