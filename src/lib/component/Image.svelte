<script>
    export let item;

    $: imageUrl = item.target.startsWith('/')
        ? `${import.meta.env.VITE_BASE_PATH || ''}${item.target}`
        : item.target;
</script>

{#if item?.background}
    <div class="p-3 w-full rounded-lg" style="background: {item.background};">
        <img
            src={imageUrl}
            alt={item.title}
            class="w-full"
            style="max-width: {item?.width
                ? `min(${item.width}, 100%)`
                : '100%'};"
            title={item.title || 'Image'}
        />
    </div>
{:else}
    <img
        src={imageUrl}
        alt={item.title}
        class="w-full border-[1px] border-gray-700 rounded-sm"
        style="max-width: {item?.width ? `min(${item.width}, 100%)` : '100%'};"
        title={item.title || 'Image'}
    />
{/if}
