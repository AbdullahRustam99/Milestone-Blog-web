"use client";
import React, { useState } from "react";
interface comment {
  username: string;
  comment: string;
}
const CommentsBox = ({ params }: { params: { id: string } }) => {
  const [formData, setformData] = useState({ username: "", comment: "" });
  const [comments, setcomments] = useState<comment[]>([]);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username && !formData.comment) {
      alert("Fill Out Both Field");
      return;
    }
    const response = {
      blogId: params.id,
      username: formData.username,
      comment: formData.comment,
    };

    if (response) {
      setcomments((prev) => [...prev, { ...formData }]);
      setformData({ username: "", comment: "" });
    }
  };

  return (
    <>
      <div className="w-[350px] md:w-[600px] p-5 bg-[#f7f7f7e0]  rounded-lg text-black">
        <p className="text-[23px] font-semibold text-red-950 pb-2">Comments</p>
        <div className=" flex flex-col gap-5 justify-center items-center">
          <form
            onSubmit={handleComment}
            className="flex flex-col items-center justify-center gap-4"
          >
            <input
              name="username"
              type="text"
              className="p-2 w-[300px] md:w-[400px]  "
              placeholder="User Name"
              value={formData.username}
              onChange={inputHandler}
            />
            <textarea
              name="comment"
              className="p-2 w-[300px] md:w-[400px] h-40"
              placeholder="User Comment"
              value={formData.comment}
              onChange={inputHandler}
            />
            <button
              type="submit"
              className="bg-red-950 text-[20px] w-[300px] md:w-[400px] p-3 text-white"
            >
              Comment
            </button>
          </form>
          <div>
            {comments.map((c, index) => (
              <div
                key={index}
                className="px-5 py-2 rounded-md w-[400px] mb-2 flex flex-col  bg-white h-full"
              >
                <p className="font-semibold text-red-950 capitalize text-[18px]">
                  {c.username}
                </p>
                <p>{c.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsBox;
