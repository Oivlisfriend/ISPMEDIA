import React, { useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import Button from "^/lib/component/buttton/Button";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import { observer } from "mobx-react";
import { GeneroViewProps } from "^/lib/core/viewModels/GeneroViewModel";
import { TipoMidiaViewProps } from "^/lib/core/viewModels/TipoMidiasViewModel";
import LegendaViewModel, {
  LegendaViewProps,
} from "^/lib/core/viewModels/LegendaViewModel";
import { GeneroDTO, TipoMidiaDTO } from "^/lib/core/adapters/AdaptersDTO";

type Props = {
  status: number;
  setStatus: any;
  setIsOpen: any;
};

const DetailsUpload = ({
  midiaModel,
  TipoMidiaView,
  viewGenero,
  setIsOpen,
}: TipoMidiaViewProps & MidiaViewProps & GeneroViewProps) => {
  const [status, setStatus] = useState(1);
  return (
    <div className="w-full flex flex-col justify-between items-center h-full py-4">
      <Status status={status} setStatus={setStatus} setIsOpen={undefined} />
      {status === 1 ? (
        <Details
          setStatus={setStatus}
          midiaModel={midiaModel}
          viewGenero={viewGenero}
          status={0}
          setIsOpen={undefined}
        />
      ) : status === 2 ? (
        <ElementosDoVideo
          setStatus={setStatus}
          midiaModel={midiaModel}
          TipoMidiaView={TipoMidiaView}
          LegendaModel={LegendaViewModel}
          status={0}
          setIsOpen={undefined}
        />
      ) : (
        <Visibilidade
          setStatus={setStatus}
          midiaModel={midiaModel}
          LegendaModel={LegendaViewModel}
          status={0}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export const Status = observer(({ status }: Props) => {
  return (
    <div className="flex flex-row justify-around w-4/5">
      {status >= 1 ? (
        <span className="flex flex-col items-center justify-center gap-2 text-red-700">
          Detalhes <FaCircle color="red" />
        </span>
      ) : (
        <span className="flex flex-col items-center justify-center gap-2">
          Detalhes <FaRegCircle />
        </span>
      )}

      {status >= 2 ? (
        <span className="flex flex-col items-center text-red-700 justify-center gap-2">
          Elementos do Video <FaCircle color="red" />
        </span>
      ) : (
        <span className="flex flex-col items-center justify-center gap-2">
          Elementos do Video <FaRegCircle />
        </span>
      )}

      {status === 3 ? (
        <span className="flex flex-col items-center text-red-700 justify-center gap-2">
          Visibilidade <FaCircle color="red" />
        </span>
      ) : (
        <span className="flex flex-col items-center justify-center gap-2">
          Visibilidade <FaRegCircle />
        </span>
      )}
    </div>
  );
});

export const Details = observer(
  ({
    setStatus,
    midiaModel,
    viewGenero,
  }: GeneroViewProps & MidiaViewProps & Props) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    return (
      <>
        <div className="w-full flex flex-col items-center justify-start h-[70%] gap-2">
          <h2 className="w-4/5 flex items-start">Detalhes</h2>
          <div
            className="border border-white rounded-md flex flex-row justify-start items-center w-4/5 px-4 py-1 h-12 gap-2 hover:cursor-pointer"
            onClick={handleButtonClick}
          >
            <div className="flex flex-col w-full">
              <span className="font-light hover:font-bold">
                Adicionar Imagem
              </span>
              <input
                type="file"
                accept=".png,.jpeg"
                className="hidden"
                ref={fileInputRef}
                onChange={midiaModel?.handleImagemChange}
              />
            </div>
          </div>
          <div className="border border-white rounded-md flex flex-col justify-start w-4/5 px-4 py-2 h-auto">
            <span className="">
              Titulo <span className="font-light">(Campo obrigatório)</span>
            </span>
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={midiaModel?.titulo}
              onChange={(e) => midiaModel?.setTitulo(e.target.value)}
              placeholder="Video sem título"
              className="h-8 px-2 text-start black-600 focus:outline-none"
            />
          </div>
          <div className="border border-white rounded-md flex flex-col justify-start w-4/5 px-4 py-2 h-auto">
            <span className="font-light">Descrição</span>
            <input
              type="text"
              name="descricao"
              id="descricao"
              value={midiaModel?.descricao}
              onChange={(e) => midiaModel?.setDescricao(e.target.value)}
              placeholder="Descrição"
              className="h-8 px-2 text-start black-600 focus:outline-none"
            />
          </div>
          <div className="border border-white rounded-md flex flex-col justify-start w-4/5 px-4 py-2 h-auto">
            <span className="font-light">Selecionar Genero</span>
            <select
              onChange={midiaModel?.handleGeneroChange}
              name="select"
              id="select"
              className="black-600 focus:outline-none hover:font-bold"
            >
              <option>Selecionar</option>
              {viewGenero.getListGenero.map((item: GeneroDTO) => (
                <option key={item.id_genero_media} value={item.id_genero_media}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div onClick={() => setStatus(2)}>
          <Button color={""} background={"red"} value={"Próximo"} />
        </div>
      </>
    );
  }
);

export const ElementosDoVideo = observer(
  ({
    setStatus,
    midiaModel,
    TipoMidiaView,
  }: MidiaViewProps & Props & LegendaViewProps & TipoMidiaViewProps) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    return (
      <>
        <div className="w-full flex flex-col items-center justify-start h-[60%] gap-2">
          <h2 className="w-4/5 flex items-start">Detalhes</h2>
          <div
            className="border border-white rounded-md flex flex-row justify-start items-center w-4/5 px-4 py-2 h-12 gap-2 hover:cursor-pointer"
            onClick={handleButtonClick}
          >
            <div className="flex flex-col w-full">
              <span className="font-light hover:font-bold">
                Adicionar legendas
              </span>
              <input
                type="file"
                accept=".srt,.vtt"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => midiaModel?.handleLegendaChange(e)}
              />
            </div>
            <MdOutlineKeyboardAlt size={24} />
          </div>
          <div className="border border-white rounded-md flex flex-col justify-start w-4/5 px-4 py-2 h-auto">
            <span className="font-light">Selecionar Tipo Midia</span>
            <select
              onChange={midiaModel?.handleTipoChange}
              className="black-600 focus:outline-none hover:font-bold"
            >
              <option>Selecionar</option>
              {TipoMidiaView.ListaTipos.map((item: TipoMidiaDTO) => (
                <option key={item.id_tipo_media} value={item.id_tipo_media}>
                  {item.nome}
                </option>
              ))}
            </select>
          </div>
          <div className="border border-white rounded-md flex flex-col justify-start w-4/5 px-4 py-2 h-auto">
            <span className="">Duração da midia</span>
            <input
              type="text"
              value={midiaModel?.duracao}
              onChange={(e) => midiaModel?.setDuracao(e.target.value)}
              placeholder="ex: 3:25 min ..."
              className="h-8 px-2 text-start black-600 focus:outline-none"
            />
          </div>
          <div className="border border-white rounded-md flex flex-col justify-start w-4/5 px-4 py-2 h-auto">
            <span className="">Tamanho da midia</span>
            <input
              type="text"
              value={midiaModel?.tamanho}
              onChange={(e) => midiaModel?.setTamanho(e.target.value)}
              placeholder="ex: 4MB ..."
              className="h-8 px-2 text-start black-600 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex w-full gap-2 px-2 items-center justify-center">
          <div onClick={() => setStatus(1)}>
            <Button color={""} background={"red"} value={"Voltar"} />
          </div>
          <div onClick={() => setStatus(3)}>
            <Button color={""} background={"red"} value={"Próximo"} />
          </div>
        </div>
      </>
    );
  }
);

export const Visibilidade = observer(
  ({
    setStatus,
    midiaModel,
    LegendaModel,
    setIsOpen,
  }: MidiaViewProps & Props & LegendaViewProps) => {
    const [loading, setLoading] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleSend = async () => {
      setLoading(true);
      await midiaModel?.createMidia();
      setLoading(false);
      setCompleted(true);
      setIsOpen(false);
    };

    return (
      <>
        {loading && (
          <div className="fixed inset-0 bg-zinc-800 bg-opacity-75 flex flex-col items-center justify-center z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-red-500"></div>
            <p className="mt-4 text-2xl font-extrabold">
              Compressão em andamento...
            </p>
          </div>
        )}
        {completed && !loading && (
          <div className="fixed inset-0 bg-zinc-800 bg-opacity-75 flex items-center justify-center z-50 flex-col gap-8">
            <p className="text-3xl font-extrabold ">Concluído</p>
            <span
              className="bg-red-600  text-white px-4 py-2 rounded ml-2"
              onClick={() => {
                setCompleted(!completed);
                setIsOpen(false);
              }}
            >
              Fechar
            </span>
          </div>
        )}
        {!loading && !completed && (
          <>
            <div className="w-full flex flex-col items-center justify-start h-[60%] gap-2">
              <h2 className="w-4/5 flex items-start">Visibilidade</h2>
              <div className="border border-white rounded-md flex flex-row justify-start w-4/5 px-4 py-2 h-20">
                <div className="flex flex-col w-full h-full gap-2">
                  <span className="font-light">
                    Selecionar Visibilidade do vídeo
                  </span>
                  <select
                    onChange={midiaModel?.handleVisibilidadeChange}
                    className="black-600 focus:outline-none hover:font-bold"
                  >
                    <option>Selecionar</option>
                    <option>Privado</option>
                    <option>Público</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 px-2 items-center justify-center">
              <div onClick={() => setStatus(2)}>
                <Button color={""} background={"red"} value={"Voltar"} />
              </div>
              <div onClick={handleSend}>
                <Button color={""} background={"red"} value={"Enviar"} />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
);

export default observer(DetailsUpload);
