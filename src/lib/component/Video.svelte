<script>
    export let item;

    $: videoUrl = item.target.startsWith('/')
        ? `${import.meta.env.VITE_BASE_PATH || ''}${item.target}`
        : item.target;
</script>

{#if item.type === 'video-youtube'}
    <iframe
        src={videoUrl + '?mute=0&rel=0&modestbranding=1'}
        class="w-full aspect-video border-[1px] border-gray-700 rounded-sm"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        title="YouTube video"
    ></iframe>
{:else}
    <video
        class="w-full aspect-video border-[1px] border-gray-700 rounded-sm"
        controls
    >
        <source src={videoUrl} type="video/mp4" />
        <track kind="captions" src="" />
        Your browser does not support the video tag!
    </video>
{/if}
