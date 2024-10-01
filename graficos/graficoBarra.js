async function criaGrafico() 
{
    const url = "https://raw.githubusercontent.com/PlatinumLia/2024-API/refs/heads/main/manga.json?token=GHSAT0AAAAAACYJX2COEY33HRZYA4KF54YOZX4ANEQ";
    
    const res = await fetch(url);
    const dados = await res.json();

    console.log(dados)
}

criaGrafico;