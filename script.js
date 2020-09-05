////////////////////////////////// DAY 8
let colors = ["#264653", "#008D8D", "#607D8B", "#D06045"];
let nonColors = [];
let teams = [];
let stations = [];
let names = [];

function addTeam(divId) {
  let newTeam = { teamId: divId, fitters: [], stations: [] };
  teams.push(newTeam);

  // Color team card
  // Add random color to team car
  let n = Math.floor(Math.random() * (4 - nonColors.length));
  document.getElementById(divId).style.backgroundColor = colors[n];
  let test = divId.toString();

  // Add team name title
  addElement("div", divId, "team__title", divId + "title-box");
  addElement("h1", divId + "title-box", "teamtitle", divId + "-title");
  document.getElementById(divId + "-title").innerHTML = divId;

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
        if (teamName == teams[i].teamId) {
          temp = false;
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
  let teamId = e.target.parentNode.parentNode.id;
  let station = prompt("Station name");
  if (station) {
    if (stations.includes(station)) {
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
  let teamId = e.target.parentNode.parentNode.id;
  let name = prompt("Enter the name of the fitter");

  if (name) {
    if (names.includes(name)) {
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

      names.push(name);
    }
  }
}

// Click add fitters to add fitters
document.addEventListener("click", function (e) {
  if (e.target.className.includes("add-fitter")) {
    addFitter(e);
  }
});
