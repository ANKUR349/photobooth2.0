# photobooth2.0
A simple photo upload and gallery web app built with HTML, CSS, and JavaScript.
It allows users to upload images, preview them before saving, and manage them in a gallery with view and delete options.

🚀 Features

Login & Signup (Simulated) – Users must log in before accessing upload or gallery features.

Image Upload with Preview – Upload an image and preview it before confirming.

Gallery Management – Add images to a gallery with options to view or delete.

Image Viewer Popup – Click "View" to see any image in a larger popup.

Cancel Upload – Option to cancel if the user doesn’t want to save the preview.

Drag & Drop Upload Zone (if added) – Easily drag and drop files into the upload area.

🛠️ Tech Stack

HTML5 – Structure and layout.

CSS3 – Styling and responsive design.

JavaScript (Vanilla JS) – Handles image upload, preview, gallery updates, and popups.

LocalStorage – Stores user session (login/logout simulation).

📂 Project Structure
/project-root
│── index.html        # Main web page
│── style.css         # Styling for UI
│── script.js         # All JavaScript functions
│── /images           # (Optional) static images/icons

🔑 Core JavaScript Functions

previewUpload() → Shows image preview before confirming upload.

confirmUpload() → Moves previewed image into the gallery with view/delete options.

cancelUpload() → Hides the preview popup without saving.

viewImage(src) → Opens the selected image in a bigger popup.

closeView() → Closes the image viewer popup.

📸 Demo Workflow

Login/Signup → Access the app.

Upload an Image → Select from computer or drag & drop.

Preview → See how it looks before saving.

Confirm Upload → Image is added to the gallery.

View/Delete → Manage your uploaded images easily.

💡 Future Improvements

Add multiple image upload at once.

Enable persistent gallery storage using localStorage or a backend.

Add search & filter options for images.

Improve styling with animations and responsive design.

