function onClickLoginButton() {
  console.log("Login button clicked");
  authenticateUser();
}

function authenticateUser() {
  console.log("Authenticating user...");
  loadDashboard(); 
}

function loadDashboard() {
  console.log("Dashboard loaded");
}

onClickLoginButton();