type PostProps = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  authorId: string;
}

const PostItem = ({ id, title, content, createdAt, updatedAt, published, authorId }: PostProps) => {
  return (
    <div className="p-4 border-b bg-white shadow-md rounded-lg mb-1">
      <h2 className="font-bold text-lg text-gray-900">{title}</h2>
      <p className="text-gray-700 overflow-auto">{content}</p>

      <div className="mt-2 text-sm text-gray-500">
        <p><b>Post ID:</b> {id}</p>
        <p><b>Created:</b> {new Date(createdAt).toLocaleDateString()}</p>
        <p><b>Updated:</b> {new Date(updatedAt).toLocaleDateString()}</p>
        <p><b>Author ID:</b> {authorId}</p>
        <p className={published ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
          {published ? "Published" : "Not Published"}
        </p>
      </div>
    </div>
  );
};

export default PostItem;