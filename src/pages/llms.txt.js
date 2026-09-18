import { metadata } from '../lib/config';

export async function GET() {
    const content = [
        `# ${metadata.siteName}`,
        '',
        `> ${metadata.description}`,
        '',
        '## Site Navigation',
        '',
    ].join('\n');

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
