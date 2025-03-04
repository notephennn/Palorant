document.addEventListener("DOMContentLoaded", function () {
    const agentBoxes = document.querySelectorAll(".box"); // Semua box agent di navbar
    const agents = document.querySelectorAll(".container"); // Semua deskripsi agent

    if (agentBoxes.length === 0 || agents.length === 0) {
        console.error("Agent elements not found!"); // Cek apakah elemen ditemukan
        return;
    }

    function showAgent(index) {
        agents.forEach((agent, i) => {
            if (i === index) {
                agent.classList.add("active"); // Tampilkan agent yang dipilih
            } else {
                agent.classList.remove("active"); // Sembunyikan lainnya
            }
        });

        agentBoxes.forEach((box, i) => {
            if (i === index) {
                box.classList.add("active"); // Highlight agent aktif
            } else {
                box.classList.remove("active");
            }
        });
    }

    // Tambahkan event listener ke setiap agent di navbar
    agentBoxes.forEach((box, index) => {
        box.addEventListener("click", () => showAgent(index));
    });

    // Set default agent (Phoenix) saat pertama kali load
    showAgent(0);
});

document.addEventListener("DOMContentLoaded", function () {
    function changeVideo(agent, abilityIndex) {
        const videoElement = document.getElementById(`${agent}Video`);
        if (videoElement) {
            const videoSource = videoElement.querySelector("source");

            // Tambahkan efek fade-out sebelum mengubah video
            videoElement.style.opacity = "0"; 

            setTimeout(() => {
                videoSource.src = `../ASSET/${agent}a${abilityIndex}.mp4`; // Sesuaikan dengan nama file
                videoElement.load(); // Reload video untuk menerapkan perubahan
                videoElement.play(); // Langsung play setelah berubah

                // Tambahkan efek fade-in setelah sedikit delay
                setTimeout(() => {
                    videoElement.style.opacity = "1";
                }, 40); // Durasi fade-in (500ms)
            }, 40); // Durasi fade-out (500ms)
        }
    }

    // Tambahkan event listener ke semua ability icons
    const abilityIcons = document.querySelectorAll(".abilities-icons img");
    abilityIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
            const agent = this.getAttribute("onclick").match(/'([^']+)'/)[1]; // Ambil nama agent
            const abilityIndex = this.getAttribute("onclick").match(/, (\d+)/)[1]; // Ambil nomor ability
            changeVideo(agent, abilityIndex);
        });
    });
});


