/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  if (str.includes('xxx') == true || str.includes('1XbeT') == true) {
    return true;
  } else {
    return false;
  }
}

checkSpam('dfsadfasd xxx');
