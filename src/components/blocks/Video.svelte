<script>
    import { onMount, tick } from 'svelte';
    import 'plyr/dist/plyr.css';

    export let item;

    let player;
    let videoElement;
    let youtubeContainer;

    function getYoutubeId(url) {
        try {
            const u = new URL(url);

            if (u.hostname.includes('youtu.be')) {
                return u.pathname.slice(1);
            }

            if (u.pathname.includes('/embed/')) {
                const match = u.pathname.match(/\/embed\/([^/]+)/);
                if (match?.[1]) return match[1];
            }

            return u.searchParams.get('v') || url;
        } catch {
            return url;
        }
    }

    const videoUrl =
        item.type === 'video-youtube'
            ? null
            : item.target.startsWith('/')
              ? `${import.meta.env.VITE_BASE_PATH || ''}${item.target}`
              : item.target;

    onMount(() => {
        let mounted = true;

        const init = async () => {
            const { default: Plyr } = await import('plyr');

            await tick();
            if (!mounted) return;

            const target =
                item.type === 'video-youtube' ? youtubeContainer : videoElement;

            if (!target) return;

            player = new Plyr(target, {
                controls: [
                    'play-large',
                    'play',
                    'progress',
                    'current-time',
                    'mute',
                    'volume',
                    'settings',
                    'fullscreen',
                ],
                youtube: {
                    noCookie: true,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                },
            });
        };

        init();

        return () => {
            mounted = false;
            player?.destroy();
            player = null;
        };
    });
</script>

{#if item.type === 'video-youtube'}
    <div
        bind:this={youtubeContainer}
        class="plyr__video-embed w-full aspect-video border-1 border-gray-700 rounded-sm"
        data-plyr-provider="youtube"
        data-plyr-embed-id={getYoutubeId(item.target)}
    ></div>
{:else}
    <video bind:this={videoElement} class="aspect-video" playsinline controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag!
    </video>
{/if}
