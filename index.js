const dictIframe = {'1':"k67GBsH6KHMt0sBlZam",'2':'k4vik4QaAhibmHBlZio','3':'k38EjQ3yvi40m6BlZim','4':'k2nISFY0nl4OY6BlZik',
    '5':'kZyrYnOwlYFoiNBlZig','6':'k6SMmcKlfLs5H6BlZii','7':'k1zMQmiZCHqCMBBlZEi','8':'k7q3j3t4Vvbs0WBlZEg',
    '9':'ko9txT3mPXqW44BlZEa','10':'k5roxIbt2Tn5YRBlZEc'
}

function changeSrc(id){
    const myVideo = document.getElementById('myVideo');
    if(id==="0"){
        myVideo.src='https://i.ibb.co/FJ9qQyJ/youtube-V3.png';
    }else{
        myVideo.src = "https://www.dailymotion.com/embed/video/"+dictIframe[id];
    }
    
}
