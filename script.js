window.veealert = function(data) {
    // Alert the provided parameters
    alert(`title is: ${data.title}, text is: ${data.text}, icon is: ${data.icon}, buttonText is: ${data.buttonText}`);
    
    // Create the modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    // Create modal title
    const titleElement = document.createElement('h2');
    titleElement.textContent = data.title;
    modalContent.appendChild(titleElement);
    
    // Create modal text
    const textElement = document.createElement('p');
    textElement.textContent = data.text;
    modalContent.appendChild(textElement);
    
    // Create modal icon
    const iconElement = document.createElement('img');
    iconElement.src = data.icon;
    modalContent.appendChild(iconElement);
    
    // Create modal button
    const buttonElement = document.createElement('button');
    buttonElement.textContent = data.buttonText;
    modalContent.appendChild(buttonElement);
    
    // Append modal content to modal
    modal.appendChild(modalContent);
    
    // Append modal to body
    document.body.appendChild(modal);
};
