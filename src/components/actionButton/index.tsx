import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

interface ActionButtonProps {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

export function ActionButton({ children, setSelectedPage }: ActionButtonProps) {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}