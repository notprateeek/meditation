const app=()=>{
    const sound=document.querySelector('audio');
    const video=document.querySelector('video');
    const play=document.querySelector('.start');
    const pause=document.querySelector('.stop');

    play.addEventListener('click',()=>{
        sound.play();
        video.play();
    })

    pause.addEventListener('click',()=>{
        sound.pause();
        video.pause();
    })
}
app();