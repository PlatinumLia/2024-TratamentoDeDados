async function criaGraficoPizza() 
{
    const url = "https://raw.githubusercontent.com/PlatinumLia/2024-API/refs/heads/main/mangaVotos.json";

    const res = await fetch(url);
    const dados = await res.json();

}

criaGraficoPizza();