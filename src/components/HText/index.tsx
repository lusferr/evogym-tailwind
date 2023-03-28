
interface HTextProps {
    children: React.ReactNode;
}

export function HText({ children }: HTextProps) {
    return (
        <div>
            <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
                {children}
            </h1>
        </div>
    )
}