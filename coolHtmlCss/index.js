const toggleDiv = document.getElementById('toggleDiv');

toggleDiv.addEventListener('click',(e)=>{
    e.value = 'bye'
})

toggleDiv.mouseenter(function(){
    alert("You entered p1!");
  });