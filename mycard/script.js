function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', "Foto de Victor Hugo com camisa branca e óculos escuros no aeroporto.")
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', "Foto de Victor Hugo com o Empire State ao fundo.")
    }
}
