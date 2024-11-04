import { EditoraAttributes } from "../interface/Editora.Interface";
import { ApiBase } from "./ApiBase";

class EditoraAPI extends ApiBase<EditoraAttributes> {
  constructor() {
    super("editora");
  }
}

export const editoraAPI = new EditoraAPI();
