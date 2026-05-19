export function playerServices(id: number, name: string, wins: number, losses: number, totalScore: number) {

// rating formula
const rating = (wins / totalGames) * 100 + (totalScore / totalGames)
// total score
const totalScore = (wins - losses)

}
