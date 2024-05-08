/* Observer
---------------------------------------------------------------------------- */

const addObserver = () => {
    const observedElements = document.querySelectorAll("[data-js-observe]");
    const options = {margin: "0px", threshold: 0.5};

    const Observer = new IntersectionObserver (function (entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-in-view");
            } else {
                entry.target.classList.remove("is-in-view");
            }
        });
    }, options);
    
    observedElements.forEach ( function (observedElements) {  
        Observer.observe (observedElements);
    });
}


/* Exports
############################################################################ */

export { addObserver };