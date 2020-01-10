const contentSections = document.getElementsByClassName('content');
const smallContentSections = document.getElementsByClassName('smallContent');
const largeDividers = document.getElementsByClassName('title');
const smallDividers = document.getElementsByClassName('smallDivider');
const footer = document.getElementsByTagName('footer')[0];

const resizePage = () => {
    
    for(element of contentSections) {
        element.style.minHeight = window.innerHeight + "px";
    }
    
    for(element of smallContentSections) {
        element.style.minHeight = window.innerHeight / 4 + "px";
    }
    
    for(element of largeDividers) {
        element.style.minHeight = window.innerHeight / 4 + "px";
    }
    
    for(element of smallDividers) {
        element.style.minHeight = window.innerHeight / 8 + "px";
    }
};

resizePage();

window.onresize = resizePage;