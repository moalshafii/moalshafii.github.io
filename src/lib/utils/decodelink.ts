export default function decodelink(encodedLink: string): string | null {
	if (!/^[0-9a-fA-F]+$/.test(encodedLink)) return null;
	if (encodedLink.length % 2 !== 0) return null;

	const decoded = (encodedLink.match(/.{1,2}/g) || [])
		.map((byte) => String.fromCharCode(parseInt(byte, 16)))
		.join('')
		.replace(/[<>"'(){}]/, '');

	if (!['http:', 'https:'].includes(new URL(decoded).protocol)) return null;

	return decoded;
}
