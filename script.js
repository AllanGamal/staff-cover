let colors = ["#264653", "#008D8D", "#607D8B", "#D06045"];
let nonColors = [];
let teams = [];
let stations = [];
let unavailableSt = [];
let names = [];

function addTeam(divId) {
  let newTeam = {
    teamName: divId,
    fitters: [],
    stations: [],
  };

  teams.push(newTeam);

  // Color team card
  // Add random color to team car
  let n = Math.floor(Math.random() * (4 - nonColors.length));
  document.getElementById(divId).style.backgroundColor = colors[n];
  let test = divId.toString();

  // Add remove-btn
  addElement("button", divId, "btn remove-team", divId + "-remove-team");
  document.getElementById(divId + "-remove-team").innerHTML = "X";

  // Add team name title
  addElement("div", divId, "team__title", divId + "title-box");
  addElement("h1", divId + "title-box", "teamtitle", divId + "-title");
  document.getElementById(divId + "-title").innerHTML =
    divId[0].toUpperCase() + divId.slice(1);

  ///// Add fitters header
  addElement("div", divId, "team__fitter-header", divId + "-fitters-header");

  // Add fitters title box
  addElement(
    "div",
    divId + "-fitters-header",
    "team__fitter-header--title",
    divId + "-fitters-title-box"
  );

  // Add fitters title
  addElement(
    "h3",
    divId + "-fitters-title-box",
    "fitters-title",
    divId + "-fitters-title"
  );
  document.getElementById(divId + "-fitters-title").innerHTML = "Fitters";

  // Add fitters add-button
  addElement(
    "button",
    divId + "-fitters-header",
    "btn add-fitter",
    divId + "-btn-add-fitters"
  );
  document.getElementById(divId + "-btn-add-fitters").innerHTML = "Add";

  //// Add stations header
  addElement("div", divId, "team__station-header", divId + "-stations-header");

  // Add stations title box
  addElement(
    "div",
    divId + "-stations-header",
    "team__station-header--title",
    divId + "-stations-title-box"
  );

  // Add stations title
  addElement(
    "h3",
    divId + "-stations-title-box",
    "stations-title",
    divId + "-stations-title"
  );
  document.getElementById(divId + "-stations-title").innerHTML = "Stations";

  // Add stations add-button
  addElement(
    "button",
    divId + "-stations-header",
    "btn add-station",
    divId + "-btn-add-stations"
  );
  document.getElementById(divId + "-btn-add-stations").innerHTML = "Add";

  ///// Add fitters box
  addElement("div", divId, "team__fitters", divId + "-fitters");

  ///// Add stations box
  addElement("div", divId, "team__stations", divId + "-stations");
}

// Add element function
function addElement(box, parent, Class, id) {
  let newDiv = document.createElement(box);
  newDiv.classList = Class;
  document.getElementById(parent).appendChild(newDiv);
  newDiv.id = id;

  // if div class == team, give team name and add to teams list
  if (Class == "team") {
    addTeam(id);
  }
}

/////// Click button to add team
document.getElementById("add-team").addEventListener("click", function () {
  let teamName = prompt("Team name");
  let temp = true;

  if (teamName) {
    if (teams.length == 0) {
      addElement("div", "section", "team", teamName);
    } else {
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].teamName.toUpperCase() == teamName.toUpperCase()) {
          temp = false;
          break;
        }
      }
      for (let i = 0; i < stations.length; i++) {
        if (stations[i].toUpperCase() == teamName.toUpperCase()) {
          temp = false;
          break;
        }
      }
      for (let i = 0; i < names.length; i++) {
        if (names[i].toUpperCase() == teamName.toUpperCase()) {
          temp = false;
          break;
        }
      }
      if (temp == true) {
        addElement("div", "section", "team", teamName);
      } else {
        alert("Name already taken, try another one.");
      }
    }
  }
});

