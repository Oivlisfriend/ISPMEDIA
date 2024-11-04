import React from "react";

import group from "~/assets/createGroup.png";
import playlist from "~/assets/createPlaylist.png";

const NavCreate = () => {
    return (
        <div className="flex justify-center flex-col px-7  text-sm font-medium items-start  bg-[#1C1C1C] p-5 rounded-2xl gap-3 ">
            <div className="flex justify-center gap-2  items-center ">
                <img src={group} alt="google" className="w-7 h-7" />
                <span>Criar Playlist</span>
            </div>
            <div className="flex justify-center gap-2  items-center">
                <img src={playlist} alt="google" className="w-7 h-7" />
                <span>Criar Grupo</span>
            </div>
        </div>
    );
};
export default NavCreate;
