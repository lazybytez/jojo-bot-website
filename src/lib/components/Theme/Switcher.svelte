<script lang="ts">
    import theme from '$lib/stores/themes';
    let selected = $theme;

    function handleClick() {
        theme.set(String(selected));
        document.body.className = String(selected);
    }
</script>

<select
    class="bg-blue font-semibold rounded-lg text-sm px-4 py-2.5 text-crust text-center inline-flex items-center"
    bind:value={selected}
    on:change={() => handleClick()}
>
    <option value="">Dark</option>
    <option value="light">Light</option>
    <option value="grey">Grey</option>
</select>