function addStation(e) {
  let temp = true;
  let teamId = e.target.parentNode.parentNode.id;
  let station = prompt("Station name");
  if (station) {
    for (let i = 0; i < stations.length; i++) {
      if (stations[i].toUpperCase() == station.toUpperCase()) {
        temp = false;
        break;
      }
    }
    for (let i = 0; i < names.length; i++) {
      if (names[i].toUpperCase() == station.toUpperCase()) {
        temp = false;
        break;
      }
    }
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].teamName.toUpperCase() == station.toUpperCase()) {
        temp = false;
        break;
      }
    }

    if (!temp) {
      alert("Station name already taken, try another one.");
    } else {
      // Add station box element
      addElement(
        "div",
        teamId + "-stations",
        "team__stations--station",
        station
      );
      // Add remove-button
      addElement(
        "button",
        station,
        "btn remove-station",
        teamId + "-" + station + "-remove-station-button"
      );
      document.getElementById(
        teamId + "-" + station + "-remove-station-button"
      ).innerHTML = "X";

      // Add station text
      addElement("h2", station, "station-text", station + "-header");
      document.getElementById(station + "-header").innerHTML =
        station[0].toUpperCase() + station.slice(1);

      // Add station-checkbox
      addElement("input", station, "checkbox", station + "-checkbox");
      document.getElementById(station + "-checkbox").type = "checkbox";

      stations.push(station);
    }
  }
}

// Click add station button to add station
document.addEventListener("click", function (e) {
  // click to add station
  if (e.target.className.includes("add-station")) {
    addStation(e);
  }
});

// Add fitter function
function addFitter(e) {
  let temp = true;
  let teamId = e.target.parentNode.parentNode.id;
  let name = prompt("Enter the name of the fitter");

  if (name) {
    for (let i = 0; i < stations.length; i++) {
      if (stations[i].toUpperCase() == name.toUpperCase()) {
        temp = false;
        break;
      }
    }
    for (let i = 0; i < names.length; i++) {
      if (names[i].toUpperCase() == name.toUpperCase()) {
        temp = false;
        break;
      }
    }
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].teamName.toUpperCase() == name.toUpperCase()) {
        temp = false;
        break;
      }
    }
    if (!temp) {
      alert("Name already taken, try another one.");
    } else {
      // Add fitter-box
      addElement(
        "div",
        teamId + "-fitters",
        "team__fitters--fitter",
        name + "-fitter"
      );

      // Add remove-fitter-btn
      addElement(
        "button",
        name + "-fitter",
        "btn remove-fitter",
        teamId + "-" + name + "-remove-fitter-button"
      );
      document.getElementById(
        teamId + "-" + name + "-remove-fitter-button"
      ).innerHTML = "X";

      // Add name-box
      addElement("div", name + "-fitter", "name", name);

      // Add h3-name
      addElement("h3", name, "name-field", name + "-field");
      document.getElementById(name + "-field").innerHTML =
        name[0].toUpperCase() + name.slice(1);

      // Add optionbox
      addElement("div", name, "options", name + "-options");

      // Add checkbox
      addElement("input", name + "-options", "checkbox", name + "-checkbox");
      document.getElementById(name + "-checkbox").type = "checkbox";

      // Add button to add competency
      addElement(
        "button",
        name + "-options",
        "btn add-competency",
        name + "-add-competency"
      );
      document.getElementById(name + "-add-competency").innerHTML = "Add";

      // Add competency dib box
      addElement(
        "div",
        name + "-fitter",
        "team__fitters--fitter--competency",
        name + "-competency"
      );

      names.push(name);
      // Push name with competence in team object
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].teamName.toUpperCase() == teamId.toUpperCase()) {
          let tempTeam = teams[i];
          let tempFitter = {
            fitterName: name,
            competency: [],
            present: true,
            placed: false,
          };
          tempTeam.fitters.push(tempFitter);
        }
      }
    }
  }
}

// Click add fitters to add fitters
document.addEventListener("click", function (e) {
  if (e.target.className.includes("add-fitter")) {
    addFitter(e);
  }
});

