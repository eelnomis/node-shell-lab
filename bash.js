const exportsFromPwd = require('./pwd')
const exportFromLs = require('./ls')

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  switch (cmd) {
    case 'ls':
      exportFromLs();
      break;
    case 'pwd':
      exportsFromPwd();
      break;
    default:
      console.log('Not a valid command. Please Try Again.')
  }
  console.log('\n');
  // process.stdout.write('\nprompt > ');
})
