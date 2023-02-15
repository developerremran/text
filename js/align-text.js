// textAlign:left
document.getElementById('align-left').addEventListener('click', function(){
    textAreaField().style.textAlign='left';
})

// textAlign='center
document.getElementById('align-center').addEventListener('click', function(){
    textAreaField().style.textAlign='center';
})

// textAlign='right'
document.getElementById('align-right').addEventListener('click', function(){
    textAreaField().style.textAlign='right';
})

document.getElementById('color-text').addEventListener('change', function(){
    const inputValue=document.getElementById('color-text').value;
    textAreaField().style.color=inputValue;

})


document.getElementById('font-size').addEventListener('click', function(){
    const inputPxSize =getElementById('font-size').value;
    const inputValuenum=parseFloat(inputPxSize);
    textAreaField().style.fontSize = inputValuenum + 'px';
})

