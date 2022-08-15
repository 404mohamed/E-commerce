let progressDiv = document.querySelectorAll(".progress-div");
let progressBars = document.querySelectorAll(".progress-bar");




// ScrollOut 
ScrollOut({
    targets: ".progress-div",
});

// 
window.addEventListener("scroll", function(){
    if(progressDiv.dataset.scroll == "in"){
        progressBars.forEach( el=>{
            let valueNow = getAttribute("aria-valuenow")
            el.style.width = valueNow + "%";
            let counterSpan = el.parentElement.parentElement.querySelector(".progress span");
        })
    }
    else{
        progressBars.forEach( el =>{
            el.style.width = 0 + "%"
        })
    }

});


// ************filter******
const filterListItems = document.querySelectorAll(".list-group");
filterItems  = document.querySelectorAll(".filter-items a");
filterListItems.forEach(list=> {
    list.addEventListener("click" ,()=>{

        document.querySelector(".list-group li.active").classList.remove("active");
        list.classList.add("active");
        let FilteredValue = list.dataset.filter;
        FilteredTtems.forEach(item=>{
            item.classlist.contains(FilteredValue)
            {
                item.classList.remove("active");
                item.classList.add("hidden");
            }
        })

    })
})

