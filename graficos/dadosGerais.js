const url = "https://raw.githubusercontent.com/PlatinumLia/2024-API/refs/heads/main/manga.json?token=GHSAT0AAAAAACYJX2COEY33HRZYA4KF54YOZX4ANEQ";

async function vizualizarInformacoes() 
{
    const res = await fetch(url);
    const dados = await res.json();

    const nomeDoManga = dados.entrevista.mangas[0].nome;
    const votosRecebidos = dados.entrevista.mangas[0].votos;

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("caixa-grafico__texto");
    paragrafo.innerHTML = `Em busca de saber os mangás mais lidos no mundo,
    foi realizada uma série de pesquisas de diferentes fontes. Com o auxílio
    do ChatGPT, foi possível estimar que o mangá mais lido foi <span>${nomeDoManga}</span>
    com um total de aproximadamente um total de <span>${votosRecebidos}</span> votos.`;

    const caixa = document.getElementById("caixa-grafico");
    caixa.appendChild(paragrafo);

    //console.log(dados.entrevista.mangas[0].nome)
}

vizualizarInformacoes();