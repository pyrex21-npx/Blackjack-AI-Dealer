export function getCard(card) {
    if (!card){
        return `/assets/reverse_green.svg`
    }
    return `/assets/${card.suite}_${card.rank}.svg`
}