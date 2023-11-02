// if we does create custom attribute so we have to do this 
// let home = document.getElementById("home")
// let About = document.getElementById("about")
// let Contact = document.getElementById("contact")

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

// console.log(tags); // NodeList of all the li

tabs.forEach((tab) => {
    // console.log(tab); // each tab

    tab.addEventListener("click", () => {

        // const target = tab.dataset.tabTarget; // this will give us value of attribute of the clicked li

        // creating a selector for tab-content
        const target = document.querySelector(tab.dataset.tabTarget); // indirectly selecting the tab-content that has same value as data-tab-target value 
        // console.log(target); // div of tab-content


        tabContent.forEach((eachTab) => { // removing active class from all the tabContent
            eachTab.classList.remove("active");
        })
        tabs.forEach((eachTab) => { // removing active class from all the menu__item
            eachTab.classList.remove("active");
        })

        // adding active class to show and hide
        tab.classList.add('active');
        target.classList.add('active');

        // now if we click on home li so we will get the home div of tab-content with class of active

    })
})
