import React from "react";
import { TbSend2 } from "react-icons/tb";
import { MidiaView } from "^/lib/core/viewModels/MidiaViewModel";
import { observer } from "mobx-react";

const Comment = observer(({ midiaView }: MidiaView) => {
  return (
    <div>
      <div className="w-full flex items-center pt-2">
        <div className=" rounded-xl flex border-2 flex-1 ">
          <textarea
            value={midiaView.comment.descricao}
            onChange={midiaView.handleInputChange}
            className="ps-3 text-sm bg-transparent py-2 w-full outline-none"
            placeholder="Typing anything..."
            maxLength={2048}
            rows={1}
          ></textarea>
        </div>
        <div className="ps-2 ">
          <button
            onClick={midiaView.addComment}
            className="bg-[#e73232] rounded-full py-2 px-2"
          >
            <TbSend2 className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
});

export default Comment;
