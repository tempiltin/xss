setTimeout(() => {
    document.body.innerHTML = "";
    document.body.style.backgroundColor = "black";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";

    let warning = document.createElement("div");
    warning.textContent = "Sayt XSS ga uchradi";
    warning.style.color = "orange";
    warning.style.fontSize = "2em";
    warning.style.fontWeight = "bold";

    document.body.appendChild(warning);
}, 100);
