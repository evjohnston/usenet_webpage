// Function to load external HTML files into a container
function loadHTML(containerId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;

            // Reattach the script to ensure it runs if the loaded content has scripts
            if (containerId === 'menu-container') {
                var script = document.createElement('script');
                script.textContent = `
                    function toggleMenu() {
                        var menu = document.getElementById('menuItems');
                        if (menu.style.display === 'block') {
                            menu.style.display = 'none';
                        } else {
                            menu.style.display = 'block';
                        }
                    }
                `;
                document.body.appendChild(script);
            }
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load the header, menu, and buttons
loadHTML('header-container', '../header.html'); // Adjusted path
loadHTML('menu-container', '../menu.html');    // Adjusted path