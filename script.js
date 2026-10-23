const userProfile = {
  name: "Aiymay",                                                    
  birthYear: 2006,                                                     
  isDeveloper: true,                                                   
  hobbies: ["drawing", "taking photographs", "cooking", "reading", "tennis"], 
};

function showProfile() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - userProfile.birthYear;
  const hobbiesCount = userProfile.hobbies.length;

  document.getElementById("nameOut").textContent = userProfile.name;
  document.getElementById("yearOut").textContent = userProfile.birthYear;
  document.getElementById("devOut").textContent = userProfile.isDeveloper;
  document.getElementById("ageOut").textContent = age;
  document.getElementById("hobbiesCountOut").textContent = hobbiesCount;

  console.log("Name:", userProfile.name);
  console.log("Age:", age);
  console.log("Hobbies count:", hobbiesCount);
}

const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  userProfile.name = document.getElementById("username").value;
  userProfile.birthYear = Number(document.getElementById("birthYear").value);

  showProfile();
  document.getElementById("message").textContent = "Profile updated!";
});
const list = document.getElementById("hobbyList");

for (let i = 0; i < userProfile.hobbies.length; i++) {
  const li = document.createElement("li");
  li.textContent = userProfile.hobbies[i];
  list.appendChild(li);
}

document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("newItem");
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    userProfile.hobbies.push(input.value);
    input.value = "";
    showProfile();
  }
});
document.getElementById("removeBtn").addEventListener("click", function () {
  if (list.lastElementChild) {
    list.lastElementChild.remove();
    userProfile.hobbies.pop();
    showProfile();
  }
});
showProfile();
