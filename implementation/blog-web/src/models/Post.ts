import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    tags: { type: [String], default: [] },
    coverImage: { type: String, default: "" },
    status: { type: String, default: "published" },
  },
  { timestamps: true }
);

export const Post =
  (mongoose.models.Post as mongoose.Model<{
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    publishedAt: Date;
    tags: string[];
    coverImage?: string;
    status?: string;
  }>) || mongoose.model("Post", PostSchema);

