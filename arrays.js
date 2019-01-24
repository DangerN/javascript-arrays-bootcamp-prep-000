var chocolateBars = ["snickers" , "hundred grand" , "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)
{
  const safeArr = [element, ...array];
  return(safeArr);
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return(array);
}