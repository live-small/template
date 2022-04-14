// test code
function init() {
    const not_camel = "hello world";
    const NEVER_USED = "never used";
    console.log(`hello javascript!`);
}
init();

// eslint, prettier가 잘 세팅됐다면, 아래와 같은 에러가 뜰 것이다. 
// 'NEVER_USED' is assigned a value but never used.eslintno-unused-vars 
// Identifier 'not_camel' is not in camel case.eslintcamelcase 
