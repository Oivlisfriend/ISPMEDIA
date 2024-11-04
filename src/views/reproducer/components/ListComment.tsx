import { MidiaView } from "^/lib/core/viewModels/MidiaViewModel";
import { observer } from "mobx-react";
import React from "react";

const ListComment = observer(({ midiaView }: MidiaView) => {
  return (
    <div className="py-2 h-16 mt-3  mb-[-4px] scroll-transparent overflow-auto">
      <ul className="gap-2 flex flex-col">
        {midiaView.comments?.map((comment) => (
          <li className="py-2 px-2 bg-[#1C1C1C]  text-[#D9D9D9] rounded-lg">
            {comment.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ListComment;
