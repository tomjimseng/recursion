// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'undefined') {
  	return 'undefined';
  }

  if (obj === null) {
  	return 'null';
  }

  if (typeof obj === 'number') {
  	return obj.toString();
  }

  if (typeof obj === 'boolean') {
  	return obj.toString();
  }

  if (typeof obj === 'string') {
  	return '"' + obj + '"';
  }

  if (Array.isArray(obj) && obj.length === 0) {
  	return '[]'; 
  }

  if (Array.isArray(obj) && obj.length > 0) {
  	for (var i = 0; i < obj.length; i++) {
  		obj[i] = stringifyJSON(obj[i]);
  	}
  	return '[' + obj + ']';
  }

  if (typeof obj === 'object') {
  	var string = '';
  	for (var key in obj) {
  		
  		if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {

			string = string.concat(stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',');
		}
}
  return '{' + string.slice(0, string.length - 1) + '}';
}
};
