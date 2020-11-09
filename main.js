

///1. Use a do...while loop to console.log the numbers from 1 to 1000.///////////////////////////
const printTo1000 = () =>{
    let x = 0

while(x !== 1001){
    console.log(x)
    x++
}
}
///-------------------------------------------------------------------------------------------///



///2. Create an object (with keys and values) called person with the following data://///////////
 const person = {
     firstName: "Jane",
     lastName: "Doe",
     birthDate: "Jan 5, 1925",
     gender: "female"
 }
///------------------------------------------------------------------------------------------///



///3. Create a function that logs out the keys of the object using Object.keys().////////////////
const logObjectKeys = (obj) => {
    console.log("logging object keys!",Object.keys(obj))
}
logObjectKeys(person)
///------------------------------------------------------------------------------------------///



///4. Create a function that logs out the keys and values of the object using Object.entries().//
const logObjectKeysAndValues = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        console.log("logging object keys and values!", `${key}: ${value}`);
      }
 }
logObjectKeysAndValues(person)
///------------------------------------------------------------------------------------------///



///5. Create an arrayOfPersons that contains multiple "people" objects. /////////////////////////
///   You can simply copy/paste the person object you made above multiple times.              ///
///   Feel free to change the values to reflect multiple people you might have in your database./
 let arrayOfPersons = [{
    firstName: "Kim",
    lastName: "Kardashian",
    birthDate: "Jan 5, 2005",
    gener: "female"
},
     
{
    firstName: "Charles",
    lastName: "Manson",
    birthDate: "Jan 5, 1925",
    gener: "female"
},
{
    firstName: "Jack",
    lastName: "The Ripper",
    birthDate: "Oct 25, 1675",
    gender: "other"
},
{
    firstName: "Kurt",
    lastName: "Cobain",
    birthDate: "Dec 7, 1934",
    gender: "male"
}]
///------------------------------------------------------------------------------------------///


 
///6. Create a function that uses a for...of loop and an if statement to console.log/////////////
///   the value associated with the key birthDate of each object                              ///
///   if the birth year is an odd number.                                                     ///
 const logOddBirthdays = (arr) => {
    //  for (let i; i < arr.length; i++) {
    //      if(arr[i].birthDate[birthDate.length - 1] % 2 !== 0) {
    //         for (const [key, value] of Object.entries(arr[i].birthDate)) {
    //             console.log(`${key}: ${value}`);
    //           }
    //      }
    //  }

    for (const person of arrayOfPersons) {
        const birthYear = parseInt(person.birthDate.split(", ")[1])
        if(birthYear % 2 !== 0){
            console.log("logging odd birthdates",person.birthDate)
        }
        return
    }
 }
 logOddBirthdays(arrayOfPersons)
///------------------------------------------------------------------------------------------///



///7. Use .map() to map over the arrayOfPersons and console.log() their information./////////////
const logArrayWithMap = (arr) => {
    arr.map(person => console.log("person mapped", person))
}
logArrayWithMap(arrayOfPersons)
///------------------------------------------------------------------------------------------///



///8. Use .filter() to filter the persons array and console.log only males in the array./////////
const filterByMales = (arr) => {
     
      let personsByMales = arr.filter(person => person.gender === "male" && console.log("male",person))

     
}

filterByMales(arrayOfPersons)
///------------------------------------------------------------------------------------------///



///9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.///////
const filterBirthdayBefore1990 = (arr) => {

    arr.filter(person => {

        const compareTime = new Date("Jan 1, 1990")
        const birthDateTime = new Date(person.birthDate)

        if (compareTime > birthDateTime) {
            console.log("person born before 1990", person)
            return true
        } else {
            return false
        }
    })
}


filterBirthdayBefore1990(arrayOfPersons)
///------------------------------------------------------------------------------------------///



///10. Use .filter() to filter the persons array and console.log///////////////////////////////// 
///    only people that were born before Jan 1, 1990.     
const filterBirthdayBefore1990ConsoleLogged = (arr) => {

    arr.filter(person => {

        const compareTime = new Date("Jan 1, 1990")
        const birthDateTime = new Date(person.birthDate)

        if (compareTime > birthDateTime) {
            console.log("person born before 1990 console logged!", person)
            
        } 
    })
}


filterBirthdayBefore1990ConsoleLogged(arrayOfPersons)                                    ///

///------------------------------------------------------------------------------------------///



///11. BONUS - Create a function that returns true if the date //////////////////////////////////
///    passed to it is >= 21 years in the past.      

const checkDate = (date) => {
    const compareDate = new Date(date).getFullYear()
    const twentyOneYearsAgo = new Date().getFullYear() - 21;
    console.log("compare Date" , compareDate)
    console.log("Twenty One Years Ago!" , twentyOneYearsAgo)
    if (compareDate >= twentyOneYearsAgo) {
        console.log("its true");
        return true;
    } else {
        console.log("its false");
        return false
    } 
}

checkDate("jan 4, 2018")

///


///------------------------------------------------------------------------------------------///



///12. BONUS - .filter() out the people in the array who are younger than 21.////////////////////
const checkTwentyOne = (arr) => {

    arr.filter(person => {

        const today = new Date().getFullYear()
        const birthDateTime = new Date(person.birthDate) - 21
        console.log("birthday" , birthDateTime)
        if (birthDateTime <= today) {
            console.log("person older than 21", person)
            return true
        } else {
            return false
        }
    })
}

checkTwentyOne(arrayOfPersons)
///------------------------------------------------------------------------------------------///


