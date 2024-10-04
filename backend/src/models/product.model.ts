import { model, Schema } from "mongoose";

type IComment = {
  name: string;
  comment: string;
  rating: number;
};

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
  comment?: [IComment];
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: "comment",
    },
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"],
      default: "S",
    },
    images: {
      type: [String],
      default: ["img"],
    },
    isNew: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },

    comment: [{ name: String, comment: String, rating: Number }],
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("products", productSchema);
export default Product;
