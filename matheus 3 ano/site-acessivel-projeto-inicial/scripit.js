document.addEventListener('DOMContentLoaded', function){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let TamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        TamanhoAtualFonte += 0.1;
        document.body.style.fontSize =`${TamanhoAtualFonte}rem`
    })
}