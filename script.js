let colors = ["#264653", "#008D8D", "#607D8B", "#D06045"];
let nonColors = [];
let teams = [];

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

  // Add fitters title box
  addElement(
    "div",
    divId + "-stations-header",
    "team__station-header--title",
    divId + "-stations-title-box"
  );

  // Add fitters title
  addElement(
    "h3",
    divId + "-stations-title-box",
    "stations-title",
    divId + "-stations-title"
  );
  document.getElementById(divId + "-stations-title").innerHTML = "Stations";

  // Add fitters add-button
  addElement(
    "button",
    divId + "-stations-header",
    "btn add-station",
    divId + "-btn-add-stations"
  );
  document.getElementById(divId + "-btn-add-stations").innerHTML = "Add";
}

// Add element function
function addElement(box, parent, Class = 0, id = 0) {
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
