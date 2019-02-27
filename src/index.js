/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var matches = 0;
  for (var i = 0; i < preferences.length; i++) {
    var aLover = preferences[i] - 1;
    var bLover = preferences[aLover] - 1;
    var cLover = preferences[bLover] - 1;
    if (aLover !== i) {
      if (aLover !== bLover) {
        if (cLover !== bLover) {
          if (cLover == i) {
            matches++;
          }
        }
      }
    }
  }
  return matches / 3;
};
