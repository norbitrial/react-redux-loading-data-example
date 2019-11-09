const items = [
    {
        id: 1,
        title: 'Last Christmas',
        count: 4,
        description: 'Drama/Romance',
    },
    {
        id: 2,
        title: 'Terminator: Dark Fate',
        count: 2,
        description: 'Fantasy/Sci-fi',
    },
    {
        id: 3,
        title: 'The Addams Family',
        count: 1,
        description: 'Fantasy/Horror',
    },
    {
        id: 4,
        title: 'Joker',
        count: 7,
        description: 'Drama/Thriller',
    },
    {
        id: 5,
        title: 'Countdown',
        count: 2,
        description: 'Thriller/Horror',
    },
];
const errorMessage = 'Something went wrong';
const delay = 1000;
const hasToSucceed = () => {
    return Math.floor(Math.random() * Math.floor(2)) === 1;
};

const getFakeData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hasToSucceed() ? resolve(items) : reject(errorMessage);
        }, delay);
    });
};  

export default {
    getFakeData,
};