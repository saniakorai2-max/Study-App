//Task List
function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();

      // Prevent adding empty tasks
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const ul = document.getElementById('taskList');
      
      // list item (li)
      const li = document.createElement('li');

      // checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'radio';
      checkbox.className = 'checkbox';
      
      // text label
      const label = document.createElement('label');
      label.textContent = " " + taskText;

      // delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = function() {
        ul.removeChild(li);
      };

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteBtn);
      ul.appendChild(li);

      // Clear the input field for the next task
      input.value = "";
    }

    

//Timer
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById("display");
const button = document.getElementById("starttime");
const buttonSR = document.getElementById("res-stop");
const buttonStop = document.getElementById("Stop");

// Formating milliseconds into HH:MM:SS.mm
function formatTime(ms) {
  const hrs = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  const msecs = Math.floor((ms % 1000) / 10); // Two-digit milliseconds

  const pad = (num) => String(num).padStart(2, "0");

  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}.${pad(msecs)}`;
}



//Timer buttons
button.addEventListener("click", () => {
  watch.classList.remove('hidden');
  if (!isRunning) {
    // START
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10); // Updates every 10 milliseconds
    
    buttonSR.textContent = "Pause";
    buttonSR.style.backgroundColor = "#ffff"; 
    isRunning = true;
  } 
});
buttonSR.addEventListener("click", () => {
  if (!isRunning) {
    // START
    watch.classList.remove('hidden');
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10); // Updates every 10 milliseconds
    
    buttonSR.textContent = "Pause";
    buttonSR.style.backgroundColor = "#ffff"; 
    isRunning = true;
  } 
  else {
    // STOP
    clearInterval(timerInterval);
    buttonSR.textContent = "Resume";
    buttonSR.style.backgroundColor = "#28a745"; // Green start color
    isRunning = false;
  }
});
buttonStop.addEventListener("click", ()=> {
  watch.classList.add('hidden');
})



//Todays Date
const dateShow = document.getElementById('date');
function ShowDate() {
  const tdy = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = tdy.toLocaleDateString('en-US', options);
  dateShow.textContent = formattedDate;
}
ShowDate();