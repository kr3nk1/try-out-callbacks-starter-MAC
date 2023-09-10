/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(st, obj) {
/*      let array = st.split(" ");
    let newSt = [];
    array.forEach(element => {
        let found = false;
        for(key in obj) {
            if(element.endsWith(key)) {
            newSt.push(obj[key](element));
            found = true;
            break;
        }
        }
        if(found === false) {
            newSt.push(element);
        }
    });
    return newSt.join(" ");  */
    let array = st.split(" ");
    let newSt = [];
    array.map((el)=>{
        let keys = Object.keys(obj);
        let found = false;
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if(el.endsWith(key)) {
                newSt.push(`${obj[key](el)}`);
                found = true;
                break;
            } 
        }
        if(found === false) {
            newSt.push(el);
        }
    });
    return newSt.join(" ");
       /*  let array = st.split(" ");
        let newSt = array.map(element => {
            for (let key in obj) {
                if (element.endsWith(key)) {
                    return obj[key](element);
                }
            }
            return element;
        });
        return newSt.join(" "); */
    
    
};

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
