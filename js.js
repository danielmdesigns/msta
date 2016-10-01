//remove by swiping
function setupSlip(list){
  "use strict";
  list.addEventListener('slip:swipe', function(e) {
    // e.target list item swiped
    if (e.target){
        // list will collapse over that element
        e.target.parentNode.removeChild(e.target);
    } else {
        e.preventDefault(); // will animate back to original position
    }
  });
  list.addEventListener('slip:reorder', function(e) {
    // e.target list item reordered.
    if (e.target) {
        e.target.parentNode.insertBefore(e.target, e.detail.insertBefore);
    } else {
        // element will fly back to original position
        e.preventDefault();
    }
  });
return new Slip(list);
}
setupSlip(document.getElementById('list'));


//remove by clicking
$("li").on("click", function(){
	"use strict";
	$(this).remove();
});