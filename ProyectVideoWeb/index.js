const $Video = document.querySelector('#video')
const $Play = document.querySelector('#Play')
const $Pause = document.querySelector('#Pause')
const $Retroceder = document.querySelector('#Retroceder')
const $Avanzar = document.querySelector('#Avanzar')

$Play.addEventListener('click', handlePlay)
$Pause.addEventListener('click', handlePause)

function handlePlay() {
    $Video.play()
    $Play.hidden = true
    $Pause.hidden = false
    console.log('le diste click al boton de play')
}

function handlePause() {
    $Video.pause()
    $Pause.hidden = true
    $Play.hidden = false
    console.log('le diste click al boton de Pause')
}

$Retroceder.addEventListener('click', handleRetroceder)
$Avanzar.addEventListener('click', handleAvanzar)

function handleRetroceder() {
    $Video.currentTime -= 10;
    console.log('Para atras 10 segundos',$Video.currentTime )
}

function handleAvanzar() {
    $Video.currentTime += 10;
    console.log('Para adelante 10 segundos',$Video.currentTime )
}

const $progress = document.querySelector('#progress')
$Video.addEventListener('loadedmetadata', handleLoaded)
$Video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $Video.duration
    console.log('Ha cargado de mi video', $Video.duration)
}

function handleTimeUpdate(){
    $progress.value = $Video.currentTime
    //console.log('Tiempo actual', $Video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $Video.currentTime = $progress.value
    console.log($progress.value)
}