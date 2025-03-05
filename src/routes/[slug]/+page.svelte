<script>
    export let data;
</script>

<svelte:head>
    <title>{`${data.title} | ${import.meta.env.VITE_APP_NAME}`}</title>
    <meta
        property="og:title"
        content={`${data.title} | ${import.meta.env.VITE_APP_NAME}`}
    />
</svelte:head>

<h1 class="mt-3 mb-6 pb-3 text-5xl border-b-[1px] border-gray-700">
    {data.title}
</h1>
{#each data.contents as item, i}
    {#if typeof item === 'string'}
        <p>{item}</p>
    {/if}
{/each}
