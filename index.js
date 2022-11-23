function distanceFromHqInBlocks(distance) {
    return Math.abs (distance - 42);
};
function distanceFromHqInFeet(blocks) {
    let feet = Math.abs (blocks - 42);
    return feet * 264;
};
function distanceTravelledInFeet(x,y) {
    let feet = Math.abs(x - y);
    return feet * 264;
};
function calculatesFarePrice (start, destination) {
    let blocks = Math.abs (start - destination);
    let feet = blocks * 264;
    if (feet < 400 ){
        return 0
    }
    else if (feet >= 400 && feet <=2000 ){
        return (feet - 400) * 2 / 100
    }
    else if (feet > 2000 && feet <=2500){
        return 25
    }
    else if (feet >2500) {
        return 'cannot travel that far'
    }
}