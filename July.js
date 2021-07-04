/* ['21.7.1] leetCode 1710 */
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

/* ['21.7.2] leetCode 1460 */
var canBeEqual = function (target, arr) {
  return (
    target.sort((a, b) => a - b).join("") === arr.sort((a, b) => a - b).join("")
  );
};

/* ['21.7.3] leetCode 811 */
var subdomainVisits = function (cpdomains) {
  var oDomain = {};
  var iNumber = 0;
  var aResult = [];

  for (var i = 0; i < cpdomains.length; i++) {
    aDomainWithNumber = cpdomains[i].split(" ");
    iNumber = aDomainWithNumber[0];
    sEachDomain = aDomainWithNumber[1];
    aEachDomain = sEachDomain.split(".");

    var iEachDomainLength = aEachDomain.length;

    var sNewDomain = "";

    for (var j = iEachDomainLength - 1; j >= 0; j--) {
      var sWord = aEachDomain[j];

      if (j != iEachDomainLength - 1) {
        sNewDomain = "".concat(sWord, ".", sNewDomain);
      } else {
        sNewDomain = sWord;
      }

      if (!oDomain[sNewDomain]) {
        oDomain[sNewDomain] = parseInt(iNumber, 10);
      } else {
        iTotal = parseInt(iNumber, 10) + parseInt(oDomain[sNewDomain], 10);
        oDomain[sNewDomain] = iTotal;
      }
    }
  }
  aResult = Object.keys(oDomain).map((sDomain) => {
    return oDomain[sDomain] + " " + sDomain;
  });
  return aResult;
};

/* ['21.7.4] leetCode 1207 */
var uniqueOccurrences = function (arr) {
  var obj = {},
    obj1 = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  for (var key in obj) {
    if (obj1[obj[key]]) {
      return false;
    } else {
      obj1[obj[key]] = true;
    }
  }
  return true;
};
