// 1. Get URL Parameters
const params = new URLSearchParams(window.location.search);
const accessCode = params.get("accesscode");

// 2. If no accesscode → redirect to index.html
if (!accessCode) {
  window.location.href = "index.html"; // open in same tab
} else {
  // 3. Play audio
  const audio = new Audio("../assets/sounds/lol.mp3"); // change path if needed
  audio.play().catch(err => console.log("Audio blocked:", err));
  audio.play().catch(err => console.log("Audio blocked:", err));
  audio.loop = true;
  // 4. Fetch student data using accesscode as index
  fetch("../assets/pig.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load JSON");
      return response.json();
    })
    .then(data => {
      // Convert index to number
      const index = parseInt(accessCode);
      if (!isNaN(index) && index >= 0 && index < data.length) {
        // console.log("✅ Student at index", index, "→", data[index]);

        // You can display on the page if needed:
        document.getElementById("text").innerHTML = `
          BHAI TU BHOOL GYA KYA TU NSUT ME PHADTA HE YE LE TERI ID
          <p><b>Name:</b> ${data[index]["Student Name"]}</p>
          <p><b>Roll No.:</b> ${data[index]["Roll No."]}</p>
          <p><b>Email:</b> ${data[index]["NSUT Email Id"]}</p>
          <p><b>Specializtion:</b> ${data[index]["Specializtion"]}</p>
        `;
      } else {
        alert("❌ Invalid access code (index not found)");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Error loading student data");
    });
}