<script lang="ts">
  export let item: string = undefined;
  export let style = "";
</script>

<div on:keydown on:click class={`icon-container ${item}-container`} style={style}>
  <div class="icon"></div>
</div>

<style>
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    cursor: pointer;
  } 

  .icon-container > .icon {
    background-repeat: no-repeat;
    background-position: center;
    width: 80%;
    height: 80%;
    border-radius: inherit;
    background-color: #fff;
  }

  .icon-container.rock-container {
    transform: translate(49px, 16px);
    background: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
  }

  .icon-container.rock-container > .icon {
    background-image: url(/src/assets/images/icon-rock.svg);
  }

  .icon-container.scissors-container {
    transform: translate(42px, -38px);
    background: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
  }

  .icon-container.scissors-container > .icon {
    background-image: url(/src/assets/images/icon-scissors.svg);
  }

  .icon-container.paper-container {
    transform: translate(-32px, -38px);
    background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
  }

  .icon-container.paper-container > .icon {
    background-image: url(/src/assets/images/icon-paper.svg);
  }

</style>
