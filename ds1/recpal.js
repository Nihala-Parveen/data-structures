function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
    const len = str.length;
  
    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
  
  console.log(isPalindrome("helloh"));