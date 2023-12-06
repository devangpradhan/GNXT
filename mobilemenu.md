To make the sidebar menu mobile responsive, you can use CSS media queries. Media queries apply different styles for different devices or screen widths. 

Here's an example of how you can hide the sidebar menu when the screen width is less than 768px (which is typically the width of a tablet screen in portrait mode):

```css
@media (max-width: 767px) {
    .shop-sidebar-style {
        display: none;
    }
}
```

This will hide the sidebar menu on screens smaller than 768px. However, you probably want to provide a mobile menu for users to navigate your site on smaller screens. 

You can create a mobile menu using HTML and CSS. Here's a simple example:

```html
<div class="mobile-menu">
    <button class="mobile-menu-button">Menu</button>
    <div class="mobile-menu-items">
        <!-- Copy your menu items here -->
    </div>
</div>
```

```css
.mobile-menu-items {
    display: none;
}

.mobile-menu-button {
    display: none;
}

@media (max-width: 767px) {
    .mobile-menu-button {
        display: block;
    }
}
```

This will display a "Menu" button on screens smaller than 768px. When the button is clicked, you can use JavaScript to show or hide the menu items.

```javascript
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    var menuItems = document.querySelector('.mobile-menu-items');
    if (menuItems.style.display === 'none') {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
});
```

This JavaScript code adds a click event listener to the "Menu" button. When the button is clicked, it checks if the menu items are currently hidden. If they are, it shows them. If they're not, it hides them.

Please note that this is a very basic example and you might need to adjust it to fit your needs. For example, you might want to animate the menu items appearing and disappearing, or you might want to use a hamburger icon instead of a "Menu" button.

You can add these changes to your CSS, HTML and JavaScript files respectively. 

<!MakeEdit index="0" startLine="0" endLine="0" file="file:///d%3A/GitHub/gnxt/products-page-3.html" type="insertBefore" title="Insert mobile menu HTML" />
<!MakeEdit index="1" startLine="0" endLine="0" file="file:///d%3A/GitHub/gnxt/styles.css" type="insertBefore" title="Insert mobile menu CSS" />
<!MakeEdit index="2" startLine="0" endLine="0" file="file:///d%3A/GitHub/gnxt/scripts.js" type="insertBefore" title="Insert mobile menu JavaScript" />