const selectBtn = document.querySelector(".cheker-btn"),
      items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-txt");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Aprobada(s)`;
            }else{
                btnText.innerText = "Primer Semestre";
            }
    });
})