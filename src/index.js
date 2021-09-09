import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

// wait for the load event on the window object to make sure all static content is loaded before initializing the application
window.addEventListener(
    'load',
    (event) =>
    {
        load_ui();
    }
);

function load_ui() {
    const firstNameField = document.querySelector('#firstName');
    const lastNameField = document.querySelector('#lastName');
    const addButton = document.querySelector('#addButton');
    const grid = document.querySelector('#grid');

    let people = [];

    addButton.addEventListener(
        'click',
        (event) =>
        {
            people = [
                ...people,
                {
                    firstName: firstNameField.value,
                    lastName: lastNameField.value
                }
            ];
            grid.items = people;
            firstNameField.value = '';
            lastNameField.value = '';
        }
    );
}