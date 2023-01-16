import decodeHtml from '../decodeHtml';

export default function Question({ question }) {
    return (
        <>
            <legend>{decodeHtml(question)}</legend>
        </>
    )
}