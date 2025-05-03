// let houseKeeper1 = {
//     name: "Sarah",
//     age: 40,
//     hasWorkPermit: true,
//     languages: ["English", "Spanish"],
//     yearsOfExperience: 12   
// };

// function BellBoy(name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// let bellBoy1 = new BellBoy("Timmy", 21, true, ["English", "Spanish"]);
// console.log(bellBoy1.languages);

function addAnotherEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        key : 'p',
        durationPressed : 2,
        eventType : 'keyDown'
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened)
    }
}