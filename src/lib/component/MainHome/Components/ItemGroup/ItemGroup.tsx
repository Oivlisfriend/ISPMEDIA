import React from "react";

// import { Container } from './styles';
type props = {
    title: string;
    description: string;
    arquivo: any;
    data: string;
};

const ItemGroup = ({ title, description, arquivo, data }: props) => {
    return (
        <div className="flex flex-col gap-4 w-80 ">
            <img src={arquivo.foto} alt="" />
            <div className="flex justify-between items-end">
                <div className="flex flex-col">
                    <span>{title}</span>
                    <span>{description}</span>
                </div>
                <div className="flex flex-col">
                    <span>{data}</span>
                </div>
            </div>
        </div>
    );
};

export default ItemGroup;
