const htmlBuilder = {
    //Function to build and return an element taking in element, text, and id as arguments.
    createElementWithText(element, text, id, className, elementValue) {
        const newElement = document.createElement(element)
        if (text) {
            newElement.textContent = text   
        }                                                                                 
                                                                                                
        if (id) {                                                                                
            newElement.id = id                                                                    
                                                                                                  
        }

        if (className) {
            newElement.classList.add(className)
        }
        if (elementValue) {
            newElement.setAttribute("value", elementValue)
        }
        return newElement
    },
    

    // Function to clear the contents of the element which is passed as an argument.
    clearContainer(elementToClear) {
        while (elementToClear.firstChild) {
            elementToClear.removeChild(elementToClear.firstChild)
        }
    }}
