<script>
    import { onMount, tick } from 'svelte';
    import 'plyr/dist/plyr.css';

    export let target;

    let player;
    let audioElement;

    onMount(() => {
        let mounted = true;

        const init = async () => {
            const { default: Plyr } = await import('plyr');

            await tick();
            if (!mounted || !audioElement) return;

            player = new Plyr(audioElement, {
                controls: [
                    'play',
                    'progress',
                    'current-time',
                    'mute',
                    'volume',
                ],
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

<audio
    bind:this={audioElement}
    class="hidden"
    controls
    controlsList="nodownload"
>
    <source src={target} type="audio/mpeg" />
    Your browser does not support the audio tag!
</audio>
