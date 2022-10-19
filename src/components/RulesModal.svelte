<script>
  import CloseIcon from "../assets/images/icon-close.svg"
  import RulesImage from "../assets/images/image-rules.svg"
</script>

<div class="rules-modal">
    <h1>Rules </h1>
    <img src={RulesImage} alt="Rules" />
    <img class="close-icon" on:keydown={undefined} on:click src={CloseIcon} alt="Close Icon"/>
</div>

<style>
  .rules-modal {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    color: hsl(229, 25%, 31%);
    z-index: 99;
  }

  .close-icon {
    cursor: pointer;
  }
</style>
