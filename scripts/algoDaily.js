// DAY 0 - REVERSING A STRING

function reverseStr(str) {
  const strArr = str.split('');
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    let temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    start++;
    end--;
  }

  return strArr.join('');
}

console.log(reverseStr(`thinkin bout you`));

// DAY 1 - FINDING INTERSECTION OF TWO ARRAYS

function intersection(nums1, nums2) {
  const set = new Set(nums1);
  const filteredSet = new Set(nums2.filter((n) => set.has(n)));
  return [... filteredSet];
}

console.log(intersection(['1', '2'], ['2', '3']));

