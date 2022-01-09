import Card from "./Card";



export function assignAngles(myCardCount) {
    
    const bounds = [-45, 45]
    const difference = (bounds[0] * -1) + bounds[1]
    const factor = difference /myCardCount
    let start = bounds[0]
    console.log(myCardCount);
    const myCards = []

    for(let i = 0; i < myCardCount; i++){
        const styles = {
            transform: `rotate(${start}deg)`
        }
        
        start += factor
        myCards.push(<Card styles={styles} key={i}/>)
    }

    return myCards
}