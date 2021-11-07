const loggedInUser = 'sapna';
function greet(userName) {
  console.log('Welcome ' + userName + '!');
}
setTimeout(greet, 2000, loggedInUser);