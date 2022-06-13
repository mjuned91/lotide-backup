const middle = (arr) => {
  let newArr = [];
  if (arr.length < 3) {
    console.log(newArr);
  } else if (arr.length % 2 === 0) {
    let i = (arr.length / 2) - 1;
    let j = (arr.length / 2);
    newArr = [arr[i], arr[j]];
    console.log(newArr);
  } else {
    let i = ((arr.length - 1) / 2);
    newArr = [arr[i]];
    console.log(newArr);
  }
};

module.exports = head;