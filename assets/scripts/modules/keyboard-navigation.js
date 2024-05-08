/* Keyboard Events
---------------------------------------------------------------------------- */

const addKeyboardEvents = () => {

    const sections = documents.querySelectorAll('main > section');
    const lis = document.querySelectorAll('main > section > ul > li');
    let currentSection = 0;
    let currentLi = 0;

    const jump = (direction) => {
        if(direction === "up" && currentSection > 0){
            currentSection--;
        }

        if(direction === "down" && currentSection < sections.length - 1){
            currentSection++;
        }

        if(direction === "right" && currentSection === 1){
            currentLi++;
        }

        lis[currentSection].scrollIntoView({
            behavior: "smooth"
        });

        sections[currentSection].scrollIntoView({
            behavior: "smooth"
        });
    };

    document.addEventListener("keydown", (event) => {

        if(event.key === "ArrowUp"){
            event.preventDefault();
            event.stopPropagation();
            jump("up");
        }

        if(event.key === "ArrowDown"){
            event.preventDefault();
            event.stopPropagation();
            jump("down");
        }

        if(event.key === "ArrowRight"){
            jump("right");
        }

        if(event.key === "ArrowLeft"){
            jump("left");
        }

    });
};


/* Exports
############################################################################ */

export { addKeyboardEvents };