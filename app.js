var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-img img')
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;
function updateImage(index){
    document.querySelectorAll('.list-img div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src');

    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement,index) =>{
    imgElement.addEventListener('click',e =>{
        // currentIndex = index
        // imgFeature.src = listImg[index].getAttribute('src');
        imgFeature.style.opacity = '0';
        
        setTimeout(()=>{
            updateImage(index)
            imgFeature.style.opacity = '1';
        },500)
        //console.log(currentIndex)
    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = listImg.length -1
    }else{
        currentIndex--
    }
    
    imgFeature.style.animation = ''
    setTimeout(()=>{
        updateImage(currentIndex)
        imgFeature.style.animation = " showPrev 1s ease-in-out forwards"
    },200)
})
nextBtn.addEventListener('click',e=>{
    if(currentIndex == listImg.length -1){
        currentIndex = 0
    }else{
        currentIndex++
    }
   
    imgFeature.style.animation = ''
    setTimeout(()=>{
        updateImage(currentIndex)
        imgFeature.style.animation = "showNext 1s ease-in-out forwards"
    },500)
})
updateImage(0)