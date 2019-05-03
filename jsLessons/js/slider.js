function initSlider(wrapper) {
    var currentImg = {
        i: 0
    }
    var sliderLine = $('<div class="slider-line"></div>').append(wrapper.find('.item'))
    var restructedLayout = $('<div class="slider-wrapper"></div>').append(sliderLine)
    wrapper.append(restructedLayout)
    initArrows(wrapper, currentImg);
    initDots(wrapper, currentImg)

}
function initArrows(wrapper, currentImg) {
    var prevBtn = $('<div class="btn prev-btn"><i class="fas fa-chevron-left"></i></div>').click(function (e) {
        if($(this).hasClass('left-bndr')) return
        slide(wrapper, currentImg,'prev')
    })
    var nextBtn = $('<div class="btn next-btn"><i class="fas fa-chevron-right"></i></div>').click(function (e) {
        if($(this).hasClass('right-bndr')) return
        slide(wrapper, currentImg, 'next')
    })
    wrapper.append(prevBtn).append(nextBtn)
    updateArrows(wrapper, currentImg)
    
}

function updateArrows(wrapper, currentImg) {
    if (currentImg.i === 0) {
        wrapper.find('.prev-btn').addClass('left-bndr')
    }
    else if (currentImg.i === wrapper.find('.slider-wrapper .item').length - 1) {
        wrapper.find('.next-btn').addClass('right-bndr')
    }
    else {
        wrapper.find('.btn').removeClass('left-bndr').removeClass('right-bndr')
    }
}
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
function slide(wrapper, currentImg, type) {
    type === 'prev' ? currentImg.i-- : currentImg.i++
    var width = wrapper.find('.slider-wrapper').width()
    var delta = wrapper.find('.slider-line').css('right')
    wrapper.find('.slider-line').animate({
    right: currentImg.i * width
    }, 400)
    updateArrows(wrapper, currentImg)
}
initSlider($('.slider'))