////////////////////// FOR LATER /////////////////////////////////
// Click to add competency
document.addEventListener("click", (e) => {
  let nameId = e.target.parentNode.parentNode.id;

  if (e.target.className.includes("add-competency")) {
    ///////// Clear div
    document.querySelector(".pop-up__competency").innerHTML = "";
    document.getElementById("pop-up-stations").innerHTML = "";
    // Add blur to backround
    document.getElementById("section").classList.add("blur");
    document.getElementById("add-team").classList.add("blur");
    document.getElementById("calc").classList.add("blur");

    // Make pop up visible
    document.querySelector(".pop-up").style.display = "flex";

    //// Add pop-up name
    document.querySelector(".pop-up__name").innerHTML = nameId;

    for (station of stations) {
      for (let i = 0; i < teams.length; i++) {
        for (let j = 0; j < teams[i].fitters.length; j++) {
          let temp = true;
          if (
            nameId.toUpperCase() == teams[i].fitters[j].fitterName.toUpperCase()
          ) {
            for (let y = 0; y < teams[i].fitters[j].competency.length; y++) {
              if (
                teams[i].fitters[j].competency[y].toUpperCase() ==
                station.toUpperCase()
              ) {
                temp = false;
                break;
              }
            }
            if (temp) {
              // Add stations to select
              addElement(
                "div",
                "pop-up-stations",
                "pop-up__stations--station",
                "temp-" + station
              );

              // Add h3
              addElement(
                "h3",
                "temp-" + station,
                "station-to-store",
                "temp-" + station + "-h3"
              );
              document.getElementById(
                "temp-" + station + "-h3"
              ).innerHTML = station;

              // Add checkbox
              addElement(
                "input",
                "temp-" + station,
                "checkbox",
                "temp-" + station + "-checkbox"
              );
              document.getElementById("temp-" + station + "-checkbox").type =
                "checkbox";
            } else {
              addElement("div", "pop-up-competency", "box", station + "-box");
              document.getElementById(
                station + "-box"
              ).innerHTML = station.toUpperCase();
            }
          }
        }
      }
    }

    //// Add current-compentency
  }
});

// Functionallity to the add-competency button
document
  .getElementById("store-competency")
  .addEventListener("click", function () {
    let name = document.querySelector(".pop-up__name").innerHTML;
    let stations = document.querySelectorAll(".station-to-store");

    //// Search through all names in teams
    // Search though the teams
    for (let i = 0; i < teams.length; i++) {
      // Search through the names
      for (let j = 0; j < teams[i].fitters.length; j++) {
        if (
          name.toUpperCase() == teams[i].fitters[j].fitterName.toUpperCase()
        ) {
          // Add competency to fitter
          for (station of stations) {
            if (station.nextSibling.checked) {
              teams[i].fitters[j].competency.push(station.innerHTML);

              // Add competency box to name
              addElement(
                "div",
                name + "-competency",
                "box",
                name + "-" + station.innerHTML
              );
              addElement(
                "h4",
                name + "-" + station.innerHTML,
                "h4-station",
                "h4-" + name + "-" + station.innerHTML
              );
              document.getElementById(
                "h4-" + name + "-" + station.innerHTML
              ).innerHTML =
                station.innerHTML[0].toUpperCase() + station.innerHTML.slice(1);

              // add competancy x
              addElement(
                "button",
                name + "-" + station.innerHTML,
                "btn remove-competency",
                name + "-" + station.innerHTML + "-remove"
              );

              document.getElementById(
                name + "-" + station.innerHTML + "-remove"
              ).innerHTML = "X";
            }
          }
        }
      }
    }

    // Make pop up visible
    document.querySelector(".pop-up").style.display = "none";
    document.getElementById("section").classList.remove("blur");
    document.getElementById("add-team").classList.remove("blur");
    document.getElementById("calc").classList.remove("blur");
  });

// Remove station button functionality
document.addEventListener("click", function (e) {
  if (e.target.className.includes("remove-station")) {
    let station = e.target.parentNode.id;
    if (unavailableSt.includes(station)) {
      unavailableSt.splice(unavailableSt.indexOf(station), 1);
    }
    for (let i = 0; i < stations.length; i++) {
      if (stations[i].toUpperCase() == station.toUpperCase()) {
        stations.splice(i, 1);
      }
    }
    document.getElementById(station).remove();
  }
});

// Remove fitters competency functionality
document.addEventListener("click", function (e) {
  if (e.target.className.includes("remove-competency")) {
    let sibling = document.getElementById(e.target.id).previousSibling;
    let name = e.target.parentNode.parentNode.previousSibling.id;

    // Remove fitter competency from arr
    for (let i = 0; i < teams.length; i++) {
      for (let j = 0; j < teams[i].fitters.length; j++) {
        if (
          teams[i].fitters[j].fitterName.toUpperCase() == name.toUpperCase()
        ) {
          for (let y = 0; y < teams[i].fitters[j].competency.length; y++) {
            if (
              teams[i].fitters[j].competency[y].toUpperCase() ==
              sibling.innerHTML.toUpperCase()
            ) {
              document
                .getElementById(name + "-" + teams[i].fitters[j].competency[y])
                .remove();
              teams[i].fitters[j].competency.splice(y, 1);
            }
          }
        }
      }
    }
  }
});

