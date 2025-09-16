document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.container');
    const videoContainer = document.getElementById('videoContainer');
    const prankVideo = document.getElementById('prankVideo');

    containers.forEach((container, index) => {
        const button = container.querySelector('button');

        button.addEventListener('click', () => {
            container.style.display = 'none';

            if (button.id === 'prankButton5') {
                videoContainer.style.display = 'flex';
                prankVideo.play();
                prankVideo.requestFullscreen();
            
                setTimeout(() => {
                    prankVideo.pause();
                    prankVideo.currentTime = 0; 
                    videoContainer.style.display = 'none'; 
                    document.exitFullscreen();
                }, 8000); 
                
                
            } else {
                const nextContainer = containers[index + 1];
                nextContainer.style.display = 'block';
                nextContainer.style.position = 'absolute';
                
                const randomTop = Math.random() * (window.innerHeight - nextContainer.offsetHeight);
                const randomLeft = Math.random() * (window.innerWidth - nextContainer.offsetWidth);
                
                nextContainer.style.top = `${randomTop}px`;
                nextContainer.style.left = `${randomLeft}px`;
            }
        });
    });
});