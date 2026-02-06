document.querySelectorAll(".blog-toggle").forEach(button => {

    button.addEventListener("click", function(){

        const fullText = this.parentElement.querySelector(".blog-full");

        const isOpen = fullText.classList.contains("active");

        if(isOpen){

            fullText.style.maxHeight = fullText.scrollHeight + "px";

            requestAnimationFrame(() => {
                fullText.style.maxHeight = "0px";
                fullText.style.opacity = "0";
            });

            fullText.classList.remove("active");
            this.textContent = "Leer más";

        } else {

            fullText.style.maxHeight = fullText.scrollHeight + "px";
            fullText.style.opacity = "1";

            fullText.classList.add("active");
            this.textContent = "Leer menos";

        }

    });

});