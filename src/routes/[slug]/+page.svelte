<script>
    import Code from '$lib/component/Code.svelte';
    import DownloadButton from '$lib/component/DownloadButton.svelte';
    import Alert from '$lib/component/Alert.svelte';
    import Hyperlink from '$lib/component/Hyperlink.svelte';

    import Image from '$lib/component/Image.svelte';
    import Audio from '$lib/component/Audio.svelte';
    import Video from '$lib/component/Video.svelte';
    import PdfReader from '$lib/component/PdfReader.svelte';
    import Maps from '$lib/component/Maps.svelte';

    export let data;

    $: title = data?.title;
    $: contents = data?.contents || [];
</script>

<svelte:head>
    <title>{`${title} | ${import.meta.env.VITE_APP_NAME}`}</title>
    <meta
        property="og:title"
        content={`${title} | ${import.meta.env.VITE_APP_NAME}`}
    />
</svelte:head>

<div class="flex flex-1 flex-col gap-3">
    <h1 class="my-3 pb-3 text-5xl border-b-[1px] border-gray-700">
        {title}
    </h1>
    {#each contents as item, i}
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
            <Image {item} />
        {:else if item.type === 'audio'}
            <Audio target={item.target} />
        {:else if item.type.startsWith('video')}
            <Video {item} />
        {:else if item.type === 'pdf'}
            <PdfReader target={item.target} />
        {:else if item.type === 'maps'}
            <Maps target={item.target} />
        {/if}
    {/each}
</div>
