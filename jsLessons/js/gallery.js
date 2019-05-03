var zoomStatus = false
$(function () {
    $(".gallery .img").click(function () {
        console.log(zoomStatus)
        if(zoomStatus === true) {
            minimizeImg($(this))
        }
        else {
            zoomImg($(this))
        }
    })
})
var changeZooming = function(newZoomStatus) {
    zoomStatus = newZoomStatus
}

var zoomImg = function (img) {
    var clonedImg = $('<div class="overlay-img"><img src="' + img.find('img').attr("src") + '"/></div>')
    console.log(img.find('img').src)
    var overlayObject = $('<div class="overlay-object"></div>')
    var closeButton = $('<div class="close-button"><i class="fas fa-times"></i></div>')
    closeButton.click(function() {
        minimizeImg(img) 
    })

    overlayObject.append(clonedImg).append(closeButton)
    $("body").append(overlayObject)
    
    changeZooming(true)
}
var minimizeImg = function (img) {
    console.log('min')
    $('.overlay-object').remove()
    changeZooming(false)
}

var createSlider = function(selector) {
    
}
