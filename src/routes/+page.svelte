<script>
    let dice = $state(0);

    $effect(() => {
        console.log(dice);
    })
</script>

{dice} is the number in question
<button class="btn" on:click={() => (dice = Math.ceil(Math.random() * 6))}>
    Click me
</button>