// Remove fitters functionality
document.addEventListener("click", function (e) {
  if (e.target.className.includes("remove-fitter")) {
    let name = e.target.nextSibling.id;
    for (let i = 0; i < teams.length; i++) {
      for (let j = 0; j < teams[i].fitters.length; j++) {
        if (
          teams[i].fitters[j].fitterName.toUpperCase() == name.toUpperCase()
        ) {
          teams[i].fitters.splice(j, 1);
        }
      }
    }
    document.getElementById(name + "-fitter").remove();
    for (let i = 0; i < names.length; i++) {
      if (name.toUpperCase() == names[i].toUpperCase()) {
        names.splice(i, 1);
      }
    }
  }
});

// Remove team functionality
document.addEventListener("click", function (e) {
  if (e.target.className.includes("remove-team")) {
    let teamName = e.target.parentNode.id;
    let balances = document.getElementById(teamName + "-stations").childNodes;
    let fitters = document.querySelectorAll(".name");

    for (let i = 0; i < teams.length; i++) {
      if (teamName.toUpperCase() == teams[i].teamName.toUpperCase()) {
        // remove station from stationsArr
        for (let j = 0; j < stations.length; j++) {
          for (balance of balances) {
            if (balance.id.toUpperCase() == stations[j].toUpperCase()) {
              stations.splice(j, 1);
            }
          }
        }
        // remove name from namesArr
        for (let j = 0; j < names.length; j++) {
          for (fitter of fitters) {
            if (fitter.id.toUpperCase() == names[j].toUpperCase()) {
              names.splice(j, 1);
            }
          }
        }
      }
      teams.splice(i, 1);
    }
    document.getElementById(teamName).remove();
  }
});

// Close pop-up-window
document.getElementById("remove-pop").addEventListener("click", function (e) {
  document.querySelector(".pop-up").style.display = "none";
  document.getElementById("section").classList.remove("blur");
  document.getElementById("add-team").classList.remove("blur");
  document.getElementById("calc").classList.remove("blur");
});

// Make stations unavailable
document.addEventListener("click", function (e) {
  if (e.target.type == "checkbox") {
    if (e.target.parentNode.className.includes("team__stations--station")) {
      let station = e.target.parentNode.id;

      if (document.getElementById(e.target.id).checked) {
        if (!unavailableSt.includes(station)) {
          unavailableSt.push(station);
          document.getElementById(station).classList.add("checked");
        }
      } else {
        unavailableSt.splice(unavailableSt.indexOf(station), 1);
        document.getElementById(station).classList.remove("checked");
      }
      console.log(unavailableSt);
    }
  }
});

// Make fitters unavailable
document.addEventListener("click", function (e) {
  if (e.target.type == "checkbox") {
    if (e.target.parentNode.className.includes("options")) {
      let name = e.target.parentNode.parentNode.id;

      if (document.getElementById(e.target.id).checked) {
        document.getElementById(name + "-fitter").classList.add("checked");
        for (let i = 0; i < teams.length; i++) {
          for (let j = 0; j < teams[i].fitters.length; j++) {
            if (
              teams[i].fitters[j].fitterName.toUpperCase() == name.toUpperCase()
            ) {
              teams[i].fitters[j].present = false;
            }
          }
        }
      } else {
        document.getElementById(name + "-fitter").classList.remove("checked");
        for (let i = 0; i < teams.length; i++) {
          for (let j = 0; j < teams[i].fitters.length; j++) {
            if (
              teams[i].fitters[j].fitterName.toUpperCase() == name.toUpperCase()
            ) {
              teams[i].fitters[j].present = true;
            }
          }
        }
      }
    }
  }
});

// Calc possibilities
document.getElementById("calc").addEventListener("click", function (e) {
  let tempNames = [];
  let tempStations = [];
  let results = [];
  let test = [];

  for (let i = 0; i < teams.length; i++) {
    for (let x = 0; x < teams[i].fitters.length; x++) {
      tempNames.push(teams[i].fitters[x]);
    }
  }

  for (station of stations) {
    tempStations.push(station);
    test.push({ station: station, names: [] });
  }

  for (let i = 0; i < tempNames.length; i++) {
    for (let j = 0; j < test.length; j++) {
      if (tempNames[i].competency.includes(test[j].station)) {
        test[j].names.push(tempNames[i].fitterName);
      }
    }
  }

  let mest = [];
  for (let i = 0; i < test.length; i++) {
    mest.push(test[i].names);
  }

  // Put all names under their competency station

  console.log(tempStations);
  console.log(tempNames);
  console.log(results);
  console.log(mest);

  function allPossibleCases(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      var result = [];
      var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
      for (var i = 0; i < allCasesOfRest.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          result.push(arr[0][j] + " " + allCasesOfRest[i]);
        }
      }
      return result;
    }
  }
  console.log(allPossibleCases(mest));
});

