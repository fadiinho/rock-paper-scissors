<script lang="ts">
  import { score } from "../stores/score";
</script>
<div class="scoreboard">
  <div class="title">
      <span>Rock</span>
      <span>Paper</span> 
      <span>Scissors</span> 
  </div>
  <div class="badge">
    <span class="score-text">score</span>
    <span class="points">{$score}</span>
  </div>
</div>

<style>
  .scoreboard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 8px;
    padding: 10px;
    width: 80%;
    max-width: 400px;
  }

  .title {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 1.3rem;
  }

  .title > span {
    text-align: left;
    font-weight: 700;
    line-height: 1rem;
  }

  .badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: hsl(229, 64%, 46%);
    background-color: #fff;
    border-radius: 4px;
    width: 4rem;
    height: 4rem;
    padding: 5px;
  }

  .badge > .score-text {
    text-transform: uppercase;
    font-size: 0.7rem;
  }

  .points {
    color: hsl(229, 25%, 31%);
    font-size: 2rem;
    font-weight: 700;
  }
</style>
