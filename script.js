let colors = ["#264653", "#008D8D", "#607D8B", "#D06045"];
let nonColors = [];
let teams = [];
// Add element function
function addElement(parent, Class, id) {
  let newDiv = document.createElement("div");
  newDiv.classList = Class;
  document.querySelector(parent).appendChild(newDiv);

  // if div class == team, give team name and add to teams list
  if (Class == "team") {
    newDiv.id = id;
    let newTeam = { teamName: id, fitters: [], stations: [] };
    teams.push(newTeam);

    console.log(teams);

    // Color team card
    // Add random color to team car
    let n = Math.floor(Math.random() * (4 - nonColors.length));
    document.querySelector("#" + id).style.backgroundColor = colors[n];
  }
}

/////// Click button to add team
document.getElementById("add-team").addEventListener("click", function () {
  let teamName = prompt("Team name");
  if (teams.includes(teamName)) {
    alert("Name already taken, try another one.");
  } else {
    if (teamName) {
      addElement("section", "team", teamName);
    }
  }
});
