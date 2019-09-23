import "./styles.css";

// Added a comment to demonstrate a change

if (document.readyState !== "loading") {
  // Document ready, executing
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
    // Document was not ready, executing when loaded
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

function initializeCode() {
  console.log("Initializing");
  const button = document.getElementById("clicky");
  button.addEventListener("mousedown", event => {
    buttonActivities();
    event.stopPropagation();
  });
}

function buttonActivities() {
  const att = document.createAttribute("class");
  att.value = "floatright";
  document.getElementById("firstdiv").setAttributeNode(att);
}
