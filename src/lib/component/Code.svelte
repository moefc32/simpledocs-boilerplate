<script>
    import { onMount } from 'svelte';

    export let value = '';

    let editor;
    let editorContainer;
    let height = '15px';

    onMount(async () => {
        const monaco = await import('monaco-editor');

        self.MonacoEnvironment = {
            getWorkerUrl: function (moduleId, label) {
                if (label === 'json') return '/monaco/json.worker.js';
                return '/monaco/editor.worker.js';
            },
        };

        editor = monaco.editor.create(editorContainer, {
            value,
            language: 'javascript',
            theme: 'vs-dark',
            readOnly: true,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            minimap: { enabled: false },
        });

        const updateHeight = () => {
            const newHeight = editor.getContentHeight();

            height = `${newHeight}px`;
            editor.layout();
        };

        editor.onDidChangeModelContent(() => {
            updateHeight();
        });

        updateHeight();

        return () => editor.dispose();
    });
</script>

<div class="my-3 py-3 bg-[#1e1e1e] rounded-lg">
    <div
        bind:this={editorContainer}
        class="w-full min-h-[15px]"
        style="height: {height};"
    ></div>
</div>
