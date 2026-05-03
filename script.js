
// Find unique values
let variableUnique = document.getElementById("variableUnique");
let columnUnique = document.getElementById("columnUnique");

const unique = (arg) => {
  if (variableUnique.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Find unique values' section.");
  } else if (columnUnique.value === "") {
    return alert("Please enter a column name in the 'column' field, in the 'Find unique values' section.");
  } else {
      document.editor.textbox.value+="\n" + variableUnique.value + "['" + columnUnique.value + "']." + arg;
  }
}
