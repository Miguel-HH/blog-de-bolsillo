
    const themeSwitcher = document.getElementById("theme-switch");

    themeSwitcher.checked = false;
    function clickHandler() {

        if (this.checked) {
                document.body.classList.remove("light");
                document.body.classList.add("dark");
                localStorage.setItem("theme", "dark");
        } else {
                document.body.classList.add("light");
                document.body.classList.remove("dark");
                localStorage.setItem("theme", "light");
        }
    };

    themeSwitcher.addEventListener('click', clickHandler)

    window.onload = checkTheme();

    function checkTheme() {
        const localstorageTheme = localStorage.getItem("theme");

        if (localstorageTheme !== null && localstorageTheme === "dark") {
            document.documentElement.style.setProperty("--bg", "#222");
            document.documentElement.style.setProperty("--bg2", "#333");
            document.documentElement.style.setProperty("--txt1", "#ccc");
            document.documentElement.style.setProperty("--txt2", "#999");
            document.documentElement.style.setProperty("--title1", "#eee");
            document.documentElement.style.setProperty("--high1", "hsl(185, 100%, 45%)");
            document.documentElement.style.setProperty("--high2", "hsl(185, 95%, 40%)");
            document.body.className = localstorageTheme;

            const themeSwitch = document.getElementById("theme-switch");
            themeSwitch.checked = true;
        } else {
            document.documentElement.style.setProperty("--bg", "#eee");
            document.documentElement.style.setProperty("--bg2", "#ddd");
            document.documentElement.style.setProperty("--txt1", "#333");
            document.documentElement.style.setProperty("--txt2", "#777");
            document.documentElement.style.setProperty("--title1", "#222");
            document.documentElement.style.setProperty("--high1", "hsl(185, 100%, 30%)");
            document.documentElement.style.setProperty("--high2", "hsl(185, 95%, 25%)");
        }
    };