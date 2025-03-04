document.addEventListener("DOMContentLoaded", function () {
    const mapBoxes = document.querySelectorAll(".box"); // Semua box map
    const mapContainers = document.querySelectorAll(".container"); // Semua deskripsi map

    if (mapBoxes.length === 0 || mapContainers.length === 0) {
        console.error("Map elements not found!");
        return;
    }

    // Daftar warna untuk setiap maps
    const mapColors = {
        bind: "#ff5733",
        haven: "#33ff57",
        ascent: "#3357ff",
        split: "#ff33a8",
        icebox: "#33fff2",
        breeze: "#f2ff33",
        fracture: "#a833ff",
        pearl: "#ff8333",
        lotus: "#33ff83"
    };

    function showMap(index) {
        mapContainers.forEach((map, i) => {
            map.classList.toggle("active", i === index);
            if (i === index) {
                setFirstAbilityImage(map);
            }
        });

        mapBoxes.forEach((box, i) => {
            box.classList.toggle("active", i === index);

            // Ambil nama map dari atribut data-map
            let mapName = box.dataset.map;

            // Ubah warna box.active sesuai dengan map yang diklik
            if (i === index && mapColors[mapName]) {
                box.style.backgroundColor = mapColors[mapName];
            } else {
                box.style.backgroundColor = ""; // Kembalikan ke warna default saat tidak aktif
            }
        });
    }

    function setFirstAbilityImage(mapElement) {
        const abilityImageContainer = mapElement.querySelector(".video-abilities img");
        const firstAbilityIcon = mapElement.querySelector(".asset-icons img");

        if (abilityImageContainer && firstAbilityIcon) {
            const match = firstAbilityIcon.getAttribute("onclick").match(/'([^']+)', (\d+)/);
            if (match) {
                const mapName = match[1];
                abilityImageContainer.src = `../ASSET/${mapName}a1.png`; // Set gambar pertama
            }
        }
    }

    document.querySelectorAll(".asset-icons img").forEach((icon) => {
        icon.addEventListener("click", function () {
            const match = this.getAttribute("onclick").match(/'([^']+)', (\d+)/);
            if (match) {
                const mapName = match[1];
                const abilityIndex = match[2];
                const abilityImageContainer = document.getElementById(`${mapName}Image`);

                if (abilityImageContainer) {
                    abilityImageContainer.src = `../ASSET/${mapName}a${abilityIndex}.png`;
                }
            }
        });
    });

    mapBoxes.forEach((box, index) => {
        box.addEventListener("click", () => showMap(index));
    });

    showMap(0); // Set default map pertama saat halaman dimuat
});
