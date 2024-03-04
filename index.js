let images = document.querySelector('.images');
let right = document.querySelector('.right');
let left = document.querySelector('.left');

const allImages = [
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

function showPhoto(index) {
    let singleimage = document.createElement('img');
    // singleimage.style.transition = '0.2s ease';
    singleimage.src = allImages[index];
    images.append(singleimage);
}

let count = 0;

showPhoto(count);

let data = setInterval(() => {
    showPhoto(count);
    count = (count + 1) % allImages.length;
}, 2000);

right.addEventListener('click', () => {
    clearInterval(data)
    count = (count + 1) % allImages.length;
    showPhoto(count);
});

left.addEventListener('click', () => {
    clearInterval(data);
    count = (count - 1 + allImages.length) % allImages.length;
    showPhoto(count);
});