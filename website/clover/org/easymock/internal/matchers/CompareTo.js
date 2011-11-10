var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":2714,"methods":[{"el":36,"sc":5,"sl":34},{"el":46,"sc":5,"sl":38},{"el":50,"sc":5,"sl":48}],"name":"CompareTo","sl":28}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1026":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1076":{"methods":[{"sl":34},{"sl":38}],"name":"testNotComparable","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":42}]},"test_1093":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1179":{"methods":[{"sl":34},{"sl":38}],"name":"lessThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1201":{"methods":[{"sl":34},{"sl":38}],"name":"lessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1262":{"methods":[{"sl":34}],"name":"additionalMatchersFailAtReplay","pass":true,"statements":[{"sl":35}]},"test_1281":{"methods":[{"sl":34}],"name":"additionalMatchersFailAtReplay","pass":true,"statements":[{"sl":35}]},"test_1292":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1352":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"constraints","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1405":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testCompareEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1437":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testCompareEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1460":{"methods":[{"sl":34},{"sl":38}],"name":"testCompare","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1466":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"constraints","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1553":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1597":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1640":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1696":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1711":{"methods":[{"sl":34},{"sl":38}],"name":"testNotComparable","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":42}]},"test_1739":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1753":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testCompareEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_1803":{"methods":[{"sl":34}],"name":"additionalMatchersFailAtReplay","pass":true,"statements":[{"sl":35}]},"test_1824":{"methods":[{"sl":34},{"sl":38}],"name":"testCompare","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_185":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1853":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1892":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1918":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_194":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_1981":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2016":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2024":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2028":{"methods":[{"sl":34},{"sl":38}],"name":"testNotComparable","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":42}]},"test_2036":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_204":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2058":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testCompareEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2090":{"methods":[{"sl":34},{"sl":38}],"name":"testCompare","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2115":{"methods":[{"sl":34},{"sl":38}],"name":"cmpTo","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2156":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2192":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2196":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2197":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_22":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2323":{"methods":[{"sl":34},{"sl":38}],"name":"lessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2325":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2339":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"constraints","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2346":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2378":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2407":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2459":{"methods":[{"sl":34},{"sl":38}],"name":"testCompare","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2476":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2487":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2513":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2644":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2663":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2685":{"methods":[{"sl":34},{"sl":38}],"name":"lessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2756":{"methods":[{"sl":34},{"sl":38}],"name":"testNotComparable","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":42}]},"test_2787":{"methods":[{"sl":34},{"sl":38}],"name":"lessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_2790":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_2878":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_297":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testCompareEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_322":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_359":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_36":{"methods":[{"sl":34},{"sl":38}],"name":"testCompare","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_366":{"methods":[{"sl":34},{"sl":38}],"name":"lessThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_4":{"methods":[{"sl":34},{"sl":38}],"name":"cmpTo","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_432":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_513":{"methods":[{"sl":34},{"sl":38}],"name":"testNotComparable","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":42}]},"test_518":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_531":{"methods":[{"sl":34},{"sl":38}],"name":"lessThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_562":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"constraints","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_577":{"methods":[{"sl":34},{"sl":38}],"name":"lessThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_591":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_595":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_616":{"methods":[{"sl":34}],"name":"additionalMatchersFailAtReplay","pass":true,"statements":[{"sl":35}]},"test_625":{"methods":[{"sl":34},{"sl":38}],"name":"greaterOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_663":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqualOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_678":{"methods":[{"sl":34}],"name":"additionalMatchersFailAtReplay","pass":true,"statements":[{"sl":35}]},"test_704":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_72":{"methods":[{"sl":34},{"sl":38}],"name":"lessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_733":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_736":{"methods":[{"sl":34},{"sl":38}],"name":"greaterThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_794":{"methods":[{"sl":34},{"sl":38}],"name":"cmpTo","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_80":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"constraints","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_820":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_86":{"methods":[{"sl":34},{"sl":38}],"name":"lessOrEqual","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_913":{"methods":[{"sl":34},{"sl":38}],"name":"cmpTo","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_927":{"methods":[{"sl":34},{"sl":38}],"name":"lessThanOverloaded","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_929":{"methods":[{"sl":34},{"sl":38}],"name":"testCompare","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_944":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_956":{"methods":[{"sl":34},{"sl":38}],"name":"cmpTo","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45}]},"test_959":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testGreateThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]},"test_973":{"methods":[{"sl":34},{"sl":38},{"sl":48}],"name":"testLessThan","pass":true,"statements":[{"sl":35},{"sl":41},{"sl":45},{"sl":49}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [2197, 518, 72, 2787, 663, 2325, 531, 616, 22, 86, 2058, 2756, 2016, 1281, 2378, 1711, 1696, 2036, 973, 1824, 2513, 194, 2024, 2878, 2196, 956, 794, 1466, 929, 595, 1352, 1739, 322, 1918, 80, 591, 513, 820, 2685, 1076, 366, 2346, 2090, 1597, 1405, 359, 2028, 2156, 1753, 2407, 1179, 2476, 2339, 4, 185, 1460, 1262, 577, 1437, 625, 1553, 1292, 1201, 2115, 562, 1981, 1093, 2323, 927, 944, 1853, 1640, 1026, 204, 959, 2790, 733, 2459, 2192, 1803, 1892, 36, 736, 432, 2663, 2487, 678, 2644, 913, 297, 704], [2197, 518, 72, 2787, 663, 2325, 531, 616, 22, 86, 2058, 2756, 2016, 1281, 2378, 1711, 1696, 2036, 973, 1824, 2513, 194, 2024, 2878, 2196, 956, 794, 1466, 929, 595, 1352, 1739, 322, 1918, 80, 591, 513, 820, 2685, 1076, 366, 2346, 2090, 1597, 1405, 359, 2028, 2156, 1753, 2407, 1179, 2476, 2339, 4, 185, 1460, 1262, 577, 1437, 625, 1553, 1292, 1201, 2115, 562, 1981, 1093, 2323, 927, 944, 1853, 1640, 1026, 204, 959, 2790, 733, 2459, 2192, 1803, 1892, 36, 736, 432, 2663, 2487, 678, 2644, 913, 297, 704], [], [], [2197, 518, 72, 2787, 663, 2325, 531, 22, 86, 2058, 2756, 2016, 2378, 1711, 1696, 2036, 973, 1824, 2513, 194, 2024, 2878, 2196, 956, 794, 1466, 929, 595, 1352, 1739, 322, 1918, 80, 591, 513, 820, 2685, 1076, 366, 2346, 2090, 1597, 1405, 359, 2028, 2156, 1753, 2407, 1179, 2476, 2339, 4, 185, 1460, 577, 1437, 625, 1553, 1292, 1201, 2115, 562, 1981, 1093, 2323, 927, 944, 1853, 1640, 1026, 204, 959, 2790, 733, 2459, 2192, 1892, 36, 736, 432, 2663, 2487, 2644, 913, 297, 704], [], [], [2197, 518, 72, 2787, 663, 2325, 531, 22, 86, 2058, 2756, 2016, 2378, 1711, 1696, 2036, 973, 1824, 2513, 194, 2024, 2878, 2196, 956, 794, 1466, 929, 595, 1352, 1739, 322, 1918, 80, 591, 513, 820, 2685, 1076, 366, 2346, 2090, 1597, 1405, 359, 2028, 2156, 1753, 2407, 1179, 2476, 2339, 4, 185, 1460, 577, 1437, 625, 1553, 1292, 1201, 2115, 562, 1981, 1093, 2323, 927, 944, 1853, 1640, 1026, 204, 959, 2790, 733, 2459, 2192, 1892, 36, 736, 432, 2663, 2487, 2644, 913, 297, 704], [2756, 1711, 513, 1076, 2028], [], [], [2197, 518, 72, 2787, 663, 2325, 531, 22, 86, 2058, 2016, 2378, 1696, 2036, 973, 1824, 2513, 194, 2024, 2878, 2196, 956, 794, 1466, 929, 595, 1352, 1739, 322, 1918, 80, 591, 820, 2685, 366, 2346, 2090, 1597, 1405, 359, 2156, 1753, 2407, 1179, 2476, 2339, 4, 185, 1460, 577, 1437, 625, 1553, 1292, 1201, 2115, 562, 1981, 1093, 2323, 927, 944, 1853, 1640, 1026, 204, 959, 2790, 733, 2459, 2192, 1892, 36, 736, 432, 2663, 2487, 2644, 913, 297, 704], [], [], [2058, 2016, 1696, 973, 2513, 1466, 1352, 1739, 80, 820, 2346, 1597, 1405, 359, 2156, 1753, 2339, 1437, 1292, 562, 1981, 944, 1026, 959, 2790, 2192, 432, 2663, 2487, 297], [2058, 2016, 1696, 973, 2513, 1466, 1352, 1739, 80, 820, 2346, 1597, 1405, 359, 2156, 1753, 2339, 1437, 1292, 562, 1981, 944, 1026, 959, 2790, 2192, 432, 2663, 2487, 297], [], [], [], [], [], []]
