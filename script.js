function booleanToString(b){
    if (b) {
      return "true";
    } else {
    return "false";
    }
}
booleanToString(true);

function booleanToString(b){
    if (b === true) return 'true';
    if (b === false) return 'false';
    
    throw new Error("Parameter 'b' should be a boolean");
  }