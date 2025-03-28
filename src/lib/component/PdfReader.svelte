<script>
    import { onMount } from 'svelte';
    import * as pdfjsLib from 'pdfjs-dist';
    import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

    export let target;

    let container;
    let scale = 1.5;

    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

    async function renderPDF() {
        if (!target || !container) return;

        const fileUrl = target.startsWith('/')
            ? `${import.meta.env.VITE_BASE_PATH || ''}${target}`
            : target;

        const response = await fetch(fileUrl, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
        });
        const blob = await response.blob();
        const pdfBlobUrl = URL.createObjectURL(
            new Blob([blob], { type: 'application/pdf' }),
        );
        const loadingTask = pdfjsLib.getDocument(pdfBlobUrl);
        const pdf = await loadingTask.promise;

        container.innerHTML = '';

        const firstPage = await pdf.getPage(1);
        const viewport = firstPage.getViewport({ scale: 1 });
        const containerWidth = container.clientWidth;
        scale = containerWidth / viewport.width;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            container.appendChild(canvas);

            const context = canvas.getContext('2d');
            await page.render({ canvasContext: context, viewport }).promise;
        }
    }

    onMount(() => {
        renderPDF();
        window.addEventListener('resize', renderPDF);
    });
</script>

<div class="w-full h-[calc(100dvh-100px)] rounded-lg overflow-hidden">
    <div
        bind:this={container}
        class="flex flex-col gap-3 bg-slate-500/50 w-full h-full border-[1px] border-gray-700 overflow-y-auto"
    ></div>
</div>

<style>
    div::-webkit-scrollbar {
        width: 0.85rem;
    }

    div::-webkit-scrollbar-track {
        background: rgba(100%, 100%, 100%, 0.85);
    }

    div::-webkit-scrollbar-thumb {
        background: var(--color-gray-500);
    }

    div::-webkit-scrollbar-thumb:hover {
        background: var(--color-gray-600);
    }
</style>
