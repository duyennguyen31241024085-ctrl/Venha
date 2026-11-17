
document.addEventListener("DOMContentLoaded", function () {

    // MENU ĐIỀU HƯỚNG TRÊN ĐIỆN THOẠI
    const navContainer = document.querySelector(".nav-container");
    const navMenu = document.querySelector(".nav-menu");

    if (navContainer && navMenu) {
        const menuButton = document.createElement("button");

        menuButton.className = "menu-toggle";
        menuButton.type = "button";
        menuButton.setAttribute("aria-label", "Mở menu điều hướng");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = "☰";

        navContainer.insertBefore(menuButton, navMenu.parentElement);

        menuButton.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("open");

            menuButton.innerHTML = isOpen ? "✕" : "☰";
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"
            );
        });

        // Đóng menu sau khi chọn một mục
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
                menuButton.innerHTML = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            });
        });

        // Đóng menu khi chuyển sang màn hình lớn
        window.addEventListener("resize", function () {
            if (window.innerWidth > 700) {
                navMenu.classList.remove("open");
                menuButton.innerHTML = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            }
        });
    }

    // NÚT QUAY LẠI ĐẦU TRANG
    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";
    backToTop.type = "button";
    backToTop.innerHTML = "↑";
    backToTop.setAttribute("aria-label", "Quay lại đầu trang");

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // HIỆU ỨNG HIỆN NỘI DUNG KHI CUỘN
    const revealElements = document.querySelectorAll(
        ".student-card, .lab-card, .skills-grid > div, .reflection-section .section-container > p"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            function (entries, currentObserver) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        currentObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

    // ĐÁNH DẤU MỤC MENU ĐANG ĐƯỢC XEM
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function updateActiveMenu() {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveMenu);
    updateActiveMenu();

});
