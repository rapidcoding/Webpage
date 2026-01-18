document.addEventListener("DOMContentLoaded", () => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const overlay = document.querySelector(".menu-overlay");
    const closeBtn = document.querySelector(".menu-close");


    if (!hamMenu || !offScreenMenu || !overlay) return;

    const DESKTOP_BREAKPOINT = 768; // match your CSS media query

    function setOpen(isOpen) {
        hamMenu.classList.toggle("active", isOpen);
        offScreenMenu.classList.toggle("active", isOpen);
        overlay.classList.toggle("active", isOpen);
        document.body.classList.toggle("menu-open", isOpen);
        hamMenu.setAttribute("aria-expanded", String(isOpen));
    }

    function toggleMenu() {
        const isOpen = !hamMenu.classList.contains("active");
        setOpen(isOpen);
    }

    function closeMenu() {
        setOpen(false);
    }

    hamMenu.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);
    closeBtn.addEventListener("click", closeMenu);


    // Close after clicking any mobile link
    offScreenMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    // Fix: if user resizes to desktop while menu is open, close it
    window.addEventListener("resize", () => {
        if (window.innerWidth > DESKTOP_BREAKPOINT) {
            closeMenu();
        }
    });
});
