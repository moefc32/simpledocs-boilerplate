<script>
    import Alert from '$lib/component/Alert.svelte';
    import DownloadButton from '$lib/component/DownloadButton.svelte';
    import Code from '$lib/component/Code.svelte';
    import Hyperlink from '$lib/component/Hyperlink.svelte';

    export let data;
</script>

<svelte:head>
    <title>{`${data.title} | ${import.meta.env.VITE_APP_NAME}`}</title>
    <meta
        property="og:title"
        content={`${data.title} | ${import.meta.env.VITE_APP_NAME}`}
    />
</svelte:head>

<div class="flex flex-1 flex-col gap-3">
    <h1 class="my-3 pb-3 text-5xl border-b-[1px] border-gray-700">
        {data.title}
    </h1>
    {#each data.contents as item, i}
        {#if typeof item === 'string'}
            <p>{item}</p>
        {:else if item.type === 'section-title'}
            <h2 class="my-3 text-3xl">{item.value}</h2>
        {:else if item.type === 'code'}
            <Code value={item.value} />
        {:else if item.type.startsWith('download')}
            <DownloadButton {item} />
        {:else if item.type.startsWith('alert')}
            <Alert {item} />
        {:else if item.type === 'hyperlink'}
            <Hyperlink {item} />
        {:else if item.type === 'image'}
            {item.value}
        {:else if item.type === 'audio'}
            {item.value}
        {:else if item.type === 'video'}
            {item.value}
        {:else if item.type === 'doc'}
            {item.value}
        {:else if item.type === 'maps'}
            {item.value}
        {/if}
    {/each}
</div>
