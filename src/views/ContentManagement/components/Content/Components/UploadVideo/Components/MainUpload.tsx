import Button from "^/lib/component/buttton/Button";
import { MidiaViewProps } from "^/lib/core/viewModels/MidiaViewModel";
import { useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { observer } from "mobx-react";

interface MainUploadProps {
  setStatusUpload: (status: string) => void;
}

const MainUpload = ({
  midiaModel,
  setStatusUpload,
}: MainUploadProps & MidiaViewProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = async () => {
    await fileInputRef.current?.click();
  };

  if (midiaModel?.getFileMidia != null) {
    setStatusUpload("DetailsUpload");
  }

  return (
    <div className="w-full flex flex-col justify-center items-center h-full gap-8">
      <div className="p-8 black-700 rounded-full" onClick={handleButtonClick}>
        <FiUpload size={48} />
      </div>
      <input
        type="file"
        accept="video/*,audio/*"
        onChange={midiaModel?.handleMidiaChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <div className="flex flex-col gap-1 text-center">
        <span className="font-semibold">
          Arraste e solte os arquivos de vídeo ou música para fazer o envio
        </span>
        <span className="font-light">
          Suas mídias ficarão privadas até que você as publique
        </span>
      </div>
      <div onClick={handleButtonClick}>
        <Button color="" background="red" value="Selecionar Mídias" />
      </div>
    </div>
  );
};

export default observer(MainUpload);
