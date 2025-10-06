document.getElementById("getAccessBtn").addEventListener("click", function () {
  const userInput = document.getElementById("uid").value.trim();  // Roll number input

  if (!userInput) {
    alert("Please enter your Roll Number");
    return;
  }

  fetch("assets/pig.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json();
    })
    .then(data => {
      // Find index based on "Roll No."
      const index = data.findIndex(item => item["Roll No."] === userInput);

      if (index !== -1) {
        console.log("Student found at index:", index);
        console.log("Student details:", data[index]);
        window.open(`student/access.html?accesscode=${index}`, "_self");
      } else {
        alert("❌ Entry not found in database!");
        console.log("Roll number not found");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error reading student data!");
    });
});

