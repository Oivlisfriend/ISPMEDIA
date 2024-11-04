import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import foto from "~/assets/foto2.png";

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
        <div className="flex gap-2 black-600 p-3 flex-col flex-wrap rounded-lg ">
            <a href="/">
                <img src={foto} alt="pdf" className="w-48 h-48" />
            </a>
            <div className="flex flex-row py-4 font-bold items-start  justify-between">
                <a href="/" className="flex flex-col">
                    <span className="">SOS</span>
                    <span className="font-bold text-xs">2022 · SZA</span>
                </a>
                <button>
                    <FiMoreVertical />
                </button>
            </div>
        </div>
    );
};

export default ListItems;
