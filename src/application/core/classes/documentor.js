export default function setTitle(title){
    document.title = title ;
}

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const uniqueId = () => {
    return Math.random().toString(16).slice(2) ;
}

export {
    randomInt , uniqueId
};