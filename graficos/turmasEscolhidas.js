import {pegarCSS, configEixo} from "./comum.js"

async function mangasTancredo() 
{
    const url = "https://raw.githubusercontent.com/PlatinumLia/2024-API/refs/heads/main/mangaTancredo.json";
    
    const res = await fetch(url);
    const dados = await res.json();
    const turmaEscolhida = dados.slice(1).map(turmas => turmas[1]);
    const contagemTurmas = turmaEscolhida.reduce((acc, turmaEscolhida) => 
        {
            acc[turmaEscolhida] = (acc[turmaEscolhida] || 0) + 1;
            return acc;
        }, 
        {});

    const valores = Object.values(contagemTurmas);
    const etiquetas = Object.keys(contagemTurmas);    

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
    pesquisaTitulo.innerHTML = `Turmas que mais votaram no Colégio <span>Tancredo</span>`;

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

    console.table(dados.slice(1))
}

mangasTancredo();