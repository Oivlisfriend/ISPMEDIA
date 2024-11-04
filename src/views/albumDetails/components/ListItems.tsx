import React from "react";

type Item = {
    type: string;
    title: string;
    description: string;
    arquivo: any;
    data: string;
};

type Props = {
    items: Item[];
    selected: boolean;
};

const ListItems = ({ items, selected }: Props) => {
    return (
        <div className="flex gap-4 flex-wrap">
            <div
                className={`${selected ? "bg-[#1C1C1C]" : ""} p-2 flex gap-72 items-center flex-1 text-white font-light pe-4`}
            >
                <div className="flex gap-3 items-center">
                    <img
                        src="https://img.icons8.com/ios/452/pdf.png"
                        alt="pdf"
                        className="w-12 h-12"
                    />
                    <div>
                        <h1 className="text-base font-light">Documentos</h1>
                        <h1 className="text-xs font-light">Documentos</h1>
                    </div>
                </div>
                <div>
                    <span>140,000</span>
                </div>
                <div>
                    <span>140,000</span>
                </div>
            </div>
        </div>
    );
};

export default ListItems;
