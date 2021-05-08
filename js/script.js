//Code to transition the imagae. Don't know if code is wrong or
//couldn't include file to HTML
const IMG_WIDTH = 540
const slideContainer = $('.cards')
const slideImages = [...$$('.rectangle')]

slideContainer.style.width = `${slideImages.length * IMG_WIDTH}px`

let index = 0

function next(){
    if (index < slideImages.length -1 ){
        index++
    } else{
        index = 0
    }

    slideImages.style.transform = `translateX(-${IMG_WIDTH*index}px)`
}

function prev(){
    if (index == 0){
        index = slideImages.length - 1
    } else{
        index--
    }

    slideImages.style.transform = `translateX(-${IMG_WIDTH*index}px)`
}

setInterval(() => {
    next()
}, 2 * 1000)
