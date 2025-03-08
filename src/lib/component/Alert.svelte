<script>
    import { CircleCheck, TriangleAlert, CircleX, Info } from 'lucide-svelte';

    export let item;

    const states = {
        alert: 'bg-slate-500/40 text-white/85',
        'alert-info': 'bg-blue-400/85 text-black',
        'alert-success': 'bg-green-400/85 text-black',
        'alert-warning': 'bg-yellow-400/85 text-black',
        'alert-danger': 'bg-red-400/85 text-white/85',
    };
</script>

<div
    class="flex items-start gap-4 px-5 py-4 {states[
        item.type
    ]} text-[15px] leading-5 rounded-lg"
>
    {#if item.type === 'alert-success'}
        <CircleCheck size={20} />
    {:else if item.type === 'alert-warning'}
        <TriangleAlert size={20} />
    {:else if item.type === 'alert-danger'}
        <CircleX size={20} />
    {:else}
        <Info size={20} />
    {/if}
    {item.value}
</div>
