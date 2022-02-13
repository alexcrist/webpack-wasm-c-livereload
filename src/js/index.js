
const main = () => {

  console.log('Hello from JS!');

  const add = Module.cwrap('add', 'number', ['number', 'number']);

  const result = add(11, 6);
  
  console.log('Result', result);
  
};

Module.onRuntimeInitialized = main;
