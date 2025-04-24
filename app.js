// Por el momento me voy a centrar en añadir una funcionalidad más sencilla (añadir un botón de like a cada post), y dejo lo de ampliar la imagen en popup para cuando me sienta más cómodo con JS
document.addEventListener("DOMContentLoaded", () => {

    const botonesLike = document.querySelectorAll(".boton-likes");

    for (let i = 0; i < botonesLike.length; i++) {

        const boton = botonesLike[i];

        boton.addEventListener("click", () => {

            const contenedorLikes = boton.parentElement;
            const contador = contenedorLikes.querySelector(".contador-likes");
            let numeroLikes = parseInt(contador.textContent);
            numeroLikes++;
            contador.textContent = numeroLikes;
            
        });
    }
});