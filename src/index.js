import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

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
