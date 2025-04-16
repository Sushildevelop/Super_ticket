 function generateID(prefix) {
    return (
      prefix +
      new Date().getFullYear().toString().substr(-2) +
      Math.floor(Math.random() * 90000)
    );
  }
  module.exports={generateID}