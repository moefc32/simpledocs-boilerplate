<script>
    export let item;
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full"
>
    {#each item.items as item, i}
        <div
            class="flex flex-col justify-end p-3 h-32 rounded-lg"
            style="background: {item.blockColor}; color: {item.textColor}"
        >
            <span class="text-lg font-semibold">{item.label}</span>
            <span class="text-sm opacity-65 uppercase">{item.blockColor}</span>
        </div>
    {/each}
</div>
