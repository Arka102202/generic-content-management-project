function grid_auto_fit(size) {
    // Create a <style> element
    var cssRule = "";
    
    if (!style)
        style = document.createElement('style');
    else cssRule += 

    // Define the CSS class rule
    cssRule = `
        .grid-auto-fit-${size} {
            grid-template-columns: repeat(auto-fit, minmax(${size}px, 1fr));
        }
    `;

    // Add the CSS rule to the <style> element
    style.innerHTML = cssRule;

    // Append the <style> element to the end of the <body>
    document.body.appendChild(style);
}