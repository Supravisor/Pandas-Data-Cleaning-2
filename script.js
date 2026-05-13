
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

// Replace values
let oldValue = document.getElementById("oldValue");
let newValue = document.getElementById("newValue");

const replace = (arg) => {
  if (variableUnique.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Find unique values' section.");
  } else if (columnUnique.value === "") {
    return alert("Please enter a column name in the 'column' field, in the 'Find unique values' section.");
  } else if (oldValue.value === "") {
    return alert("Please enter the old value in the 'old value' field, in the 'Replace values' section.");
  } else if (newValue.value === "") {
    return alert("Please enter the new value in the 'new value' field, in the 'Replace values' section.");
  } else {
      document.editor.textbox.value+="\n" + variableUnique.value + "['" + columnUnique.value + "']." + arg + "('" + oldValue.value + "', '" + newValue.value + 	"')";
  }
}

const replaceDictionary = () => {
  document.editor.textbox.value+="\ndf" + "['Gender'].replace({'D': 'F', 'N': 'M'})";
}

const replaceDataFrame = () => {
  document.editor.textbox.value+="\ndf.replace({\n    'Sex': {\n        'D': 'F',\n        'N': 'M'\n    },\n    'Age': {\n        290: 29\n    }\n})";
}


const ageLimit = () => {
  if (variableUnique.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Find unique values' section.");
  } else if (columnUnique.value === "") {
    return alert("Please enter a column name in the 'column' field, in the 'Find unique values' section.");
  } else if (oldValue.value === "") {
    return alert("Please enter the max limit in the 'old value' field, in the 'Replace values' section.");
  } else if (newValue.value === "") {
    return alert("Please enter the divisor in the 'new value' field, in the 'Replace values' section.");
  } else {
      document.editor.textbox.value+="\n" + variableUnique.value + ".loc[" + variableUnique.value + "['" + columnUnique.value + "'] > " + oldValue.value + ", '" + columnUnique.value + "'] = " + variableUnique.value + ".loc[" + variableUnique.value + "['" + columnUnique.value + "'] > " + oldValue.value + ", '" + columnUnique.value + "'] / " + newValue.value;
  }
}

//  Series duplicates
let duplicateKeepSeries = document.editor.duplicateKeepSeries;

const duplicateSeries = (arg) => {
  if (variableUnique.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Find unique values' section.");
  } else {
      let keep = "";
      if (duplicateKeepSeries.value) {
        keep = "keep=" + duplicateKeepSeries.value;
      }

      document.editor.textbox.value+="\n" + variableUnique.value + "." + arg + "(" + keep + ")";
  }
}

// DataFrame duplicates
let duplicateSubset = document.getElementById("duplicateSubset");
let duplicateKeepDataFrame = document.editor.duplicateKeepDataFrame;

const duplicateDataFrame = (arg) => {
  if (variableUnique.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Find unique values' section.");
  }  else {
      if (duplicateKeepDataFrame.value) {
        if (duplicateSubset.value === "") {
          return alert("Please enter a subset name in the 'subset' field, in the 'DataFrame duplicates' section.");
        }

        let keep = "subset=['" + duplicateSubset.value + "'], ";
        if (duplicateKeepDataFrame.value) {
          keep += "keep=" + duplicateKeepDataFrame.value;
        }

        document.editor.textbox.value+="\n" + variableUnique.value + "." + arg + "(" + keep + ")";

      } else if (duplicateSubset.value) {

          let keep = "subset=['" + duplicateSubset.value + "']";

          document.editor.textbox.value+="\n" + variableUnique.value + "." + arg + "(" + keep + ")";

      } else {
          document.editor.textbox.value+="\n" + variableUnique.value + "." + arg + "()";
      }
  }
}

// Split columns
let splitColumn = document.getElementById("splitColumn");
let splitExpand = document.editor.splitExpand;

const split = (arg) => {
  if (variableUnique.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Find unique values' section.");
  } else if (splitColumn.value === "") {
    return alert("Please enter a column name in the 'column' field, in the 'Split columns' section.");
  } else {
      let expand = "";
        if (splitExpand.value) {
          expand = ", expand=" + splitExpand.value;
        }

      document.editor.textbox.value+="\n" + variableUnique.value + "['" + splitColumn.value + "'].str." + arg + "('_'" + expand + ")";
  }
}
