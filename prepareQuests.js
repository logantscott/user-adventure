// quests[0].choices[0].description; ==> 'negotiate with them'


const monsters = {
    id: 'monsters',
    title: 'A Den of Monsters',
    // map: {
    //     top: '89%',
    //     left: '44%'
    // },
    image: 'monsters.jpg',
    // audio: 'monsters.wav',
    // action: 'monster-scream.wav',
    description: `
        description of quest
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Stuff happened after selection 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Stuff happened after selection
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            Stuff happened after selection
        `,
        hp: -50,
        gold: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Problem Dragon',
    // map: {
    //     top: '57%',
    //     left: '67%'
    // },
    image: 'dragon.jpg',
    // audio: 'dragon.wav',
    // action: 'dragon-growl.aiff',
    description: `
        description of quest
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            Stuff happened after selection
        `,
        hp: -35,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Stuff happened after selection
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Stuff happened after selection
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    // map: {
    //     top: '31%',
    //     left: '5%'
    // },
    image: 'treasure-chests.png',
    // audio: 'treasure-chests.wav',
    // action: 'chest-opening.wav',
    description: `
        description of quest
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'Stuff happened after selection',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Stuff happened after selection',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'Stuff happened after selection',
        hp: 35,
        gold: 0
    }]
};

const quests = [monsters, treasure, dragon, {
    id: 'pleasure',
    title: 'The Golden Pleasure',
    // map: {
    //     top: '61%',
    //     left: '10%'
    // },
    image: 'treasure-chests.png',
    // audio: 'treasure-chests.wav',
    // action: 'chest-opening.wav',
    description: `
        description of quest
    `,
    choices: [{
        id: 'wooden',
        description: 'WOW',
        result: 'Stuff happened after selection',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'NOW',
        result: 'Stuff happened after selection',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'POW',
        result: 'Stuff happened after selection',
        hp: 35,
        gold: 0
    }
    ]
}
];

export default quests;