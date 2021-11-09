
var dataSet = [];
var frequencyTable = [];

function save() {

  var text = document.getElementById("input");
  var opt = document.createElement("option");
  
  opt.value = text.value;
  opt.text = text.value;

  document.getElementById("list").options.add(opt);

  dataSet.push(text.value);

}

function getFrequencies() {

  for(var i = 0; i < dataSet.length; i++) {

    if(frequencyTable[dataSet[i]]) {

      frequencyTable[dataSet[i]].count = frequencyTable[dataSet[i]].count + 1;

    } else {

      frequencyTable.push({value: dataSet[i], count: 1});

    }

  }

  console.log(frequencyTable);

}

function mode() {

  getFrequencies();

}

function median() {

  

}

function mean() {

  

}