const selectCategory = document.querySelector('select');
const img = document.querySelector('img');
const muscleGroups = ["https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", "https://images.unsplash.com/photo-1597347316205-36f6c451902a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", "https://images.unsplash.com/photo-1541600383005-565c949cf777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"];

function getCurrentEntries() {
    let relevantKey = bodyGroups[selectCategory.selectedIndex];
    return localStorage.getItem(relevantKey) != null ? JSON.parse(localStorage.getItem(relevantKey)) : [];
    //if relevantKey is in localStorage, then retrieve existing list; otherwise create new list
}

function onEntryRemove(index) {
    let relevantKey = bodyGroups[selectCategory.selectedIndex];
    let currentEntries = getCurrentEntries();
    currentEntries.splice(index, 1);
    localStorage.setItem(relevantKey, JSON.stringify(currentEntries));
    onRefresh(); //refresh to see entry deleted
}

//reload data entries
function onRefresh() {
    let userOutput = document.getElementById("user_output_format");
    let currentEntries = getCurrentEntries();
    let innerHtml = "";
    let currentIndex = 0;
    for (let entry of currentEntries) {
        innerHtml = `
            <div class="user_output">
                <div class="output_date">${new Date(Date.parse(entry["timestamp"])).toLocaleDateString("en-GB")}</div>
                <div class="output_exercise">${entry["exerciseName"]}</div>
                <div class="output_set">${entry["setsNumber"]}</div>
                <div class="output_rep">${entry["repsNumber"]}</div>
                <div class="output_weight">${entry["weightNumber"]}</div>
                <button onclick="onEntryRemove('${currentIndex}')" class="remove" type="button">x</button>
            </div>
        ` + innerHtml;
        currentIndex += 1;
    }
    userOutput.innerHTML = innerHtml;
}

selectCategory.addEventListener("change", () => {
    img.setAttribute("src", muscleGroups[selectCategory.selectedIndex]) //change the thumbnail image
    onRefresh(); //refresh the data for current muscle group
})

//retrieving document elements
const bodyGroups = ["chestTriceps", "backBiceps", "legAbs"];
const exerciseName = document.getElementById("exercise_name");
const setsNumber = document.getElementById("sets_number");
const repsNumber = document.getElementById("reps_number");
const weightNumber = document.getElementById("weight_number");
const buttonInsert = document.getElementById("enter_button");

//execute whenever the enter button is clicked
buttonInsert.addEventListener("click", () => {
    let relevantKey = bodyGroups[selectCategory.selectedIndex];
    let currentEntries = getCurrentEntries();
    currentEntries.push({
        "timestamp": new Date(),
        "exerciseName": exerciseName.value,
        "setsNumber": setsNumber.value,
        "repsNumber": repsNumber.value,
        "weightNumber": weightNumber.value,
    }); //add new entry to list
    localStorage.setItem(relevantKey, JSON.stringify(currentEntries)); //update localStorage list
    onRefresh(); //refresh data on frontend
})
onRefresh(); //on document first load