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

function addElementToEndOfArray(array, element)
{
  const safeArr = [...array, element];
  return(safeArr);
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return(array);
}

function accessElementInArray(array, index)
{
  return(array[index]);
}