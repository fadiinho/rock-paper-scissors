<script lang="ts">
  import Scoreboard from './components/Scoreboard.svelte'
  import Game from './components/Game.svelte'
  import RulesModal from './components/RulesModal.svelte';

  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal; 
  }
</script>

<main class="container">
  {#if showModal}
    <RulesModal on:click={toggleModal} /> 
  {/if}
  <Scoreboard />
  <Game />
  <button on:click={toggleModal} class="btn-rules">Rules</button>
</main>


<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
  }

  .container > * {
    z-index: 50;
  }

  .btn-rules {
    padding: 0.5rem 2rem;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 8px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }
</style>
