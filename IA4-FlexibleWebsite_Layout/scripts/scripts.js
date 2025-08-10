const images = [
    { src: "images/img1.jpg", artist: "Lauryn Hill", year: 1998 },
    { src: "images/img2.jpg", artist: "J. Cole", year: 2014 },
    { src: "images/img3.jpg", artist: "Kendrick Lamar", year: 2012 },
    { src: "images/img4.jpg", artist: "Tems", year: 2024 },
    { src: "images/img5.jpg", artist: "Daniel Caesar", year: 2023 }
];

let currentIndex = 0;

function renderCarousel() {
    const track = document.getElementById("carousel-content");
    track.innerHTML = '';

    const total = images.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % total;

    const showIndexes = [leftIndex, centerIndex, rightIndex];

    showIndexes.forEach((imgIndex, i) => {
        const itemData = images[imgIndex];

        const item = document.createElement("div");
        item.className = "carousel-item";
        if (i === 1) item.classList.add("focused");

        const img = document.createElement("img");
        img.src = itemData.src;
        img.alt = `${itemData.artist}`;

        const caption = document.createElement("div");
        caption.className = "caption";
        caption.innerText = `${itemData.artist} (${itemData.year})`;

        item.appendChild(img);
        item.appendChild(caption);
        track.appendChild(item);
    });
}

function Left() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderCarousel();
}

function Right() {
    currentIndex = (currentIndex + 1) % images.length;
    renderCarousel();
}

document.addEventListener("DOMContentLoaded", renderCarousel);