/*
// Calc possibilities
document.getElementById("calc").addEventListener("click", function (e) {
  let mames = [];

  for (let i = 0; i < teams.length; i++) {
    for (let x = 0; x < teams[i].fitters.length; x++) {
      mames.push(teams[i].fitters[x]);
    }
  }

  let combos = [];
  for (let x = 0; x < mames.length; x++) {
    let combo = [];
    let temp = [];
    for (station of stations) {
      temp.push(station);
    }

    for (let y = 0; y < mames.length; y++) {
      mames[y].placed = false;
    }
    // Loop through mames
    for (let i = 0; i < mames.length; i++) {
      if (temp.length > 0) {
        if (mames[i].present == true) {
          if (mames[i].placed == false) {
            // Loop throgh the balances of the individuals

            for (let j = 0; j < mames[i].competency.length; j++) {
              let current = mames[i].competency[j];
              let index = temp.indexOf(mames[i].competency[j]);

              if (temp.includes(current)) {
                console.log(current);
                // Occupy balance
                temp.splice(index, 1);
                combo.push(mames[i].fitterName + " " + current);
                console.log(mames[i].fitterName + " " + current);
                mames[i].placed = true;
                break;
              }
            }
          }
        }
      }
      console.log(temp);
      if (!combos.includes(combo)) {
        console.log(combo);
        if (combo.length == stations.length) {
          combos.push(combo);
        }
      }
    }

    mames.push(mames.splice(0, 1)[0]);
  }
  console.log(combos);
  if (combos.length > 0) {
    console.log("Possible");
    console.log(combos);
  } else {
    console.log(combos);
    console.log("not possible");
  }
});

var array = ["apple", "banana", "lemon", "mango"];
var results = [];

// Since you only want pairs, there's no reason
// to iterate over the last element directly
for (var i = 0; i < array.length - 1; i++) {
  // This is where you'll capture that last value
  for (var j = i + 1; j < array.length; j++) {
    results.push(array[i] + " " + array[j]);
  }
}

console.log(results);

/*
let mames = [
  {
    name: "Adam",
    balances: ["a", "b", "c"],
    present: true,
    placed: false,
  },
  {
    name: "Bertil",
    balances: ["a", "b"],
    present: true,
    placed: false,
  },
  {
    name: "Carl",
    balances: ["b"],
    present: true,
    placed: false,
  },
  {
    name: "Daniel",
    balances: ["a"],
    present: true,
    placed: false,
  },
  {
    name: "Erik",
    balances: ["b"],
    present: true,
    placed: false,
  },
];

let balances = ["a", "b", "c"];
let combos = [];
for (let x = 0; x < mames.length; x++) {
  let combo = [];
  let temp = ["a", "b", "c"];
  for (let y = 0; y < mames.length; y++) {
    mames[y].placed = false;
  }
  // Loop through mames
  for (let i = 0; i < mames.length; i++) {
    if (temp.length > 0) {
      console.log(temp);
      if (mames[i].present == true) {
        if (mames[i].placed == false) {
          // Loop throgh the balances of the individuals

          for (let j = 0; j < mames[i].balances.length; j++) {
            let current = mames[i].balances[j];
            let index = temp.indexOf(mames[i].balances[j]);

            if (temp.includes(current)) {
              // Occupy balance
              temp.splice(index, 1);
              combo.push(mames[i].name + " " + current);
              console.log(mames[i].name + " " + current);
              mames[i].placed = true;
              break;
            }
          }
        }
      }
    }
    if (!combos.includes(combo)) {
      if (combo.length == 3) {
        combos.push(combo);
      }
    }
  }

  console.log(mames);
  mames.push(mames.splice(0, 1)[0]);
  console.log(mames);
}
console.log(combos);
if (combos.length > 0) {
  console.log("Possible");
} else {
  console.log("not possible");
}
*/
