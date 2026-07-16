function addTask() {
      const input = document.getElementById('taskInput');
      const taskText = input.value.trim();

      // Prevent adding empty tasks
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const ul = document.getElementById('taskList');
      
      // Create the list item (li)
      const li = document.createElement('li');

      // Create the checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'radio';
      checkbox.className = 'checkbox';
      
      // Create the text label
      const label = document.createElement('label');
      label.textContent = " " + taskText;

      // Create the delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = function() {
        ul.removeChild(li);
      };

      // Assemble the elements and append to the main list
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteBtn);
      ul.appendChild(li);

      // Clear the input field for the next task
      input.value = "";
    }

    
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById("display");
const button = document.getElementById("starttime");

// Formats milliseconds into HH:MM:SS.mm
function formatTime(ms) {
  const hrs = Math.floor(ms / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  const msecs = Math.floor((ms % 1000) / 10); // Two-digit milliseconds

  const pad = (num) => String(num).padStart(2, "0");

  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}.${pad(msecs)}`;
}

// Toggles the stopwatch state
button.addEventListener("click", () => {
  if (!isRunning) {
    // START
    document.getElementById("watch").style.display = "block"
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10); // Updates every 10 milliseconds for precision
    
    button.textContent = "Stop";
    button.style.backgroundColor = "#dc3545"; // Red stop color
    isRunning = true;
  } else {
    // STOP
    clearInterval(timerInterval);
    button.textContent = "Resume";
    button.style.backgroundColor = "#28a745"; // Green start color
    isRunning = false;
  }
});
