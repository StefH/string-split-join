export class StringUtils {
    public static join(strings: string[], { separatorChar = ':', escapeChar = '\\' }: { separatorChar?: string; escapeChar?: string } = { }): string {
        function escapeString(input: string): string  {
            return input
                .replace(escapeChar, escapeChar + escapeChar)
                .replace(separatorChar, escapeChar + separatorChar);
        }

        return strings.map(escapeString).join(separatorChar);
    }

    public static split(source: string, { separatorChar = ':', escapeChar = '\\' }: { separatorChar?: string; escapeChar?: string } = { }): string[] {
        function unEscapeString(input: string): string  {
            return input
                .replace(escapeChar + separatorChar, separatorChar)
                .replace(escapeChar + escapeChar, escapeChar);
        }

        const result: string[] = [];
        let segmentStart = 0;
        for (let i = 0; i < source.length; i++) {
            let readEscapeChar = false;
            if (source[i] === escapeChar) {
                readEscapeChar = true;
                i++;
            }

            if (!readEscapeChar && source[i] === separatorChar) {
                result.push(unEscapeString(source.substring(segmentStart, i)));
                segmentStart = i + 1;
            }

            if (i === source.length - 1) {
                result.push(unEscapeString(source.substring(segmentStart)));
            }
        }

        return result;
    }
}
