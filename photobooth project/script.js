function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  let d= document.getElementById(pageId)
  console.log(d)
}

function signup() {
  let u = document.getElementById("signup-username").value;
  // console.log(u);
  // console.log(u.value);
  // u=u.value;
  let p = document.getElementById("signup-password").value;
  if (u && p) {
    localStorage.setItem("user", JSON.stringify({ u, p }));
    confirm("Signup successful!");
    alert("ami alert bolchi");
  //  
    showPage("login");
  // 
  }
}

function login() {
  let u = document.getElementById("login-username").value;
  let p = document.getElementById("login-password").value;
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && u === user.u && p === user.p) {
    showPage("gallery");
  } else alert("Invalid login");
}

function logout() { showPage("home"); }

// Drag & Drop
let selectedFile;
function dragOverHandler(e) 
{
  console.log(e) 
  e.preventDefault();
   }
function dropHandler(e) {
  e.preventDefault();
  selectedFile = e.dataTransfer.files[0];
  previewUpload();
}
function previewUpload() {
  let fileInput = document.getElementById("fileInput");
  if (fileInput.files[0]) selectedFile = fileInput.files[0];
  if (!selectedFile) return;

  let reader = new FileReader();
  reader.onload = e => {
    document.getElementById("previewImage").src = e.target.result;
    document.getElementById("previewPopup").classList.remove("hidden");
  };
  reader.readAsDataURL(selectedFile);
}
function confirmUpload() {
  let gallery = document.getElementById("galleryContainer");
  let reader = new FileReader();
  reader.onload = e => {
    let div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
      <img src="${e.target.result}">
      <div>
        <button onclick="viewImage('${e.target.result}')">View</button>
        <button onclick="this.parentElement.parentElement.remove()">Delete</button>
      </div>
    `;
    gallery.appendChild(div);
  };
  reader.readAsDataURL(selectedFile);
  cancelUpload();
}
function cancelUpload() { document.getElementById("previewPopup").classList.add("hidden"); }

// View Image
function viewImage(src) {
  document.getElementById("viewImage").src = src;
  document.getElementById("viewPopup").classList.remove("hidden");
}
function closeView() { document.getElementById("viewPopup").classList.add("hidden"); }
