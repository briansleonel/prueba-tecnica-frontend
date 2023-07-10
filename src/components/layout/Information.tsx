import { PaperClipIcon } from "@heroicons/react/20/solid";
import Paragraph from "./Paragraph";
import React from "react";

export default function Information({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`grid grid-cols-[1rem,1fr] md:grid-cols-[1.25rem,1fr] gap-2 items-start md:items-center ${
                className ? className : ""
            }`}
        >
            <PaperClipIcon className="w-4 h-4 md:w-5 md:h-5 mt-1 md:mt-0 text-blue-400" />
            <Paragraph className="">{children}</Paragraph>
        </div>
    );
}
