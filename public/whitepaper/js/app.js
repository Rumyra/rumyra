// $(document).ready(function(){
  
  // Write your JQuery here!

// });

function PageController(pages) {
  this.allPages = pages.children;
}


PageController.prototype.changePage = function() {

  var showHidePage = function(el, index, ar) {

  }

  console.log(this.allPages);
  this.allPages.forEach(showHidePage);
}