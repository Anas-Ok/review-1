
/**
 * Slices the input text to a specified maximum length and appends an ellipsis if the text exceeds that length.
 *
 * @param txt - The input text to be sliced.
 * @param max - The maximum length of the sliced text. Defaults to 50.
 * @returns The sliced text with an ellipsis appended if it exceeds the maximum length, otherwise the original text.
 */
export function textSlicer(txt: string, max: number = 50) {
    if(txt.length >= max) {
        return txt.slice(0, max) + ' ...';
    }
    return txt;
}