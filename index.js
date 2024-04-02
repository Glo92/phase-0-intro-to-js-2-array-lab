// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
  const cat1 = cats.push(name)
  console.log(cat1) 
  
}

function destructivelyPrependCat(name) {
   const cat2 = cats.unshift(name)
  console.log(cat2)
}

function destructivelyRemoveLastCat() {
const cat3 = cats.pop()
console.log(cat3)
}


function destructivelyRemoveFirstCat() {
   const cat4 = cats.shift()
  console.log(cat4)
}

function appendCat(name5) {
  const cat5 = [...cats, name5]
  console.log(cat5)
    return cat5
}

function prependCat(name6) {
   const cat6 = [name6, ...cats]
   console.log(cat6)
    return cat6
}

function removeLastCat() {
  const cat7 = cats.slice(0, 2)
  console.log(cat7)
    return cat7
}
removeLastCat()

function removeFirstCat() {
  const cat8 = cats.slice(1)
  console.log(cat8)
    return cat8 
}

