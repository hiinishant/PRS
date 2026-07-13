const sections = document.querySelectorAll("section, .home, .about, .experience, .education, .skills, .contact");
const navLinks = document.querySelectorAll(".navlinks a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
    current = "contactid";
}

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

window.dispatchEvent(new Event("scroll"));

const copyItems = document.querySelectorAll(".copy-text");

copyItems.forEach(item => {
    item.addEventListener("click", async () => {
        const text = item.dataset.copy;
        try{
            await navigator.clipboard.writeText(text);
            const old = item.innerHTML;
            item.innerHTML = "Copied!";
            setTimeout(() => {
                item.innerHTML = old;
            },1200);

        }
        catch{
            alert("Copy failed");
        }
    });
});