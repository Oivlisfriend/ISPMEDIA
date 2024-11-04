import { GrupoAttributes } from "^/lib/core/interface/Grupo.Interface";
import AuthViewModel from "^/lib/core/viewModels/auth/authViewModel";
import { GroupViewProps } from "^/lib/core/viewModels/GroupViewModel";
import { observer } from "mobx-react";
import { ChangeEvent } from "react";

const ModalGroup = observer(({ viewGroup }: GroupViewProps) => {
  return (
    <div className="w-96 p-6 absolute left-[35rem] top-[18%] z-20 bg-[#1C1C1C] text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Criar Grupo</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="group-name" className="block text-sm font-medium">
            Nome do grupo
          </label>
          <input
            type="text"
            id="group-name"
            onChange={viewGroup?.handleInputChange}
            className="w-full mt-1 p-2 bg-transparent border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Inserir o nome do grupo"
          />
          <div className="text-right text-xs mt-1">0/150</div>
        </div>
        <div className="mb-4">
          <label htmlFor="privacy" className="block text-sm font-medium">
            Privacidade
          </label>
          <select
            value={viewGroup?.payloadGroup.tipo}
            onChange={viewGroup?.handleTipoChange}
            id="privacy"
            className="w-full mt-1 p-2 bg-transparent border border-[#8D8D8D] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 black-600 hover:font-bold"
          >
            <option>Privado</option>
            <option>Público</option>
          </select>
        </div>
        <div className="flex justify-between gap-3">
          <button
            onClick={viewGroup?.createGroup}
            type="button"
            className="w-full py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Criar
          </button>
          <button
            onClick={viewGroup?.toggleModal}
            type="button"
            className="w-full py-2  bg-red-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancelar
          </button>
        </div>
      </form>
      <div className="fixed inset-0 bg-white opacity-70 blur-lg z-20"></div>
    </div>
  );
});

export default ModalGroup;
