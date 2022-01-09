import Card from "./Card";



export function assignAngles(myCardCount, opponent) {
    
    const bounds = [-45, 45]
    const difference = (bounds[0] * -1) + bounds[1]
    const factor = difference /myCardCount
    let start = bounds[0]
    console.log(myCardCount);
    const myCards = []

    for(let i = 0; i < myCardCount; i++){
        const styles = {
            transform: `rotate(${start}deg) translate(-50%,-50%)`,
        }
    
        start += factor
        if(opponent){
            myCards.push(<Card styles={styles} key={i} classes={'opponent'}/>)
        } else {
            myCards.push(<Card styles={styles} key={i} classes={'myHand'}/>)
        }
    }

    return myCards
}