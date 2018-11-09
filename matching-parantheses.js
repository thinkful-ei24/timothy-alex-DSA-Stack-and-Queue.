const Stack = require('./stack');

/**
 *   '(9+4)' -> valid
 *  '(9+4 / (5+3)' -> error, report location 
 *  '(9+4' -> error, report location of close ')' 
 * 
 *   (
*    9
      +
      4
 *   )

 ((()))
 * (

 )
 *    parens should be in matching pairs
 *    order matters   
 * 
 *   function (string)
 *     remove other characters from string 
 *      new stack
 *      let result = ''
 *      let charIndex = 0
 *    for (let c in string)
 *      stack.push(c)
 *      charIndex ++
 *      if ')' 
 *        location = charIndex
*  
 *
 *      
 *
 *   
 * 
 *    
 */