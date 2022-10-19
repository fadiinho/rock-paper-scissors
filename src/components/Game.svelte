<script lang="ts">
  import { score } from "../stores/score";
  import GameItem from "./GameItem.svelte";
  import { isPlayerWinner, houseChoice, Choices, Winner } from "../lib/isPlayerWinner";

  let house = undefined;
  let userChoice = "";
  let winner = undefined;

  const handleChoice = (choice: Choices) => {
    house = houseChoice();
    userChoice = choice;
    winner = isPlayerWinner(choice, house)

    switch (winner) {
      case Winner.Player:
        score.set($score + 1);
        break;

      case Winner.House:
        score.set($score - 1);
        break;

      default: break;
        
    }
  }

</script>

{#if winner === undefined}
  <div class="icons-container">
      <div class="row-one">
        <GameItem on:keydown on:click={() => handleChoice(Choices.Paper)} item="paper" />
        <GameItem on:keydown on:click={() => handleChoice(Choices.Scissors)} item="scissors" />
      </div>
      
      <GameItem on:keydown on:click={() => handleChoice(Choices.Rock)} item="rock" />
  </div>
{/if}

{#if userChoice}
  <div class="result">
    <div class="player-choice">
      <GameItem
        item={userChoice} 
        style="transform: none;"
      />
      <p class="text">You picked</p>
    </div>

    <div class="house-choice">
      <GameItem
        item={house} 
        style="transform: none;"
      />
      <p class="text">The house picked</p>
    </div>
  </div>

  <div class="group">
    {#if winner === Winner.Player}
      <p class="result-text">YOU WIN</p>
    {/if}

    {#if winner === Winner.House}
      <p class="result-text">YOU LOSE</p>
    {/if}

    {#if winner === Winner.Draw}
      <p class="result-text">DRAW</p>
    {/if}

    <button class="play-again-btn" on:click={() => { userChoice = ""; winner = undefined; house = undefined; }}>Play again</button>
  </div>
{/if}

<style>
  .icons-container {
    display: flex;
    flex-direction: column;
    background-image: url(/src/assets/images/bg-triangle.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    flex-wrap: wrap;
  }

  .row-one {
    display: flex;
  }

  .text {
    margin-top: 1.5rem;
  }

  .result > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
  }

  .result {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
  }
  
  .group {
    width: 65%;
  }

  .result-text {
    font-size: 3.5rem; 
  }

  .play-again-btn {
    border: 1px solid #fff;
    border-radius: 10px;
    width: 100%;
    max-width: 200px;
    color: hsl(229, 25%, 31%);
    background-color: #fff;
    padding: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .player-choice {
    filter: drop-shadow(0 0 50px #fff)
  }
</style>
