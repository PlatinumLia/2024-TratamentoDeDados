import {pegarCSS, configEixo} from "./comum.js"

async function mangasTancredo() 
{
    const url = "https://raw.githubusercontent.com/PlatinumLia/2024-API/refs/heads/main/mangaTancredo.json";
    
    const res = await fetch(url);
    const dados = await res.json();
    const mangasVotados = dados.slice(1).map(mangas => mangas[2]);
    const contagemMangas = mangasVotados.reduce((acc, mangasVotados) => 
        {
            acc[mangasVotados] = (acc[mangasVotados] || 0) + 1;
            return acc;
        }, 
        {});

    const valores = Object.values(contagemMangas);
    const etiquetas = Object.keys(contagemMangas);    

    const data =
    [
        {
            values: valores,
            labels: etiquetas,
            type: "pie",
            textinfo: "label+percent"
        }    
    ]

    const layout = 
    {
        plot_bgcolor: pegarCSS("--preto"),
        paper_bgcolor: pegarCSS("--preto"),
        font:
        {
            color: pegarCSS("--branco"),
            family: pegarCSS("--fonteTitulo"),
        }     

    }

    const pesquisaTitulo = document.createElement("h3");
    pesquisaTitulo.classList.add("caixa-grafico__titulo");
    pesquisaTitulo.innerHTML = `Os mangás mais votados no Colégio <span>Tancredo</span>`;

    const grafico = document.createElement("div");
    grafico.className = "grafico-disco";
    document.getElementById("caixa-grafico").appendChild(pesquisaTitulo);
    document.getElementById("caixa-grafico").appendChild(grafico);
    const config = 
    {
        Responsive: true,
        displayModeBar: false,
    }

    Plotly.newPlot(grafico, data, layout, config);

    const caixa = document.getElementById("caixa-grafico");
    const paragrafo = document.createElement("p");
    paragrafo.classList.add("caixa-grafico__texto");
    paragrafo.innerHTML = "Nota-se que o mangá mais votado no Colégio Tancredo é diferente do mais votado no mundo. Enquanto os estudantes elegeram, com 6 votos, <span>Demon Slayer</span> o mangá que mais foi lido no Colégio. A pesquisa global indicou que <span>One Piece</span> é o mangá mais lido do mundo. Na escola, o mesmo ficou em quarto lugar. Contudo, a grande maioria (25%) afirma que leram outros diferentes dos presentes na pesquisa ou não leram nenhum mangá.";
    caixa.appendChild(paragrafo);
}

mangasTancredo();