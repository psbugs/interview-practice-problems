function greet(){
    console.log('Inside greet');
};

function print(fn){
    console.log('Inside print');
    fn();
};

print(greet);

function registerUser(user, callback) {
  console.log(`Registering user: ${user}`);
  setTimeout(() => {
    console.log(`User ${user} successfully registered.`);
    callback(user);
  }, 2000);
}

function sendWelcomeEmail(user) {
  console.log(`Sending welcome email to ${user}...`);
}

registerUser("Praveen", sendWelcomeEmail);