import {pegarCSS, configEixo} from "./comum.js"

async function criaGraficoPizza() 
{
    const url = "https://raw.githubusercontent.com/PlatinumLia/2024-API/refs/heads/main/mangaVotos.json";

    const res = await fetch(url);
    const dados = await res.json();
    const mangasNome = Object.keys(dados);
    const quantidadeLeitores = Object.values(dados);

    const data = 
    [
        {
            values: quantidadeLeitores,
            labels: mangasNome,
            type: "pie",
            textinfo: "label + percent",
        }
    ]

    const layout =
    {
        height: 400,
        width: 600,
        plot_bgcolor: pegarCSS("--preto"),
        paper_bgcolor: pegarCSS("--cinzaClaro"),
        font:
            {
                color: pegarCSS("--branco"),
                family: pegarCSS("--fonteTitulo"),
                size: 12,
            }
    } 

    const tituloManga = document.createElement("h3");
    tituloManga.classList.add("caixa-grafico__titulo");
    tituloManga.innerHTML = `Os <span>mangás</span>
     mais lidos do mundo`;

    const grafico = document.createElement("div");
    grafico.className = "grafico-disco";
    document.getElementById("caixa-grafico").appendChild(tituloManga);
    document.getElementById("caixa-grafico").appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criaGraficoPizza();