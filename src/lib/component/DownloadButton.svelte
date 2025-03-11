<script>
    import { Download } from 'lucide-svelte';

    export let item;

    const states = {
        download: 'bg-slate-500/40 hover:bg-slate-500/25 text-white/85',
        'download-info': 'bg-blue-400/85 hover:bg-blue-400/70 text-black',
        'download-success': 'bg-green-400/85 hover:bg-green-400/70 text-black',
        'download-warning':
            'bg-yellow-400/85 hover:bg-yellow-400/70 text-black',
        'download-danger': 'bg-red-400/85 hover:bg-red-400/70 text-white/85',
    };

    let isDownloading = false;

    async function downloadFile(path) {
        if (isDownloading) return;
        isDownloading = true;

        try {
            const fileUrl = path.startsWith('/')
                ? `${import.meta.env.VITE_BASE_PATH || ''}${path}`
                : path;

            const response = await fetch(fileUrl);
            if (!response.ok)
                throw new Error(`Failed to fetch file: ${response.statusText}`);

            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileUrl.split('/').pop();

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setTimeout(() => URL.revokeObjectURL(link.href), 1000);
        } catch (e) {
            console.error(e);
        } finally {
            isDownloading = false;
        }
    }
</script>

<button
    class="inline-flex items-center gap-2 self-start px-4 py-2 {states[
        item.type
    ]} transition duration-150 ease-in-out rounded-lg cursor-pointer"
    disabled={isDownloading}
    title={item.label}
    on:click={() => downloadFile(item.target)}
>
    <Download size={16} />
    {isDownloading ? 'Downloading...' : item.label}
</button>
