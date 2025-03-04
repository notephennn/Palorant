document.addEventListener("DOMContentLoaded", function () {
    const mapBoxes = document.querySelectorAll(".box");
    const maps = document.querySelectorAll(".container");

    if (mapBoxes.length === 0 || maps.length === 0) {
        console.error("Map elements not found!");
        return;
    }

    function showMap(index) {
        maps.forEach((map, i) => {
            map.classList.toggle("active", i === index);
        });
        mapBoxes.forEach((box, i) => {
            box.classList.toggle("active", i === index);
        });
    }

    mapBoxes.forEach((box, index) => {
        box.addEventListener("click", () => showMap(index));
    });

    showMap(0);
});

document.addEventListener("DOMContentLoaded", function () {
    function changeImage(map, locationIndex) {
        const videoElement = document.getElementById(`${map}Video`);
        if (videoElement) {
            videoElement.style.backgroundImage = `url('../ASSET/${map}l${locationIndex}.png')`;
            videoElement.style.backgroundSize = "cover";
            videoElement.style.backgroundPosition = "center";
        }
    }

    document.querySelectorAll(".asset-icons img").forEach((icon) => {
        icon.addEventListener("mouseover", function () {
            const match = this.getAttribute("onclick").match(/'([^']+)', (\d+)/);
            if (match) {
                const map = match[1];
                const locationIndex = match[2];
                changeImage(map, locationIndex);
            }
        });
    });
});
    