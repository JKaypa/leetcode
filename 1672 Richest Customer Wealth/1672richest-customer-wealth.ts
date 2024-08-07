function maximumWealth(accounts: number[][]): number {
    let wealth: number = 0
    for(let i = 0; i < accounts.length; i++){
       let currentWealth = accounts[i].reduce((acc, num) => acc + num)
       if(currentWealth > wealth) wealth = currentWealth
    }

    return wealth
};