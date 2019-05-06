function initSlider(wrapper, type) {
    var currentImg = {
        i: 0,
    }
    var sliderLine = $('<div class="slider-line"></div>').append(wrapper.find('.item'))
    var restructedLayout = $('<div class="slider-wrapper"></div>').append(sliderLine)
    wrapper.append(restructedLayout)
    initArrows(wrapper, currentImg, type)
    initDots(wrapper, currentImg, type)
}
 function initDots(wrapper, currentImg, type) {
    var navDots = $('<div class="nav-dots"></div>')
    for(var i = 0; i < wrapper.find('.item').length; i++) {
        navDots.append($('<div class="dot"><i class="fas fa-circle"></i></div>').click(function () {
            wrapper.find('.nav-dots .active').removeClass("active")
            $(this).addClass("active")
            currentImg.i = $(this).index()
            slideDot(wrapper, currentImg, type)
        }))
    }
    navDots.find('.dot').eq(0).addClass('active')
    wrapper.append(navDots)
} 
function initArrows(wrapper, currentImg, type) {
    var prevBtn = $('<div class="btn prev-btn"><i class="fas fa-chevron-left"></i></div>').click(function (e) {
        if (type === 'usual') {
            if($(this).hasClass('left-bndr')) return
            slide(wrapper, currentImg,'prev')
            updateArrows(wrapper, currentImg) 
            updateDot(wrapper, currentImg)
        } else {
            if(currentImg.i === 0) {
                currentImg.i = wrapper.find('.item').length 
                console.log(currentImg.i)
                slide(wrapper, currentImg,'prev')
                updateDot(wrapper, currentImg) 
            } else {
                slide(wrapper, currentImg,'prev')
                updateDot(wrapper, currentImg)
            }
        }
    })
    var nextBtn = $('<div class="btn next-btn"><i class="fas fa-chevron-right"></i></div>').click(function (e) {
        if (type === 'usual') {
            if($(this).hasClass('right-bndr')) return 
            slide(wrapper, currentImg, 'next')
            updateArrows(wrapper, currentImg) 
            updateDot(wrapper, currentImg)
        } else {
            if(currentImg.i === wrapper.find('.slider-line .item').length - 1) {
                currentImg.i = -1
                slide(wrapper, currentImg,'next')
                updateDot(wrapper, currentImg) 
            } else {
                slide(wrapper, currentImg,'next')
                updateDot(wrapper, currentImg) 
            }
        }
    })
    wrapper.append(prevBtn).append(nextBtn)
    if (type === 'usual') {
        updateArrows(wrapper, currentImg) 
    }
}
function updateDot(wrapper, currentImg) {
    wrapper.find('.nav-dots .active').removeClass('active');
    wrapper.find('.nav-dots .dot').eq(currentImg.i).addClass('active')
}
function updateArrows(wrapper, currentImg) {
    if (currentImg.i === 0) {
        wrapper.find('.prev-btn').addClass('left-bndr')
        wrapper.find('.next-btn').removeClass('right-bndr')
    }
    else if (currentImg.i === wrapper.find('.slider-wrapper .item').length - 1) {
        wrapper.find('.next-btn').addClass('right-bndr')
        wrapper.find('.prev-btn').removeClass('left-bndr')
    }
    else {
        wrapper.find('.btn').removeClass('left-bndr').removeClass('right-bndr')
    }
}
function slide(wrapper, currentImg, type) {
    type === 'prev' ? currentImg.i-- : currentImg.i++
    var width = wrapper.find('.slider-wrapper').width()
    var delta = wrapper.find('.slider-line').css('right')
    wrapper.find('.slider-line').animate({
    right: currentImg.i * width
    }, 400)
    if (type === 'usual') {
        updateArrows(wrapper, currentImg) 
    }
} 
function slideDot(wrapper, currentImg, type) {
    console.log(currentImg.i)
    var width = wrapper.find('.slider-wrapper').width()
    var delta = wrapper.find('.slider-line').css('right')
    wrapper.find('.slider-line').animate({
        right: currentImg.i * width
        }, 400)   
    if (type === 'usual') {
        updateArrows(wrapper, currentImg) 
    } 
}
initSlider($('.slider'), 'usual') // or 'infity'
/* 
function nextImg(wrapper, currentImg) {
    currentImg.i++;
    var width = wrapper.find('.slider-wrapper').width()
    var delta = wrapper.find('.slider-line').css('right')
    wrapper.find('.slider-line').animate({
    right: currentImg.i * width
    }, 400)
    updateArrows(wrapper, currentImg)
}
function prevImg(wrapper, currentImg) {
    currentImg.i--;
    var width = wrapper.find('.slider-wrapper').width()
    var delta = wrapper.find('.slider-line').css('right')
    wrapper.find('.slider-line').animate({
    right: currentImg.i * width
    }, 400)
    updateArrows(wrapper, currentImg)
} */ 
