let content = document.getElementById("myContent");
function getOffsetTop() {
    let items = document.getElementsByClassName("menuItem");
    let offsets = [];
    
    for(let i=0; i < items.length; i++) {
      offsets.push(items[i].offsetTop);
    }
    let maxOffset = Math.max.apply( Math, offsets );
      if(maxOffset > 64){
        content.className = "content tripleMenu";
      } else if (maxOffset > 0) {
        content.className = "content doubleMenu";
      } else {
        content.className = "content";
      }
    }

window.onload = function() {
    getOffsetTop();
}
  
window.addEventListener('resize',() => {
    getOffsetTop();
});