
// bold text
document.getElementById('bold-text').addEventListener('click', function(){
    if (textAreaField().style.fontWeight === "400") {
        textAreaField().style.fontWeight = "700";
    } else {
        textAreaField().style.fontWeight = '400';
    }
})

// Italic text 
document.getElementById('italic-text').addEventListener('click', function(){
    if(textAreaField().style.fontStyle==='normal') {
        textAreaField().style.fontStyle = 'italic';
    } else{
        textAreaField().style.fontStyle = 'normal';
    }
})

// Uppercase text 
document.getElementById('uppercase-text').addEventListener('click', function(){
    if (textAreaField().style.textTransform === "uppercase") {
        textAreaField().style.textTransform = "lowercase";
    } else {
        textAreaField().style.textTransform = 'uppercase';
    }
})

// Lowercase text 
document.getElementById('lowercase-text').addEventListener('click', function(){
    if (textAreaField().style.textTransform === "uppercase") {
        textAreaField().style.textTransform = "lowercase";
    } else {
        textAreaField().style.textTransform = 'uppercase';
    }
})

// Underline text 
document.getElementById('underline-text').addEventListener('click', function(){
    if (textAreaField().style.textDecoration === "none") {
        textAreaField().style.textDecoration = "underline";
    } else {
        textAreaField().style.textDecoration = 'none';
    }
})