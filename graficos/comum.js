function pegarCSS(variavel)
{
    return getComputedStyle(document.body).getPropertyValue(variavel);
}

const configEixo = 
{
    color: pegarCSS("--preto"),
    size: 12,
    family: pegarCSS("--fonteTitulo"),
}

export{pegarCSS, configEixo};