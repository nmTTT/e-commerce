import { model, Schema } from "mongoose";

interface ISize {
  name: string;
  description: string;
}

const sizeSchema = new Schema<ISize>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});

const Size = model<ISize>("size", sizeSchema);

export default Size;
