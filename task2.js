// 2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված
// ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ, րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):


const os=require('os');
const fs=require('fs');

let today=new Date();
let fName=today.getMonth()+"_"+today.getDay()+"_"+today.getHours()+"_"+today.getMinutes()+"_"+today.getSeconds();
fs.rename( os.userInfo().username + '.txt', fName + '.txt', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});