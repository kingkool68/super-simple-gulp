import { greet } from './imports/file.js';

document.querySelectorAll('.js-greet').forEach(function($el) {
    $el.addEventListener('click', function() {
        var name = this.getAttribute('data-name');
        greet(name);
    });
});
