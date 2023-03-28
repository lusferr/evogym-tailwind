import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

interface LinkProps {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

export function Link({ page, selectedPage, setSelectedPage }: LinkProps) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};