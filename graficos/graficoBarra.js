import {pegarCSS, configEixo} from "./comum.js"

async function criaGrafico() 
{
    const url = "https://raw.githubusercontent.com/PlatinumLia/2024-API/refs/heads/main/mangaVotos.json";
    
    const res = await fetch(url);
    const dados = await res.json();
    const mangas = Object.keys(dados);
    const leitores = Object.values(dados);

    const data = 
    [
        {
            x: mangas,
            y: leitores,
            type: "bar",
            marker: 
            {
                color: pegarCSS("--cinzaEscuro"),
            }
        }
    ]

    const layout = 
    {
        plot_bgcolor: pegarCSS("--platina"),
        paper_bgcolor: pegarCSS("--cinzaClaro"),
        title:
        {
            text: "Os mangás mais lidos do mundo",
            font:
            {
                color: pegarCSS("--preto"),
                family: pegarCSS("--fonteTitulo"),
                size: 50
            }
        },
        xaxis:
        {
            tickfont: configEixo,
            tickangle: -330,
        },
        yaxis:
        {
            tickfont: configEixo,
            tickangle: -0,
        }
    }

    const grafico = document.createElement("div");
    grafico.className = "grafico";
    document.getElementById("caixa-grafico").appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criaGrafico();