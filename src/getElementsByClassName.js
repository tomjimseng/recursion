// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var elementArray = [];
  node = document.body;
  var getClassElements = function(node) {
  		if (node.classList && node.classList.contains(className)) {
  			elementArray.push(node);
  		}

  	for (var i = 0; i < node.childNodes.length; i++) {
  		getClassElements(node.childNodes[i]);
  	}
  }
  getClassElements(node);
  return elementArray;
};
