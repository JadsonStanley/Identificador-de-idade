function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
     window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
             //criança 
            img.setAttribute('src', 'src/img/bebehomem.jpg')  
            } else if (idade >= 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'src/img/jovemhomem.jpg')
            } else if (idade >=21 && idade < 50) {
            //adulto
            img.setAttribute('src', 'src/img/homemadulto.jpg')
            } else {
            //idoso
            img.setAttribute('src', 'src/img/idoso.jpg')
            }
            
             
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança  
                img.setAttribute('src', 'src/img/bebemulher.jpg')
               } else if (idade >= 10 && idade < 21) {
               //jovem
               img.setAttribute('src', 'src/img/jovemmulher.jpg')
               } else if (idade >=21 && idade < 50) {
               //adulto
               img.setAttribute('src', 'src/img/mulheradulta.jpg')
               } else {
               //idoso
               img.setAttribute('src', 'src/img/idosa.jpg')
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild (img)
    }
   
}