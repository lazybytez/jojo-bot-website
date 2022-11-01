<script lang="ts">
    export let data;

    let active = data.components[0].name;

    function switchComp(compName: string) {
        active = compName;
    }
</script>

<svelte:head>
    <title>Commands | JoJo Bot</title>
</svelte:head>

<aside class="bg-surface-0 max-w-sm sm:ml-20 sm:my-20 rounded">
    <ul class="py-2 px-4">
        {#each data.components as comp}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li
                class="my-2 rounded py-2 px-2 font-semibold {active === comp.name
                    ? 'hover:bg-mauve bg-mauve text-base'
                    : 'hover:bg-base'}"
                on:click={() => switchComp(comp.name)}
            >
                {comp.name}
            </li>
        {/each}
    </ul>
</aside>
