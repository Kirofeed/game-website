document.addEventListener('DOMContentLoaded', function () {
    const sprite = document.getElementById('sprite');
    const frames = [
        'images/jump_right_01.png',
        'images/jump_right_02.png',
        'images/jump_right_03.png',
        'images/jump_right_04.png',
        'images/jump_right_05.png',
        'images/jump_right_06.png',
        'images/jump_right_07.png',
        'images/jump_right_08.png'
    ];
    let currentFrame = 0;

    function updateSprite() {
        sprite.src = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }

    setInterval(updateSprite, 170);
});
