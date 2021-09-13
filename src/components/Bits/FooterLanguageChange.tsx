import { KNOWN_LANGUAGE_CODES } from "../../languages";

export default function FooterLanguageChange() {
    function handleLanguageChange(lang: string) {
        let actualDest = window.location.pathname.replace(/\/([a-z]{2}-?[A-Z]{0,2})\//, "/");
        window.location.pathname = "/" + lang + actualDest;
    }

    return (
        <>
            {KNOWN_LANGUAGE_CODES.map((lang) => (
                <span className='separated-bullet' key={lang}>
                    <button onClick={(e) => handleLanguageChange(lang)}>{lang}</button>
                </span>
            ))}
        </>
    );
}
