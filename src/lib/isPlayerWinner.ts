export enum Choices {
  Paper = "paper",
  Scissors = "scissors",
  Rock = "rock"
}

export enum Winner {
  Draw,
  Player,
  House
}

export const houseChoice: () => Choices = () => {
  const choices = [Choices.Paper, Choices.Scissors, Choices.Rock];
  return choices[Math.floor(Math.random() * choices.length)];
}

export const isPlayerWinner = (player: Choices, house: Choices) => {
  if (house === player) {
    return Winner.Draw;
  }

  if (player === Choices.Paper) {
      if (house === Choices.Scissors) {
        return Winner.House;
      }

      if (house === Choices.Rock) {
        return Winner.Player;
      }
  }

  if (Choices.Scissors) {
      if (house === Choices.Rock) {
        return Winner.House;
      }

      if (house === Choices.Paper) {
        return Winner.Player;
      }
  }

  if (Choices.Rock) {
    if (house === Choices.Paper) {
      return Winner.House;
    }

    if (house === Choices.Scissors) {
      return Winner.Player;
    }
  }
}

