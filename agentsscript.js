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
                playFirstAbility(agent);
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

    function playFirstAbility(agentElement) {
        const videoElement = agentElement.querySelector(".video-abilities video");
        const agentName = agentElement.querySelector(".char1nama").innerText.toLowerCase();
        changeVideo(agentName, 1);
    }

    function changeVideo(agent, abilityIndex) {
        const videoElement = document.getElementById(`${agent}Video`);
        if (videoElement) {
            const videoSource = videoElement.querySelector("source");
            
            videoElement.style.opacity = "0";
            setTimeout(() => {
                videoSource.src = `../ASSET/${agent}a${abilityIndex}.mp4`;
                videoElement.load();
                videoElement.play();
                setTimeout(() => {
                    videoElement.style.opacity = "1";
                }, 40);
            }, 40);
        }
    }

    agentBoxes.forEach((box, index) => {
        box.addEventListener("click", () => showAgent(index));
    });

    const abilityIcons = document.querySelectorAll(".abilities-icons img");
    abilityIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
            const agent = this.getAttribute("onclick").match(/'([^']+)'/)[1];
            const abilityIndex = this.getAttribute("onclick").match(/, (\d+)/)[1];
            changeVideo(agent, abilityIndex);
        });
    });

    showAgent(0); // Set default agent (Phoenix) saat pertama kali load
});
