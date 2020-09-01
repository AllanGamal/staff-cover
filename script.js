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

  addElement("div", divId, "team__title", divId + "title-box");
  addElement("h1", divId + "title-box", "teamtitle", divId + "-title");
  document.getElementById(divId + "-title").innerHTML = divId;
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

let asses = [0, 45, 687, 654];

/////// Click button to add team
document.getElementById("add-team").addEventListener("click", function () {
  let teamName = prompt("Team name");

  if (teams.length > 0) {
    for (let i = 0; i < teams.length; i++) {
      let test = true;
      if (teamName == teams[i].teamId) {
        alert("Name already taken, try another one.");
        continue;
      } else {
        if (teamName) {
          addElement("div", "section", "team", teamName);
        }
      }
      break;
    }
  } else {
    if (teamName) {
      addElement("div", "section", "team", teamName);
    }
  }
});
