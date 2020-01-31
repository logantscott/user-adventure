// get user input about the user
// on click, save user input to local storage, object like such:

// function makeUser(formData) {
//     const user = {
//         name: formData.get('name'),
//         race: formData.get('race'),
//         hp: 35,
//         gold: 0,
//         completed: {}
//     };

// start adventure, window.location to go to main quest selection page, aka prepare for your day page
// load list of 3 quests/tasks to complete, pass task as param to quest template page
// load quest page with selected quest from query param, load quest from object literal saved in quest data js file
// loaded quest should include question/task and form inputs

// note to self - array.sort(function (a, b) { return 0.5 — Math.random() })

const form = document.querySelector('#new-user');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // make a new form data object
    const data = new FormData(form);

    console.log(data.get('name'));

    // make the user object
    const user = makeUser(data);
    
    // STORE THAT USER NOW
    saveUser(user);

    // redirect to prepare for adventure page
    window.location = 'prepare';
});

// move the func-yness to another file later

function makeUser(data) {
    const user = {
        name: data.get('name'),
        food: data.get('food'),
        pronouns: data.get('pronouns'),
        race: data.get('eyecolor'),
        alertness: 100,
        confidence: 100,
        choices: {},
        completed: {}
    };

    return user;
}

function saveUser(user) {
    localStorage.setItem('player', JSON.stringify(user));
}