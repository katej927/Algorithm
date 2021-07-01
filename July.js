/* ['21.6.30] leetCode 933 */
var maximumUnits = function (boxTypes, truckSize) {
  let totalUnits = 0,
    sorted = boxTypes.sort((a, b) => b[1] - a[1]),
    boxesLeft = truckSize;
  sorted.forEach((val) => {
    if (val[0] < boxesLeft) {
      totalUnits += val[0] * val[1];
      boxesLeft -= val[0];
    } else if (val[0] >= boxesLeft && boxesLeft >= 0) {
      totalUnits += boxesLeft * val[1];
      boxesLeft -= val[0];
    }
  });
  return totalUnits;
};
