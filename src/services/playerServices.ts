export interface Players{
    id: number, 
    name: string, 
    wins: number, 
    losses: number, 
    totalScore: number} 

// rating formula
const rating = (wins / totalGames) * 100 + (totalScore / totalGames)
// total score
const totalScore = (wins - losses)

const Players[] [
    {    id: 001,
        name: ShadowStrike,
        wins: 15,
        losses: 5,
        totalScore: 28500
},
    {   id: 002,
        name: NoobMaster,
        wins: 3,
        losses: 12,
        totalScore: 4200
},
    {   id: 003,
        name: ProGammer99,
        wins: 0,
        losses: 0, 
        totalScore:0
    }
]

        

